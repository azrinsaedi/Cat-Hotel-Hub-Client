import { Form, redirect, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

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

const AdminRegister = () => {
  // const navigation = useNavigation();
  // const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="username" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <FormRow type="text" name="company" />
        <SubmitBtn />
        {/* <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button> */}
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default AdminRegister;
