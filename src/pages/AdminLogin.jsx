import {
  Link,
  Form,
  redirect,
  useActionData,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  if (data.password.length < 3) {
    errors.msg = "password too short";
    return errors;
  }
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

const AdminLogin = () => {
  const errors = useActionData();
  // const navigation = useNavigation();
  // const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "secret123",
    };
    try {
      await customFetch.post("/admin/login", data);
      toast.success("take a test drive");
      navigate("/admin/dashboard/");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <SubmitBtn />
        {/* <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button> */}
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          explore the app
        </button>
        {errors && <p style={{ color: "red" }}>{errors.msg}</p>}
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default AdminLogin;
