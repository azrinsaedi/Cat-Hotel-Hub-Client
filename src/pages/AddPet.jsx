import AddPetComponent from "@/components/dashboard/AddPetComponent";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Dashboard-add-hotel || Azrin - Travel & Tour Reactjs Template",
  description: "Azrin - Travel & Tour Reactjs Template",
};

const AddPet = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <AddPetComponent />
      </main>
    </>
  );
};
export default AddPet;
