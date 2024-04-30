import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export async function action({ params }) {
  try {
    await customFetch.delete(`/account/delete-pet/${params.id}`);
    toast.success("Pet deleted successfully");
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect("/account/dashboard/pets");
}

// const DeletePet = () => {
//   return <div>DeletePet</div>;
// };
// export default DeletePet;
