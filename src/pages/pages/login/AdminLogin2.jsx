import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import Login from "@/components/pages/Login";
import FormRow2 from "../../../components/FormRow2";
import React from "react";
import {
  Link,
  Form,
  redirect,
  useActionData,
  useNavigate,
} from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";

import customFetch from "../../../utils/customFetch";
import { toast } from "react-toastify";
import LoginBtn2 from "@/components/LoginBtn2";
import OtherLogins from "@/components/OtherLogins";

const metadata = {
  title: "Login || Azrin - Travel & Tour Reactjs Template",
  description: "Azrin - Travel & Tour Reactjs Template",
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  try {
    await customFetch.post("/admin/login", data);
    toast.success("Login successful");
    return redirect("/admin/dashboard");
  } catch (error) {
    // toast.error(error?.response?.data?.msg);
    // return error;
    errors.msg = error.response.data.msg;
    return errors;
  }
};

export default function LoginPage() {
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
                  <h1 className="text-30">Log In</h1>
                  <div className="text-18 fw-500 mt-20 md:mt-15">
                    We're glad to see you again!
                  </div>
                  <div className="mt-5">
                    Don't have an account?{" "}
                    <Link to="/account/register" className="text-accent-1">
                      Sign Up!
                    </Link>
                  </div>
                </div>
                <Form
                  className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30"
                  method="post"
                >
                  <FormRow2
                    type="email"
                    name="email"
                    labelText="Email Address"
                  />
                  <FormRow2
                    type="password"
                    name="password"
                    labelText="Password"
                  />

                  <div className="row y-ga-10 justify-between items-center pt-30">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <div className="form-checkbox ">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon">
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 10 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="lh-11 ml-10">Remember me</div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <a href="#">Lost your password?</a>
                    </div>
                  </div>
                  <LoginBtn2 />
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
