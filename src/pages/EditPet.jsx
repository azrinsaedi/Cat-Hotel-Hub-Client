import { useState } from "react";
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
    const { data } = await customFetch.get(`/account/pet/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return redirect("/account/dashboard/pets");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/account/edit-pet/${params.id}`, data);
    toast.success("Pet edited successfully");
    return redirect("/account/dashboard/pets");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const EditPet = () => {
  const { user } = useOutletContext();
  const [activeTab, setActiveTab] = useState("Content");
  const { name } = useLoaderData();
  console.log(name);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <h1 className="text-30">Add Pet</h1>
      <p className="">Fill out pet hotel details</p>

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
                          labelText="Pet Name"
                          defaultValue={name}
                        />
                      </div>

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
  );
};
export default EditPet;
