import { ChartsContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
export const loader = async () => {
  const response = await customFetch.get("/admin/stats");
  return response.data;
  // try {
  //   const response = await customFetch.get("/admin/stats");
  //   return response.data;
  // } catch (error) {
  //   return error;
  // }
};

const AdminStats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};
export default AdminStats;
