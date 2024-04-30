import Pagination from "../common/Pagination";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Stars from "../common/Stars";
import { useState } from "react";
import Hotel from "./Hotel";
import { useAllHotelsContext } from "@/pages/dashboard/db-list-hotel";
import PageBtnContainer from "@/components/PageBtnContainer";

export default function DBListHotel() {
  const { data } = useAllHotelsContext();
  const { hotels, totalHotels, numOfPages } = data;
  if (hotels.length === 0) {
    return <h2>No hotels to display...</h2>;
  }
  // const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <>
      <h1 className="text-30">Hotel List</h1>
      <p className="">Lorem ipsum dolor sit amet, consectetur.</p>
      <h5>
        {totalHotels} hotel{hotels.length > 1 && "s"} found
      </h5>

      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:pb-20 mt-60 md:mt-30">
        <div className="row y-gap-30">
          {hotels.map((hotel) => {
            return <Hotel key={hotel._id} {...hotel} />;
            /* <div key={i} className="col-lg-6">
              <div className="border-1 rounded-12 px-20 py-20">
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div className="col-xxl-auto">
                    <img
                      src={elm.imageSrc}
                      alt="image"
                      className="size-200 w-1/1 object-cover rounded-12"
                    />
                  </div>

                  <div className="col">
                    <div className="d-flex items-center">
                      <i className="icon-pin mr-5"></i>
                      {elm.location}
                    </div>

                    <div className="text-18 lh-15 fw-500 mt-5">{elm.title}</div>

                    <div className="d-flex items-center mt-5">
                      <div className="d-flex x-gap-5 text-yellow-2 mr-10">
                        <Stars star={elm.rating} />
                      </div>
                      <div>
                        {elm.rating} ({elm.ratingCount})
                      </div>
                    </div>

                    <div className="row y-gap-15 justify-between items-end pt-5">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <i className="icon-clock mr-5"></i>
                          <div className="text-14">{elm.duration}</div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="text-right md:text-left">
                          <div className="lh-14">${elm.price}</div>
                          From{" "}
                          <span className="text-20 fw-500">
                            ${elm.price + 1000}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */
          })}
        </div>
        {/* {numOfPages > 1 && <PageBtnContainer />} */}

        <div className="mt-30">
          {/* {numOfPages > 1 && <Pagination />} */}
          {numOfPages > 1 && <PageBtnContainer data={data} />}

          <div className="text-14 text-center mt-20">
            Showing results 1-30 of {totalHotels}
          </div>
        </div>
      </div>
    </>
  );
}
