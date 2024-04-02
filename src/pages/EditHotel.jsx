import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData, useParams } from "react-router-dom";
import { HOTEL_STATUS, HOTEL_TYPE } from "../../../server/utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/admin/${params.id}`);
    console.log("data", data);
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
  const { hotel } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit hotel</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="total_rooms"
            labelText="Total Rooms"
            defaultValue={hotel.total_rooms}
          />
          {/* <FormRow type="text" name="company" defaultValue={hotel.company} />
          <FormRow
            type="text"
            labelText="hotel location"
            name="hotelLocation"
            defaultValue={hotel.hotelLocation}
          />

          <FormRowSelect
            name="hotelStatus"
            labelText="hotel status"
            defaultValue={hotel.hotelStatus}
            list={Object.values(HOTEL_STATUS)}
          />
          <FormRowSelect
            name="hotelType"
            labelText="hotel type"
            defaultValue={hotel.hotelType}
            list={Object.values(HOTEL_TYPE)}
          /> */}
          <button
            type="submit"
            className="btn btn-block form-btn "
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting..." : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditHotel;
