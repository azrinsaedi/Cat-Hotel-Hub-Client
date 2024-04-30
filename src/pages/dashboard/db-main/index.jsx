import DBMain from "@/components/dashboard/main";
import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { sidebarItems } from "@/data/dashboard";

import MetaComponent from "@/components/common/MetaComponent";
import { Loading } from "../../../components";

import customFetch from "../../../utils/customFetch";
import { useState, createContext, useContext, useEffect } from "react";
import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import { toast } from "react-toastify";

const metadata = {
  title: "Dashboard-main || Azrin - Travel & Tour Reactjs Template",
  description: "Azrin - Travel & Tour Reactjs Template",
};

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

export default function AdminDashboard2() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const [isAuthError, setIsAuthError] = useState(false);

  const logoutUser = async () => {
    await customFetch.get("/admin/logout");
    toast.success("Logging out...");
    navigate("/");
  };
  const { user } = useLoaderData();

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
        // showSidebar,
        // isDarkTheme,
        // toggleDarkTheme,
        // toggleSidebar,
        logoutUser,
      }}
    >
      <MetaComponent meta={metadata} />
      <main>
        <div
          className={`dashboard ${
            sideBarOpen ? "-is-sidebar-visible" : ""
          } js-dashboard`}
        >
          <Sidebar
            setSideBarOpen={setSideBarOpen}
            sidebarItems={sidebarItems}
            DashboardContext={AdminDashboardContext}
          />

          <div className="dashboard__content">
            <Header
              setSideBarOpen={setSideBarOpen}
              DashboardContext={AdminDashboardContext}
            />

            <div className="dashboard__content_content">
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
              <div className="text-center pt-30">
                © Copyright Azrin {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
        {/* {isPageLoading ? <Loading /> : <Outlet context={{ user }} />} */}

        {/* <DBMain /> */}
      </main>
    </AdminDashboardContext.Provider>
  );
}

export const useAdminDashboardContext = () => useContext(AdminDashboardContext);
