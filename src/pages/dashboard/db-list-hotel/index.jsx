import DBListHotel from "@/components/dashboard/DBListHotel";
import React from "react";
import customFetch from "../../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
const AllHotelsContext = createContext();

import MetaComponent from "@/components/common/MetaComponent";

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get("/admin", {
      params,
    });

    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const metadata = {
  title: "Dashboard-listing || Azrin - Travel & Tour Reactjs Template",
  description: "Azrin - Travel & Tour Reactjs Template",
};

export default function DBListingHotel() {
  const { data, searchValues } = useLoaderData();
  return (
    <>
      <AllHotelsContext.Provider value={{ data, searchValues }}>
        <MetaComponent meta={metadata} />
        <main>
          <DBListHotel />
        </main>
      </AllHotelsContext.Provider>
    </>
  );
}

export const useAllHotelsContext = () => useContext(AllHotelsContext);
