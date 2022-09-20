import React from "react";
import Navbar from "../Layout/Navbar";
import Tabs from "../Tabs";
import Appointment from "./Appointment";
import Attendance from "./Attendance";
import CallHistary from "./CallHistary";
import Docs from "./Docs";
import Measurement from "./Measurement";
import Payment from "./Payment";
import Profile from "./Profile";
import ReferBy from "./ReferBy";
import ServiceCard from "./ServiceCard";
import TC from "./TC";

const EmployeeDetails = () => {
  const data = [
    {
      title: "Profile",
      compo: <Profile />,
      bgcolor: "green",
    },
    {
      title: "Job Profile",
      compo: <ServiceCard />,
      bgcolor: "green",
    },
    {
      title: "Payroll",
      compo: <Payment />,
      bgcolor: "green",
    },

    { title: "Document", compo: <Attendance />, bgcolor: "green" },
    { title: "Leave Report", compo: <Appointment />, bgcolor: "green" },
    { title: "Attendence", compo: <ReferBy />, bgcolor: "green" },
    { title: "Family Members", compo: <Measurement />, bgcolor: "green" },
    { title: "Shop", compo: <Measurement />, bgcolor: "green" },
    {
      title: "Calls",
      compo: <CallHistary />,
      bgcolor: "green",
    },
    { title: "Trials", compo: <Measurement />, bgcolor: "green" },
    { title: "Fitness", compo: <Measurement />, bgcolor: "green" },
    { title: "Docs", compo: <Docs />, bgcolor: "green" },
    { title: "T&C", compo: <TC />, bgcolor: "green" },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div
            className="text-center"
            style={{ fontWeight: "bold", fontSize: "23px" }}
          >
            Employee Details
          </div>
          <div className="mt-3">
            <Tabs data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
