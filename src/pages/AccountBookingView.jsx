import AccountBooking from "@/components/dashboard/AccountBooking";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Dashboard-booking || Azrin - Travel & Tour Reactjs Template",
  description: "Azrin - Travel & Tour Reactjs Template",
};

const AccountBookingView = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <AccountBooking />
      </main>
    </>
  );
};
export default AccountBookingView;
