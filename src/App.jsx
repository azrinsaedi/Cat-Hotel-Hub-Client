import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/style.css";
import HomePage2 from "./pages/homes/home-2";
import { useEffect } from "react";
import Aos from "aos";
import BookingPage from "@/pages/booking";

import {
  AccountBookingCancel,
  AccountBookingConfirm,
  AccountBookingFailed,
  AccountBookingSuccess,
  AccountBookingView,
  AccountForgotPassword,
  AccountLogin,
  AccountRegister,
  AddHotel,
  AddPet,
  AdminBookingView,
  AdminBookingCancel,
  AdminDashboard,
  AdminForgotPassword,
  AdminLogin,
  AdminProfile,
  AdminRegister,
  // DeleteHotel,
  // DeletePet,
  EditHotel,
  EditPet,
  MainPage,
  Landing,
  AllHotels,
  AdminAppStats,
  AdminStats,
} from "./pages";
import AccountLoginPage from "./pages/pages/login/AccountLogin2";
import AdminLoginPage from "./pages/pages/login/AdminLogin2";
import AdminRegisterPage from "./pages/pages/register/AdminRegister2";
import AccountRegisterPage from "./pages/pages/register/AccountRegister2";
import AdminDashboard2 from "./pages/dashboard/db-main";
import AccountDashboard2 from "./pages/dashboard/account-dashboard";
import DBMain from "./components/dashboard/main";
import DBAddHotelPage from "./pages/dashboard/db-add-hotel";
import { action as registerAdminAction } from "./pages/pages/register/AdminRegister2";
import { action as registerAccountAction } from "./pages/pages/register/AccountRegister2";
import { action as loginAccountAction } from "./pages/pages/login/AccountLogin2";
import { action as loginAdminAction } from "./pages/pages/login/AdminLogin2";
import { action as adminProfileAction } from "./pages/AdminProfile";
import { action as accountBookHotel } from "@/components/booking/TourSingleSidebar";
// import { action as loginAdminAction } from "./pages/AdminLogin";
// import { action as addHotelAction } from "./pages/AddHotel";
import { action as addHotelAction } from "@/components/dashboard/AddHotel";
import { action as addPetAction } from "@/components/dashboard/AddPetComponent";
// import { loader as adminLoader } from "./pages/AdminDashboard";
import { loader as adminLoader } from "./pages/dashboard/db-main";
import { loader as accountLoader } from "./pages/dashboard/account-dashboard";
import { loader as allAccountBookingLoader } from "./components/dashboard/AccountBooking";
import { loader as allAdminBookingLoader } from "./components/dashboard/AdminBooking";
// import { loader as allHotelLoader } from "./pages/AllHotels";
import { loader as allHotelLoader } from "./pages/dashboard/db-list-hotel";
import { loader as allPetLoader } from "./pages/dashboard/db-list-pet";
import { loader as editHotelLoader } from "./pages/EditHotel";
import { action as editHotelAction } from "./pages/EditHotel";
import { loader as editPetLoader } from "./pages/EditPet";
import { action as editPetAction } from "./pages/EditPet";
import { action as deleteHotelAction } from "./pages/DeleteHotel";
import { action as deletePetAction } from "./pages/DeletePet";
import { action as cancelAccountBookingAction } from "./pages/AccountCancelBooking";
import { action as cancelAdminBookingAction } from "./pages/AdminCancelBooking";
import { loader as getSingleHotelPublic } from "./pages/booking";
import { loader as StatsAdminLoader } from "./pages/AdminAppStats";
import { loader as publicLoader } from "@/pages/homes/home-2";
import { ErrorElement } from "./components";
import DBListingHotel from "./pages/dashboard/db-list-hotel";
import DBListingPet from "./pages/dashboard/db-list-pet";
import StripePay from "./components/StripePay";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        // element: <Landing />,
        element: <HomePage2 />,
        loader: publicLoader,
      },
      {
        path: "admin",
        children: [
          {
            path: "dashboard",
            // element: <AdminDashboard />,
            element: <AdminDashboard2 />,
            loader: adminLoader,
            children: [
              {
                index: true,
                element: <DBMain />,
              },
              {
                // index: true,
                path: "add-hotel",
                element: <DBAddHotelPage />,
                // element: <AddHotel />,
                action: addHotelAction,
              },
              {
                path: "all-hotel",
                // element: <AllHotels />,
                element: <DBListingHotel />,
                loader: allHotelLoader,
              },
              {
                path: "profile",
                element: <AdminProfile />,
                action: adminProfileAction,
              },
              {
                path: "app-stats",
                element: <AdminAppStats />,
                loader: StatsAdminLoader,
              },
              {
                path: "stats",
                element: <AdminStats />,
                loader: StatsAdminLoader,
                errorElement: <ErrorElement />,
              },
              {
                path: "edit-hotel/:id",
                element: <EditHotel />,
                loader: editHotelLoader,
                action: editHotelAction,
              },
              {
                path: "delete-hotel/:id",
                // element: <DeleteHotel />,
                action: deleteHotelAction,
              },
              {
                path: "booking",
                element: <AdminBookingView />,
                loader: allAdminBookingLoader,
                children: [
                  // {
                  //   path: ":id/confirm",
                  //   element: <AccountBookingConfirm />,
                  // },
                  // {
                  //   path: ":id/success",
                  //   element: <AccountBookingSuccess />,
                  // },
                  // {
                  //   path: ":id/failed",
                  //   element: <AccountBookingFailed />,
                  // },
                  {
                    path: "cancel/:id",
                    // element: <AccountBookingCancel />,
                    action: cancelAdminBookingAction,
                  },
                ],
              },
              {
                path: "booking/cancel",
                element: <AdminBookingCancel />,
              },
            ],
          },
          {
            path: "login",
            // element: <AdminLogin />,
            element: <AdminLoginPage />,
            action: loginAdminAction,
          },
          {
            path: "register",
            element: <AdminRegisterPage />,
            // element: <AdminRegister />,
            action: registerAdminAction,
          },
          {
            path: "forgot-password",
            element: <AdminForgotPassword />,
          },
        ],
      },
      {
        path: "account",
        children: [
          {
            path: "dashboard",
            element: <AccountDashboard2 />,
            loader: accountLoader,
            children: [
              {
                index: true,
                element: <DBMain />,
              },
              {
                path: "add-pet",
                element: <AddPet />,
                action: addPetAction,
              },
              {
                path: "pets",
                element: <DBListingPet />,
                loader: allPetLoader,
                // element: <EditPet />,
              },
              {
                path: "edit-pet/:id",
                element: <EditPet />,
                loader: editPetLoader,
                action: editPetAction,
              },
              {
                path: "delete-pet/:id",
                action: deletePetAction,
              },
              {
                path: "booking",
                element: <AccountBookingView />,
                loader: allAccountBookingLoader,
                children: [
                  // {
                  //   path: ":id/confirm",
                  //   element: <AccountBookingConfirm />,
                  // },
                  // {
                  //   path: ":id/success",
                  //   element: <AccountBookingSuccess />,
                  // },
                  // {
                  //   path: ":id/failed",
                  //   element: <AccountBookingFailed />,
                  // },
                  {
                    path: "cancel/:id",
                    // element: <AccountBookingCancel />,
                    action: cancelAccountBookingAction,
                  },
                  {
                    path: "pay",
                    element: <StripePay />,
                  },
                ],
              },
              {
                // index: true,
                path: "add-hotel",
                element: <DBAddHotelPage />,
                // element: <AddHotel />,
                action: addHotelAction,
              },
              {
                path: "all-hotel",
                // element: <AllHotels />,
                element: <DBListingHotel />,
                loader: allHotelLoader,
              },
              {
                path: "profile",
                element: <AdminProfile />,
                action: adminProfileAction,
              },
              {
                path: "app-stats",
                element: <AdminAppStats />,
                loader: StatsAdminLoader,
              },
              {
                path: "stats",
                element: <AdminStats />,
                loader: StatsAdminLoader,
                errorElement: <ErrorElement />,
              },
              {
                path: "edit-hotel/:id",
                element: <EditHotel />,
                loader: editHotelLoader,
                action: editHotelAction,
              },
              {
                path: "delete-hotel/:id",
                // element: <DeleteHotel />,
                action: deleteHotelAction,
              },
              {
                path: "booking",
                element: <AdminBookingView />,
              },
              {
                path: "booking/cancel",
                element: <AdminBookingCancel />,
              },
            ],
          },
          {
            path: "login",
            // element: <AccountLogin />,
            element: <AccountLoginPage />,
            action: loginAccountAction,
          },
          {
            path: "register",
            // element: <AccountRegister />,
            element: <AccountRegisterPage />,
            action: registerAccountAction,
          },
          {
            path: "forgot-password",
            element: <AccountForgotPassword />,
          },
        ],
      },
      {
        path: "booking/:id",
        element: <BookingPage />,
        loader: getSingleHotelPublic,
        action: accountBookHotel,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return <RouterProvider router={router} />;
};
export default App;
