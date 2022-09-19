import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
const ClientBiometric = () => {
  const [action, setAction] = useState("All Clients");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center" style={{ fontSize: "23px" }}>
            CLIENT BIOMETRIC
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex" style={{ gap: "30px" }}>
              <div
                className={
                  action === "Custom Date Range"
                    ? "d-flex align-items-center"
                    : "hide"
                }
                style={{ gap: "30px" }}
              >
                <div style={{ fontSize: "15px" }}>From</div>
                <div className="cal-icon">
                  <BsCalendarCheck onClick={() => setCal(true)} />
                  {openCal && (
                    <div>
                      <Calendar onChange={onChange} value={value} />
                    </div>
                  )}
                </div>
                <div style={{ fontSize: "15px" }}>To</div>
                <div className="cal-icon">
                  <BsCalendarCheck onClick={() => setCal(false)} />
                  {openCal && (
                    <div>
                      <Calendar onChange={onChange} value={value} />
                    </div>
                  )}
                </div>
              </div>
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
              <div>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between">
            <div className="d-flex" style={{ gap: "15px" }}>
              <button className="btn btn_enquiry">Export Excel</button>
              <button className="btn btn_enquiry">Staff Report</button>
              <button className="btn btn_enquiry">
                Add Service to Biometric
              </button>
              <button className="btn btn_enquiry">Device List</button>
              <button className="btn btn_enquiry">Access Only Report</button>
            </div>
          </div>
        </div>
        <div className="dbox-10">
          <div>
            <table
              className="table_client_2"
              border="1"
              cellSpacing="0"
              width="100%"
            >
              <tr className="tr-client text-center">
                <td className="td-1">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">S.No</td>
                <td className="td-3">Name</td>
                <td className="td-2">Attendance ID</td>
                <td className="td-2">Member ID</td>
                <td className="td-2">RFID</td>
                <td className="td-3">Finger Print</td>
                <td className="td-2">Device</td>
                <td className="td-3">Service</td>
                <td className="td-3">Status</td>
                <td className="td-3">option</td>
              </tr>

              <tr className="tr-client text-center">
                <td className="td-1">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">1</td>
                <td className="td-3">Prabha Yadav</td>
                <td className="td-2">144</td>
                <td className="td-3">158927</td>
                <td className="td-2"></td>
                <td className="td-3">F</td>
                <td className="td-2">Device 1 - BOCK181960337</td>
                <td className="td-3">Yoga</td>
                <td className="td-3">Added - 05-Aug-2022 04:54 PM</td>
                <td className="td-2">
                  <button className="btn btn_enquiry">Resync</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientBiometric;
