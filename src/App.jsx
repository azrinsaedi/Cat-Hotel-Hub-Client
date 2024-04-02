import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  AdminBooking,
  AdminBookingCancel,
  AdminDashboard,
  AdminForgotPassword,
  AdminLogin,
  AdminProfile,
  AdminRegister,
  // DeleteHotel,
  DeletePet,
  EditHotel,
  EditPet,
  MainPage,
  Landing,
  AllHotels,
  AdminAppStats,
  AdminStats,
} from "./pages";
import { action as registerAdminAction } from "./pages/AdminRegister";
import { action as adminProfileAction } from "./pages/AdminProfile";
import { action as loginAdminAction } from "./pages/AdminLogin";
import { action as addHotelAction } from "./pages/AddHotel";
import { loader as adminLoader } from "./pages/AdminDashboard";
import { loader as allHotelLoader } from "./pages/AllHotels";
import { loader as editHotelLoader } from "./pages/EditHotel";
import { action as editHotelAction } from "./pages/EditHotel";
import { action as deleteHotelAction } from "./pages/DeleteHotel";
import { loader as StatsAdminLoader } from "./pages/AdminAppStats";
import { ErrorElement } from "./components";

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
        element: <Landing />,
      },
      {
        path: "admin",
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
            loader: adminLoader,
            children: [
              {
                // index: true,
                path: "add-hotel",
                element: <AddHotel />,
                action: addHotelAction,
              },
              {
                path: "profile",
                element: <AdminProfile />,
                action: adminProfileAction,
              },
              {
                // index: true,
                path: "all-hotel",
                element: <AllHotels />,
                loader: allHotelLoader,
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
                element: <AdminBooking />,
              },
              {
                path: "booking/cancel",
                element: <AdminBookingCancel />,
              },
            ],
          },
          {
            path: "login",
            element: <AdminLogin />,
            action: loginAdminAction,
          },
          {
            path: "register",
            element: <AdminRegister />,
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
            path: "login",
            element: <AccountLogin />,
          },
          {
            path: "register",
            element: <AccountRegister />,
          },
          {
            path: "forgot-password",
            element: <AccountForgotPassword />,
          },
          {
            path: "add-pet",
            element: <AddPet />,
          },
          {
            path: "edit-pet",
            element: <EditPet />,
          },
          {
            path: "delete-pet",
            element: <DeletePet />,
          },
          {
            path: "booking",
            element: <AccountBookingView />,
            children: [
              {
                path: ":id/confirm",
                element: <AccountBookingConfirm />,
              },
              {
                path: ":id/success",
                element: <AccountBookingSuccess />,
              },
              {
                path: ":id/failed",
                element: <AccountBookingFailed />,
              },
              {
                path: ":id/cancel",
                element: <AccountBookingCancel />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
