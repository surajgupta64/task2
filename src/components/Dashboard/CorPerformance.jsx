import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineAddBox } from "react-icons/md";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CorPerformance = () => {
  const [action, setAction] = useState("All Staff");
  const [call, setCall] = useState("All Call");
  const [staff, setStaff] = useState("All Staff");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div
            className="text-center mb-2 text-capitalize"
            style={{ fontSize: "23px" }}
          >
            LEADERBOARD
          </div>
          <div
            className="d-flex align-items-center justify-content-center mt-3"
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
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-own dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {action}
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setAction("All Staff")}
                >
                  All Staff
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setAction("Riya")}
                >
                  Riya
                </a>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-own dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {call}
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setCall("All Calls")}
                >
                  All Calls
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setCall("Missed Calls")}
                >
                  Missed Calls
                </a>
              </div>
            </div>
            <div>
              <button className="btn btn-primary">Go</button>
            </div>
          </div>

          <div className="text-center mb-2 mt-3" style={{ fontSize: "23px" }}>
            ENQUIRY CALLS
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex" style={{ gap: "30px" }}>
              <div
                className="d-flex align-items-center"
                style={{ gap: "20px" }}
              >
                <div>Communicate</div>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-own dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {staff}
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
              </div>
            </div>
            <div className="d-flex" style={{ gap: "10px" }}>
              <button className="btn btn_enquiry">SCHEDULED 0</button>
              <button className="btn btn_enquiry">ATTEMPTED 0</button>
              <button className="btn btn_enquiry">CONTACTED 0</button>
              <button className="btn btn_enquiry">NOT CONTACTED 0</button>
              <button className="btn btn_enquiry">MISSED 0</button>
            </div>
          </div>

          <div>
            <table
              className="table_client_2"
              border="1"
              cellSpacing="0"
              width="100%"
            >
              <tr className="tr-client-1 text-center">
                <td className="td-a1">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-a2" style={{ width: "50px" }}>
                  S.No
                </td>
                <td className="td-a3">Assign Date & Time</td>
                <td className="td-a2">Client Name</td>
                <td className="td-a3">Mobile</td>
                <td className="td-a2">Service Name</td>
                <td className="td-a3">Enquiry Stage</td>
                <td className="td-a2">Call Tag</td>
                <td className="td-a3">Trial Appointment</td>
                <td className="td-a2">Trial Class</td>
                <td className="td-a3">log</td>
                <td className="td-a2">Staff Name</td>
                <td className="td-a3">Convert to member</td>
              </tr>

              <tr className="tr-client-1 text-center">
                <td className="td-a1" style={{ width: "15px" }}>
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-a2" style={{ width: "70px" }}>
                  1
                </td>
                <td className="td-a3">05-08-2022</td>
                <td className="td-a2">Anand</td>
                <td className="td-a3">1234567890</td>
                <td className="td-a2">TTC</td>
                <td className="td-a3">Facebook</td>
                <td className="td-a2">Enquiry</td>
                <td className="td-a3">Enquiry</td>
                <td className="td-a2">
                  <AiOutlineMinusSquare />
                </td>
                <td className="td-a3">
                  <MdOutlineAddBox />
                </td>
                <td className="td-a2">
                  <button className="btn btn-invoice">Invoice</button>
                </td>
                <td className="td-a3">
                  <MdOutlineAddBox />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorPerformance;
