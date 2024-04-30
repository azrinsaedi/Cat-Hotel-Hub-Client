import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import BannerFour from "@/components/homes/banners/BannerFour";
import BannerTwo from "@/components/homes/banners/BannerTwo";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import DestinationsTwo from "@/components/homes/destinations/DestinationsTwo";
import OfferDestinations from "@/components/homes/destinations/OfferDestinations";
import TopAttractions from "@/components/homes/destinations/TopAttractions";
import FeaturesThree from "@/components/homes/features/FeaturesThree";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import Hero2 from "@/components/homes/heros/Hero2";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import TourSlider2 from "@/components/homes/tours/TourSlider2";
import PopulerTours from "@/components/homes/tours/PopulerTours";
import Tour1 from "@/components/homes/tours/Tour1";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import React, { createContext, useContext } from "react";
import customFetch from "../../../utils/customFetch";
import {
  Form,
  useNavigation,
  redirect,
  useLoaderData,
  useParams,
  useOutletContext,
} from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
const ViewHotelsContext = createContext();

const metadata = {
  title: "Home-2 || Azrin - Travel & Tour Reactjs Template",
  description: "Azrin - Travel & Tour Reactjs Template",
};

export const loader = async () => {
  try {
    const { data } = await customFetch.get(`/public/hotels`);
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return redirect("/");
  }
};

export default function HomePage2() {
  const data = useLoaderData();
  return (
    <>
      <ViewHotelsContext.Provider value={data}>
        <MetaComponent meta={metadata} />
        <main>
          <Header2 />
          <Hero2 />
          {/* <PopulerTours /> */}
          <Tour1 />
          <OfferDestinations />
          <TourSlider2 />
          <FeturesTwo />
          <DestinationsTwo />
          <BannerTwo />
          <TopAttractions />
          <div className="bg-accent-1-05">
            <TestimonialOne />
          </div>
          <BannerFour />
          <FeaturesThree />
          <ArticlesOne />
          <BrandsOne />
          <FooterTwo />
        </main>
      </ViewHotelsContext.Provider>
    </>
  );
}

export const useViewHotelsContext = () => useContext(ViewHotelsContext);
