import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineAddBox } from "react-icons/md";
import {
  AiOutlineDelete,
  AiFillEdit,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaFolderOpen, FaFolderPlus, FaWhatsapp } from "react-icons/fa";
import Table from "../Table";

const AllEnquiry = () => {
  const [action, setAction] = useState("Today");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  const column = [
    /* 
    value: keyword for normal value passing
    btn: keyword for button
    btn1 to btn4: keyword for component passing
    lebel: keyword for anchor tag
    Note: please don't pass empty values or perameters
    */
    {
      heading: (
        <div>
          <MdOutlineCheckBoxOutlineBlank />
        </div>
      ),
      btn1: (
        <div>
          <MdOutlineCheckBoxOutlineBlank />
        </div>
      ),
    },
    { heading: "S.No", value: "Srno" },
    { heading: "Enquiry ID", value: "EnquiryId" },
    { heading: "Date", value: "Date" },
    { heading: "Member Name", value: "MemberName" },
    { heading: "Contact", value: "Contact" },
    { heading: "Service", value: "Service" },
    { heading: "Source", value: "Source" },
    { heading: "Call Status", value: "CallStatus" },
    { heading: "Followups", value: "Followups" },
    { heading: "Convert to member", btn: "Invoice" },
    { heading: "Trial Appointment", btn1: <MdOutlineAddBox /> },
    { heading: "Trials", btn1: <MdOutlineAddBox /> },
    { heading: "Other Appointment", btn1: <MdOutlineAddBox /> },
    { heading: "Staff", value: "Staff" },
    {
      heading: "Action",
      btn1: (
        <div>
          <div className="d-flex justify-content-between">
            <div className="bg-icon d-flex justify-content-center align-items-center">
              <AiFillEdit />
            </div>
            <div className="bg-icon d-flex justify-content-center align-items-center">
              <AiOutlineDelete />
            </div>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <div className="bg-icon d-flex justify-content-center align-items-center">
              <FaWhatsapp />
            </div>
            <div className="bg-icon d-flex justify-content-center align-items-center">
              <FiMail />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const Users = [
    {
      Srno: "1",
      EnquiryId: 1,
      Date: "25-08-2022 03:00 PM",
      MemberName: "Nayana Nagrecha",
      Contact: "9136123476",
      Service: "Yoga",
      Source: "Facebook",
      CallStatus: "Enquiry",
      Followups: "Sejal Ganatra",
      Staff: "Sejal Ganatra",
    },
    {
      Srno: "2",
      EnquiryId: 3,
      Date: "25-08-2022 03:00 PM",
      MemberName: "Nayana Nagrecha",
      Contact: "9136123476",
      Service: "Yoga",
      Source: "Facebook",
      CallStatus: "Enquiry",
      Followups: "Sejal Ganatra",
      Staff: "Sejal Ganatra",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center" style={{ fontSize: "23px" }}>
            ALL ENQUIRY
          </div>
          <div className="d-flex justify-content-between mt-3">
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
                  class="btn filter-btn dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {action}
                </button>
                <div class="dropdown-menu">
                  <label
                    class="dropdown-item"
                    onClick={() => setAction("Today")}
                  >
                    Today
                  </label>
                  <label
                    class="dropdown-item"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </label>
                  <label
                    class="dropdown-item"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Customize Date
                  </label>
                </div>
              </div>
              <div>
                <button className="btn filter-primary-btn">Go</button>
              </div>
            </div>

            <div
              className="d-flex align-items-center text-center justify-content-center"
              style={{ marginLeft: "90px" }}
            >
              <div className="btn filter-btn2">Total Members : 0</div>
            </div>
            <div className="d-flex" style={{ gap: "20px" }}>
              <button className="btn filter-btn1">Import Enquiry</button>
              <button className="btn filter-btn1">Enquiry Archive</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="lead-1">
                <div className="text-center lead-l1">
                  <div className="lead-l3">Enquiries</div>
                </div>
                <div className="row text-center ">
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>Enquiries</div>
                      <div>
                        <b>0</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>Converted</div>
                      <div>
                        <b>0</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>Archived/Lost</div>
                      <div>
                        <b>0</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="lead-1">
                <div className="text-center lead-l1">
                  <div className="lead-l3">Follow Up</div>
                </div>
                <div className="row text-center ">
                  <div className="col-lg-3 padding_reducer">
                    <div className="lead-l2">
                      <div>FollowUps</div>
                      <div>
                        <b>0</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 padding_reducer">
                    <div className="lead-l2">
                      <div>Trails</div>
                      <div>
                        <b>0</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 padding_reducer">
                    <div className="lead-l2">
                      <div>Post Trails</div>
                      <div>
                        <b>0</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 padding_reducer">
                    <div className="lead-l2">
                      <div>Sales</div>
                      <div>
                        <b>0</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="lead-1">
                <div className="text-center lead-l1">
                  <div className="lead-l3">Trials</div>
                </div>
                <div className="row text-center ">
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>Trial Scheduled</div>
                      <div>
                        <b>0</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>Trial Completed</div>
                      <div>
                        <b>0</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>Converted</div>
                      <div>
                        <b>0</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-2">
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

export default AllEnquiry;
