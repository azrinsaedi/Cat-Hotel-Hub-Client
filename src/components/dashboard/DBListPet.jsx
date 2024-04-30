import Pagination from "../common/Pagination";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Stars from "../common/Stars";
import { useState } from "react";
import Hotel from "./Hotel";
import { usePetsListContext } from "@/pages/dashboard/db-list-pet";
import PageBtnContainer from "@/components/PageBtnContainer";
import Cat from "./Cat";

export default function DBListPet() {
  const { data } = usePetsListContext();
  const { cats, totalCats, numOfPages } = data;
  if (cats.length === 0) {
    return <h2>No pets to display...</h2>;
  }
  // const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <>
      <h1 className="text-30">Pets List</h1>
      <p className="">Lorem ipsum dolor sit amet, consectetur.</p>
      <h5>
        {totalCats} cat{cats.length > 1 && "s"} found
      </h5>

      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:pb-20 mt-60 md:mt-30">
        <div className="row y-gap-30">
          {cats.map((cat) => {
            return <Cat key={cat._id} {...cat} />;
          })}
        </div>
        {/* {numOfPages > 1 && <PageBtnContainer />} */}

        <div className="mt-30">
          {/* {numOfPages > 1 && <Pagination />} */}
          {numOfPages > 1 && <PageBtnContainer data={data} />}

          <div className="text-14 text-center mt-20">
            Showing results 1-30 of {totalCats}
          </div>
        </div>
      </div>
    </>
  );
}
