import React from "react";
import { AiFillEye } from "react-icons/ai";
import Navbar from "../../Layout/Navbar";
import Table from "../../Table";

const TCMember = () => {
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
      <Navbar />
      <div className="dbox-10">
        <div className="mt-3">
          <Table data={Users} column={column} />
        </div>
      </div>
    </>
  );
};

export default TCMember;
