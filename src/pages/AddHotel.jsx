import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";

import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/admin", data);
    toast.success("Hotel added successfully");
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddHotel = () => {
  const { user } = useOutletContext();
  console.log(user);
  // const navigation = useNavigation();
  // const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add hotel</h4>
        <div className="form-center">
          <FormRow type="text" name="name" labelText="name" />
          <FormRow
            type="text"
            name="total_rooms"
            labelText="Total Room"
            defaultValue={0}
          />
          <FormRow type="hidden" name="company" defaultValue={user.company} />
          <SubmitBtn formBtn />

          {/* <button
            type="submit"
            className="btn btn-block form-btn "
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting..." : "submit"}
          </button> */}
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddHotel;
