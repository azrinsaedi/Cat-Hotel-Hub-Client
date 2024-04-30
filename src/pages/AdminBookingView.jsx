import AdminBooking from "@/components/dashboard/AdminBooking";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Dashboard-booking || Azrin - Travel & Tour Reactjs Template",
  description: "Azrin - Travel & Tour Reactjs Template",
};

const AdminBookingView = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <AdminBooking />
      </main>
    </>
  );
};
export default AdminBookingView;
