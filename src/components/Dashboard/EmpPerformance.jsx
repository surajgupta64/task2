import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdOutlineAddBox,
} from "react-icons/md";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import { SalesClosure } from "../Table/ReportTable";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EmpPerformance = () => {
  const [action, setAction] = useState("Aug");
  const [call, setCall] = useState("2022");
  const [staff, setStaff] = useState("All Staff");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  const data = [
    {
      srno: "1",
      counseller: "Sejal Ganatra",
      target: "200000",
      targetclient: "75",
      newsales: "51100",
      newclient: "20",
      renewals: "86250",
      renewalsclient: "25",
      closureno: "45",
      collected: "10000",
      balance: "41650",
      achived: "79",
    },
    {
      srno: "2",
      counseller: "Sejal Ganatra",
      target: "200000",
      newsales: "51100",
      renewals: "86250",
      balance: "41650",
      collected: "10000",
      achived: "79",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div
            className="text-center mb-2 text-capitalize"
            style={{ fontSize: "23px" }}
          >
            EMPLOYEE PERFORMANCE
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex" style={{ gap: "30px" }}>
              <div
                className="d-flex align-items-center"
                style={{ gap: "20px" }}
              >
                <div>Month</div>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-own dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {action}
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setStaff("Select")}
                    >
                      Select
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setStaff("Send E-mail")}
                    >
                      Send E-mail
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setStaff("Send SMS")}
                    >
                      Send SMS
                    </a>
                  </div>
                </div>
                <div>Year</div>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-own dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {call}
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setStaff("Select")}
                    >
                      Select
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setStaff("Send E-mail")}
                    >
                      Send E-mail
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setStaff("Send SMS")}
                    >
                      Send SMS
                    </a>
                  </div>
                </div>
                <div class="btn-group">
                  <input
                    type="text"
                    className="btn btn-own"
                    placeholder="Enter Staff Name"
                  />
                </div>
                <div>
                  <button className="btn btn-primary">Go</button>
                </div>

                <button className="btn btn_enquiry">Export Excel</button>
              </div>
            </div>
          </div>

          <div>
            <SalesClosure data={data} title={"Sales Closure"} />
          </div>
          <div>
            <SalesClosure data={data} title={"Cilent Closure"} />
          </div>
          <div>
            <SalesClosure data={data} title={"Lead Target"} />
          </div>
          <div>
            <SalesClosure data={data} title={"Renewals Target"} />
          </div>
          <div>
            <SalesClosure data={data} title={"Refrance Lead Taget"} />
          </div>
          <div>
            <SalesClosure data={data} title={"Daily Calls"} />
          </div>
          <div>
            <SalesClosure data={data} title={"Media Target"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpPerformance;
