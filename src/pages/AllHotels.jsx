import { toast } from "react-toastify";
import { HotelsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
const AllHotelsContext = createContext();

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get("/admin", {
      params,
    });

    console.log("data", data);
    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllHotels = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <AllHotelsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <HotelsContainer />
    </AllHotelsContext.Provider>
  );
};

export const useAllHotelsContext = () => useContext(AllHotelsContext);

export default AllHotels;
