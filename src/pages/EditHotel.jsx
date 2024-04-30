import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useState } from "react";
import { HOTEL_STATUS, HOTEL_TYPE } from "../../../server/utils/constants";
import {
  Form,
  useNavigation,
  redirect,
  useLoaderData,
  useParams,
  useOutletContext,
} from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import FormRow2 from "@/components/FormRow2";

const tabs = ["Content", "Location", "Pricing", "Included"];

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/admin/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return redirect("/admin/dashboard/all-hotel");
  }
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/admin/${params.id}`, data);
    toast.success("Hotel edited successfully");
    return redirect("/admin/dashboard/all-hotel");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const EditHotel = () => {
  // const params = useParams();
  // console.log(params);
  const { user } = useOutletContext();
  const [activeTab, setActiveTab] = useState("Content");
  const { hotel } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
      <h1 className="text-30">Add Hotel</h1>
      <p className="">Fill out cat hotel details</p>

      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-60">
        <div className="tabs -underline-2 js-tabs">
          <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
            {tabs.map((elm, i) => (
              <div
                onClick={() => setActiveTab(elm)}
                key={i}
                className="col-auto"
              >
                <button
                  className={`tabs__button text-20 lh-12 fw-500 pb-15 lg:pb-0 js-tabs-button ${
                    activeTab == elm ? "is-tab-el-active" : ""
                  }`}
                >
                  {i + 1}. {elm}
                </button>
              </div>
            ))}
          </div>
          <Form method="post" className="form">
            <div className="row pt-40">
              <div className="col-xl-9 col-lg-10">
                <div className="tabs__content js-tabs-content">
                  <div
                    className={`tabs__pane  ${
                      activeTab == "Content" ? "is-tab-el-active" : ""
                    }`}
                  >
                    <div className="contactForm row y-gap-30">
                      <div className="col-12">
                        <FormRow2
                          type="text"
                          name="name"
                          labelText="Hotel Name"
                          defaultValue={hotel.name}
                        />
                      </div>
                      <div className="col-12">
                        <FormRow2
                          type="number"
                          name="total_rooms"
                          labelText="Total Rooms"
                          defaultValue={hotel.total_rooms}
                        />
                      </div>
                      <FormRow2
                        type="hidden"
                        name="company"
                        defaultValue={user.company}
                      />

                      <div className="col-12">
                        <button
                          type="submit"
                          className="button -md -dark-1 bg-accent-1 text-white"
                        >
                          {isSubmitting ? "Saving" : "Save"}
                          {/* Save Changes */}
                          <i className="icon-arrow-top-right text-16 ml-10"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
    // <Wrapper>
    //   <Form method="post" className="form">
    //     <h4 className="form-title">edit hotel</h4>
    //     <div className="form-center">
    //       <FormRow
    //         type="text"
    //         name="total_rooms"
    //         labelText="Total Rooms"
    //         defaultValue={hotel.total_rooms}
    //       />
    //       {/* <FormRow type="text" name="company" defaultValue={hotel.company} />
    //       <FormRow
    //         type="text"
    //         labelText="hotel location"
    //         name="hotelLocation"
    //         defaultValue={hotel.hotelLocation}
    //       />

    //       <FormRowSelect
    //         name="hotelStatus"
    //         labelText="hotel status"
    //         defaultValue={hotel.hotelStatus}
    //         list={Object.values(HOTEL_STATUS)}
    //       />
    //       <FormRowSelect
    //         name="hotelType"
    //         labelText="hotel type"
    //         defaultValue={hotel.hotelType}
    //         list={Object.values(HOTEL_TYPE)}
    //       /> */}
    //       <button
    //         type="submit"
    //         className="btn btn-block form-btn "
    //         disabled={isSubmitting}
    //       >
    //         {isSubmitting ? "submitting..." : "submit"}
    //       </button>
    //     </div>
    //   </Form>
    // </Wrapper>
  );
};
export default EditHotel;
