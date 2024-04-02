import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  { text: "add hotel", path: "add-hotel", icon: <FaWpforms /> },
  { text: "edit hotel", path: "edit-hotel", icon: <MdQueryStats /> },
  { text: "delete hotel", path: "delete-hotel", icon: <ImProfile /> },
  { text: "booking", path: "booking", icon: <MdAdminPanelSettings /> },
  { text: "profile", path: "profile", icon: <MdAdminPanelSettings /> },
  {
    text: "cancel booking",
    path: "booking/cancel",
    icon: <MdAdminPanelSettings />,
  },
  { text: "stats", path: "stats", icon: <IoBarChartSharp /> },
];

export default links;
