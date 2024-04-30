import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/booking/PageHeader";
import TourSlider from "@/components/booking/TourSlider";
import SingleOne from "@/components/booking/pages/SingleOne";
// import { allTour } from "@/data/tours";
import { useLoaderData, useParams } from "react-router-dom";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import customFetch from "@/utils/customFetch";
import { toast } from "react-toastify";

const metadata = {
  title: "Tour-single-1 || Azrin - Travel & Tour Reactjs Template",
  description: "Azrin - Travel & Tour Reactjs Template",
};

export const loader = async ({ params }) => {
  try {
    let { data } = await customFetch.get(`/public/booking/${params.id}`);
    data.customer = (
      await customFetch("/account/current-user-details")
    ).data[0];
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return redirect("/admin/dashboard/all-hotel");
  }
};

export default function BookingPage() {
  let data = useLoaderData();
  // let params = useParams();
  // const id = params.id;
  // const tour = allTour.find((item) => item.id == id) || allTour[0];

  return (
    <>
      <MetaComponent meta={metadata} />

      <main>
        <Header1 />
        <PageHeader />

        <SingleOne data={data} />
        {/* <TourSlider /> */}
        <FooterOne />
      </main>
    </>
  );
}
