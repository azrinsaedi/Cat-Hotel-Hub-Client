import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
import customFetch from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { Form, redirect, Link } from "react-router-dom";
import FormRow2 from "../../../components/FormRow2";
import SubmitBtn2 from "../../../components/SubmitBtn2";
import OtherLogins from "@/components/OtherLogins";

const metadata = {
  title: "Register || Azrin - Travel & Tour Reactjs Template",
  description: "Azrin - Travel & Tour Reactjs Template",
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/admin/register", data);
    toast.success("Registration successful");
    return redirect("/admin/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export default function AdminRegister2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header2 />
        <section className="mt-header layout-pt-lg layout-pb-lg">
          <div className="container">
            <div className="row justify-center">
              <div className="col-xl-6 col-lg-7 col-md-9">
                <div className="text-center mb-60 md:mb-30">
                  <h1 className="text-30">Register</h1>
                  <div className="text-18 fw-500 mt-20 md:mt-15">
                    Let's create your account!
                  </div>
                  <div className="mt-5">
                    Already have an account?{" "}
                    <Link to="/admin/login" className="text-accent-1">
                      Log In!
                    </Link>
                  </div>
                </div>

                <Form
                  className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30"
                  method="post"
                >
                  <FormRow2
                    type="text"
                    name="username"
                    labelText="Username"
                    // className="form-input"
                  />
                  <FormRow2
                    type="email"
                    name="email"
                    labelText="Email"
                    className="mt-15"
                  />
                  <FormRow2
                    type="password"
                    name="password"
                    labelText="Password"
                    className="mt-15"
                  />
                  <FormRow2
                    type="text"
                    name="company"
                    labelText="Company"
                    className="mt-15"
                  />
                  <SubmitBtn2 />
                  <OtherLogins />
                </Form>
              </div>
            </div>
          </div>
        </section>
        <FooterTwo />
      </main>
    </>
  );
}
