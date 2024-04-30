import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
import Pagination from "../common/Pagination";
import { bookingData } from "@/data/dashboard";
import customFetch from "@/utils/customFetch";
import { toast } from "react-toastify";
import { Form, useLoaderData } from "react-router-dom";

const tabs = ["Approved", "Pending", "Cancelled"];
export const loader = async () => {
  try {
    const { data } = await customFetch.get(`/account/show-bookings`);
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return redirect("/account/dashboard");
  }
};

export default function AccountBooking() {
  const { bookings } = useLoaderData();
  // const [sideBarOpen, setSideBarOpen] = useState(true);
  const [currentTab, setcurrentTab] = useState("Approved");
  // Function to format date in "Month Day, Year" format
  const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      {/* <div
        className={`dashboard ${
          sideBarOpen ? "-is-sidebar-visible" : ""
        } js-dashboard`}
      >
        <Sidebar setSideBarOpen={setSideBarOpen} />

        <div className="dashboard__content">
          <Header setSideBarOpen={setSideBarOpen} />

          <div className="dashboard__content_content"> */}
      <h1 className="text-30">My Booking</h1>
      <p className="">Lorem ipsum dolor sit amet, consectetur.</p>

      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:mb-20 mt-60">
        <div className="tabs -underline-2 js-tabs">
          <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
            {tabs.map((elm, i) => (
              <div
                key={i}
                className="col-auto"
                onClick={() => setcurrentTab(elm)}
              >
                <button
                  className={`tabs__button text-20 lh-12 fw-500 pb-15 lg:pb-0 js-tabs-button ${
                    elm == currentTab ? "is-tab-el-active" : ""
                  }`}
                >
                  {elm}
                </button>
              </div>
            ))}
          </div>

          <div className="tabs__content js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-tab-el-active">
              <div className="overflowAuto">
                <table className="tableTest mb-30">
                  <thead className="bg-light-1 rounded-12">
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Start date</th>
                      <th>End date</th>
                      <th>Pets</th>
                      <th>Details</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {bookings
                      .filter((elm) => elm.status == currentTab)
                      .map((elm, i) => (
                        <tr key={i}>
                          {/* <td>{elm.orderNumber}</td> */}
                          <td>{elm._id}</td>

                          <td className="min-w-300">
                            <div className="d-flex items-center">
                              {/* <img src={elm.imageUrl} alt="image" /> */}
                              <img
                                src="/img/dashboard/booking/1.jpg"
                                alt="image"
                              />

                              <div className="ml-20">{elm.hotel.name}</div>
                            </div>
                          </td>

                          <td>{formatDate(elm.check_in)}</td>

                          <td>{formatDate(elm.check_out)}</td>
                          <td>
                            {elm.cats.map((e, i) => (
                              <p key={i}>{e.name}</p>
                            ))}
                          </td>

                          <td>{elm.occupied_rooms}</td>

                          {/* <td>{elm.cost}</td> */}
                          <td>200</td>

                          <td>
                            <div
                              className={`circle ${
                                elm.status == "Approved"
                                  ? "text-purple-1"
                                  : elm.status == "Pending"
                                  ? "text-yellow-1"
                                  : "text-red-2"
                              } `}
                            >
                              {elm.status}
                            </div>
                          </td>

                          <td>
                            <div className="d-flex items-center">
                              {/* <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                              <i className="icon-pencil text-14"></i>
                            </button> */}

                              <Form
                                method="post"
                                action={`/account/dashboard/booking/cancel/${elm._id}`}
                              >
                                <button
                                  type="submit"
                                  className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10"
                                >
                                  <i className="icon-delete text-14"></i>
                                </button>
                              </Form>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <Pagination />

              <div className="text-14 text-center mt-20">
                Showing results 1-30 of 1,415
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
