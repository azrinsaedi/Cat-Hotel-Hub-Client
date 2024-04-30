import React from "react";
import customFetch from "../../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
const PetsListContext = createContext();

import MetaComponent from "@/components/common/MetaComponent";
import DBListPet from "@/components/dashboard/DBListPet";

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get("/account/show-pets", {
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

export default function DBListingPet() {
  const { data, searchValues } = useLoaderData();
  return (
    <>
      <PetsListContext.Provider value={{ data, searchValues }}>
        <MetaComponent meta={metadata} />
        <main>
          <DBListPet />
        </main>
      </PetsListContext.Provider>
    </>
  );
}

export const usePetsListContext = () => useContext(PetsListContext);
