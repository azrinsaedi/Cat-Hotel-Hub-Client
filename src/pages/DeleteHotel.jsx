import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export async function action({ params }) {
  try {
    await customFetch.delete(`/admin/${params.id}`);
    toast.success("Hotel deleted successfully");
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect("/admin/dashboard/all-hotel");
}

// const DeleteHotel = () => {
//   return <div>DeleteHotel</div>;
// };
// export default DeleteHotel;
