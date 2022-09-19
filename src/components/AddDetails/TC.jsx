import React from "react";
import { AiFillEye } from "react-icons/ai";
import Table from "../Table";

const TC = () => {
  const column = [
    /* 
            value: keyword for normal value passing
            btn: keyword for button
            btn1 to btn4: keyword for component passing
            lebel: keyword for anchor tag
            Note: please don't pass empty values or perameters
            */
    { heading: "S.No", value: "id" },
    { heading: "Branch", value: "branch" },
    { heading: "Agreement", value: "agreement" },
    { heading: "Signature By", label: "signby" },
    { heading: "Signature date", label: "signdate" },
    { heading: "Status", value: "status" },
    { heading: "T&C Doc", btn1: <AiFillEye /> },
  ];

  const Users = [
    {
      id: 1,
      signdate: "20-08-2022",
      agreement: "Terms & Conditions",
      signby: "sonali",
      branch: "Kandivali east",
      status: "Accepted",
    },
    {
      id: 2,
      signdate: "20-08-2022",
      agreement: "Terms & Conditions",
      signby: "sonali",
      branch: "Borivali west",
      status: "Accepted",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
        <div className="title ml-3">Referral</div>
        <div>
          <button className="btn filter-btn1 " style={{ marginRight: "5px" }}>
            Inter branch transfer
          </button>
          <button className="btn filter-btn1 " style={{ marginRight: "5px" }}>
            Print Profile
          </button>
          <button className="btn filter-btn1 " style={{ marginRight: "5px" }}>
            New Invoice
          </button>
          <button className="btn filter-btn1 " style={{ marginRight: "5px" }}>
            New Call
          </button>
          <button className="btn filter-btn1 ">New Appointment</button>
        </div>
      </div>
      <div className="mt-3">
        <Table data={Users} column={column} />
      </div>
    </>
  );
};

export default TC;
