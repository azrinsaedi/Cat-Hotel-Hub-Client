import AddHotel from "@/components/dashboard/AddHotel";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Dashboard-add-hotel || Azrin - Travel & Tour Reactjs Template",
  description: "Azrin - Travel & Tour Reactjs Template",
};

export default function DBAddHotelPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <AddHotel />
      </main>
    </>
  );
}
