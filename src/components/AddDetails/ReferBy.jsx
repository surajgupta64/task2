import React from "react";
import Table from "../Table";

const ReferBy = () => {
  const column = [
    /* 
            value: keyword for normal value passing
            btn: keyword for button
            btn1 to btn4: keyword for component passing
            lebel: keyword for anchor tag
            Note: please don't pass empty values or perameters
            */
    { heading: "S.No", value: "id" },
    { heading: "Date", value: "date" },
    { heading: "Referred By", value: "referredBy" },
    { heading: "Referred To", label: "referredTo" },
    { heading: "Country Code", label: "countryCode" },
    { heading: "Referral Mobile", label: "mobile" },
    { heading: "Email", value: "email" },
    { heading: "Status", value: "status" },
  ];

  const Users = [
    {
      id: 1,
      date: "20-08-2022",
      referredBy: "prabha",
      referredTo: "sonali",
      mobile: "7710957578",
      countryCode: "+91",
      email: "-",
      status: "Convert",
    },
    {
      id: 2,
      date: "20-08-2022",
      referredBy: "prabha",
      referredTo: "sonali",
      mobile: "7710957578",
      countryCode: "+91",
      email: "-",
      status: "Not Convert",
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

export default ReferBy;
