import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineAddBox, MdPhoneMissed } from "react-icons/md";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineInfoCircle,
} from "react-icons/ai";

import Table from "../Table";
import { FaFolderOpen, FaFolderPlus } from "react-icons/fa";
const AllClients = () => {
  const [action, setAction] = useState("All Clients");
  const [search, setSearch] = useState("Search By :");

  const column = [
    /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */
    { heading: "S.No", value: "id" },
    { heading: "Member Id", value: "MemberId" },
    { heading: "Assign Date & Time", value: "date_time" },
    { heading: "Member Name", label: "member_name" },
    { heading: "Mobile", value: "mobile" },
    { heading: "Service Name", value: "service_name" },
    { heading: "Service Variation Name", value: "variation_name" },
    { heading: "Expiry Date", value: "expiry_date" },
    {
      heading: "Info",
      btn1: (
        <div className="bg-icon d-flex justify-content-center align-items-center">
          <AiOutlineInfoCircle />
        </div>
      ),
    },
    { heading: "Renew", btn: "Renew" },
    {
      heading: "Call Status",
      btn1: (
        <div className="bg-icon d-flex justify-content-center align-items-center">
          <MdOutlineAddBox />
        </div>
      ),
      btn2: (
        <div className="bg-icon d-flex justify-content-center align-items-center">
          <MdPhoneMissed />
        </div>
      ),
    },
    { heading: "Sales Rep", value: "sales_rep" },
    { heading: "PT Trainer", value: "pt_trainer" },
    { heading: "Trainer", value: "trainer" },
    { heading: "Staff Name", value: "staff_name" },
  ];

  const Users = [
    {
      id: 1,
      date_time: "25-08-2022 03:00 PM",
      member_name: "Nayana Nagrecha",
      mobile: "9136123476",
      service_name: "Yoga",
      variation_name: "3 Months",
      expiry_date: "31-08-2022",
      sales_rep: "Sejal Ganatra",
      pt_trainer: "-",
      trainer: "Prabha Yadav",
      staff_name: "Sejal Ganatra",
    },
    {
      id: 2,
      date_time: "25-08-2022 03:00 PM",
      member_name: "Nayana Nagrecha",
      mobile: "9136123476",
      service_name: "Yoga",
      variation_name: "3 Months",
      expiry_date: "31-08-2022",
      sales_rep: "Sejal Ganatra",
      pt_trainer: "-",
      trainer: "Prabha Yadav",
      staff_name: "Sejal Ganatra",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center" style={{ fontSize: "23px" }}>
            ALL CLIENTS
          </div>

          <div className="d-flex justify-content-between mt-2">
            <div></div>
            <div
              className="d-flex align-items-center mt-3"
              style={{ gap: "10px" }}
            >
              <div class="btn-group">
                <button
                  type="button"
                  className="btn search-selector dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {search}
                </button>
                <div className="dropdown-menu">
                  <label
                    className="dropdown-item"
                    onClick={() => setSearch("Name")}
                  >
                    Name
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setSearch("Mobile")}
                  >
                    Mobile
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setSearch("Service Name")}
                  >
                    Service Name
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setSearch("Sales Rep")}
                  >
                    Sales Rep
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setSearch("Trainer")}
                  >
                    Trainer
                  </label>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Search"
                  className="btn search-input"
                />
              </div>

              <button className="btn search-btn">Search</button>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <div
              className="d-flex align-items-center mt-3"
              style={{ gap: "30px" }}
            >
              <div class="btn-group">
                <div
                  className="mr-3 btn-own4"
                  style={{ backgroundColor: "#F39C12" }}
                >
                  Total Clients : 23
                </div>
              </div>
            </div>
            <div
              className="d-flex align-items-center justify-content-center mt-3"
              style={{ gap: "30px" }}
            >
              <div
                className="mr-3 btn-own4"
                style={{ backgroundColor: "#2ECC71" }}
              >
                Active Clients : 18
              </div>
            </div>

            <div
              className="d-flex align-items-center justify-content-center mt-3"
              style={{ gap: "30px" }}
            >
              <div
                className="mr-3 btn-own4"
                style={{ backgroundColor: "#F1C40F" }}
              >
                Current Renewal : 18
              </div>
            </div>

            <div
              className="d-flex align-items-center justify-content-center mt-3"
              style={{ gap: "30px" }}
            >
              <div
                className="mr-3 btn-own4"
                style={{ backgroundColor: "#7DCEA0" }}
              >
                Renewed Clients : 18
              </div>
            </div>

            <div
              className="d-flex align-items-center mt-3"
              style={{ gap: "20px" }}
            >
              <div className="mr-3 btn-own4" style={{ backgroundColor: "red" }}>
                left Clients : 5
              </div>
            </div>
          </div>
          <br />

          <div className="d-flex justify-content-between">
            <div
              className="d-flex align-items-center justify-content-center mt-3"
              style={{ gap: "30px" }}
            >
              <div className="ml-1" style={{ fontSize: "14px" }}>
                All:
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn filter-btn dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {action}
                </button>
                <div className="dropdown-menu">
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Today")}
                  >
                    Today
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </label>
                </div>
              </div>
            </div>
            <div
              className="d-flex align-items-center justify-content-center mt-3"
              style={{ gap: "30px" }}
            >
              <div style={{ fontSize: "14px" }}>Service Category:</div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn filter-btn dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {action}
                </button>
                <div className="dropdown-menu">
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Today")}
                  >
                    Today
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </label>
                </div>
              </div>
            </div>
            <div
              className="d-flex align-items-center justify-content-center mt-3"
              style={{ gap: "30px" }}
            >
              <div style={{ fontSize: "14px" }}>Sub-Filter:</div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn filter-btn dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {action}
                </button>
                <div className="dropdown-menu">
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Today")}
                  >
                    Today
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </label>
                </div>
              </div>
            </div>
            <div
              className="d-flex align-items-center justify-content-around mt-3"
              style={{ gap: "30px" }}
            >
              <div style={{ fontSize: "14px" }}>Marketing:</div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn filter-btn dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {action}
                </button>
                <div className="dropdown-menu">
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Today")}
                  >
                    Today
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <button
                className="btn filter-btn1 "
                style={{ marginRight: "5px" }}
              >
                Import Clients <FaFolderPlus className="mb-1" />
              </button>
              <button className="btn filter-btn1">
                Export <FaFolderOpen className="mb-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="dbox-10">
          <div>
            <Table data={Users} column={column} />
          </div>

          <div className="d-flex align-items-center text-center justify-content-center mt-3">
            <button className="btn btn_enquiry">
              <AiOutlineArrowLeft />
              Previous
            </button>
            <p style={{ padding: "20px", marginTop: "10px" }}>Page 1 to 10</p>
            <button className="btn btn_enquiry">
              Next
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllClients;
