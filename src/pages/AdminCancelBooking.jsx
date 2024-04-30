import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export async function action({ params }) {
  try {
    await customFetch.delete(`/admin/cancel-booking/${params.id}`);
    toast.success("Booking cancelled successfully");
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect("/admin/dashboard/booking");
}
