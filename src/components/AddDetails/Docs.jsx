import React from "react";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import Table from "../Table";

const Docs = () => {
  const [action1, setAction1] = useState("Select");
  const column = [
    /* 
            value: keyword for normal value passing
            btn: keyword for button
            btn1 to btn4: keyword for component passing
            lebel: keyword for anchor tag
            Note: please don't pass empty values or perameters
            */
    { heading: "S.No", value: "id" },
    { heading: "Date", value: "Date" },
    { heading: "Member Name", value: "MemberName" },
    { heading: "Staff Name", label: "StaffName" },
    { heading: "Document Category", label: "category" },
    { heading: "Name Of Document", label: "docName" },
    { heading: "View Document", btn1: <AiFillEye /> },
    { heading: "T&C Doc", btn1: <AiFillEye /> },
  ];

  const Users = [
    {
      id: 1,
      Date: "20-08-2022",
      StaffName: "Sejal",
      MemberName: "sonali",
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
      <div className="d-flex mt-5 ml-5 mr-2">
        <div className="d-flex mr-5" style={{ gap: "30px" }}>
          <div>Document Type</div>
          <div className="btn-group ">
            <button
              type="button"
              className="btn search-selector dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {action1}
            </button>
            <div className="dropdown-menu">
              <label
                className="dropdown-item"
                onClick={() => setAction1("Club Agreement")}
              >
                Club Agreement
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("Address Proof")}
              >
                Address Proof
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("ID Proof")}
              >
                ID Proof
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex mr-5" style={{ gap: "30px" }}>
          <div>Select Document</div>
          <div className="btn-group ">
            <button
              type="button"
              className="btn search-selector dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {action1}
            </button>
            <div className="dropdown-menu">
              <label
                className="dropdown-item"
                onClick={() => setAction1("Light Bill")}
              >
                Light Bill
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("Aadhar Card")}
              >
                Aadhar Card
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("Pan card")}
              >
                Pan card
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex mr-5" style={{ gap: "30px" }}>
          <div>Upload Document</div>
          <div className="btn-group ">
            <input type="file" className="filter-btn2 btn" />
          </div>
        </div>
        <div>
          <button className="filter-primary-btn">Submit Document</button>
        </div>
      </div>
      <div className="mt-3">
        <Table data={Users} column={column} />
      </div>
    </>
  );
};

export default Docs;
