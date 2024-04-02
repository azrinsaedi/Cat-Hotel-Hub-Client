import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";

import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
import { AdminStatsItem } from "../components";

export const loader = async () => {
  const response = await customFetch.get("/admin/stats");
  return response.data;
  // try {
  //   const response = await customFetch.get("/admin/stats");
  //   return response.data;
  // } catch (error) {
  //   toast.error("You are not authorized to view this page");
  //   return redirect("/dashboard");
  // }
};

const AdminAppStats = () => {
  const { bookingCount } = useLoaderData();
  return (
    <Wrapper>
      {/* <AdminStatsItem
        title="current users"
        count={bookingCount}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      /> */}
      <AdminStatsItem
        title="total bookings"
        count={bookingCount}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};
export default AdminAppStats;
