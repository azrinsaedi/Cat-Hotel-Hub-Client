import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, SmallSidebar, AdminNavbar, Loading } from "../components";
import { useState, createContext, useContext, useEffect } from "react";
import customFetch from "../utils/customFetch";
import { checkDefaultTheme } from "../App";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await customFetch("/admin/current-admin");
    return data;
  } catch (error) {
    console.log("error", error);
    return redirect("/");
  }
};

const AdminDashboardContext = createContext();

const AdminDashboard = () => {
  const [isAuthError, setIsAuthError] = useState(false);
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    await customFetch.get("/admin/logout");
    toast.success("Logging out...");
    navigate("/");
  };

  customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
  }, [isAuthError]);

  return (
    <AdminDashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <AdminNavbar />
            <div className="dashboard-page">
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
            </div>
          </div>
        </main>
      </Wrapper>
    </AdminDashboardContext.Provider>
  );
};

export const useAdminDashboardContext = () => useContext(AdminDashboardContext);

export default AdminDashboard;
