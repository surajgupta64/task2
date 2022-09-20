import React from "react";
import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Table from "../Table";

const MemberCalls = () => {
  const [action1, setAction1] = useState("Select");
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
    { heading: "Call Time", value: "Time" },
    { heading: "Member Name", value: "MemberName" },
    { heading: "Contact", value: "Contact" },
    { heading: "Service", value: "Service" },
    { heading: "Call Status", value: "Source" },
    { heading: "Call Type", value: "CallStatus" },
    { heading: "Next Followups Date", value: "Followups" },
    { heading: "Comments", value: "Comments" },

    { heading: "Counseller", value: "Staff" },
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
      Date: "25-08-2022",
      Time: "03:00 PM",
      MemberName: "Nayana Nagrecha",
      Contact: "9136123476",
      Service: "Yoga",
      Source: "Missed",
      CallStatus: "Welcome Call",
      Comments: "Not Interested",
      Followups: "30-08-2022 4.50 PM",
      Staff: "Sejal Ganatra",
    },
    {
      Srno: "2",
      EnquiryId: 3,
      Date: "25-08-2022",

      Time: "03:00 PM",
      MemberName: "Nayana Nagrecha",
      Contact: "9136123476",
      Service: "Yoga",
      Source: "Ring",
      CallStatus: "Renewals Call",
      Followups: "30-08-2022 4.50 PM",
      Staff: "Sejal Ganatra",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between mt-4 ml-5 ">
        <div className="d-flex" style={{ gap: "10px" }}>
          <div className="d-flex align-items-center" style={{ gap: "30px" }}>
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
            <input
              type="text"
              className="btn filter-btn2"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <button className="btn filter-primary-btn">Go</button>
          </div>
          <div class="btn-group">
            <div className="mr-3">Call Type:</div>
            <button
              type="button"
              className="btn filter-selector dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {action1}
            </button>
            <div className="dropdown-menu">
              <label
                className="dropdown-item"
                onClick={() => setAction1("Name")}
              >
                Select
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("Mobile")}
              >
                Mobile
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("Service Name")}
              >
                Service Name
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("Sales Rep")}
              >
                Sales Rep
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("Trainer")}
              >
                Trainer
              </label>
            </div>
          </div>
          <div class="btn-group">
            <div className="mr-3">Call Status:</div>
            <button
              type="button"
              className="btn filter-selector dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {action1}
            </button>
            <div className="dropdown-menu">
              <label
                className="dropdown-item"
                onClick={() => setAction1("Name")}
              >
                Select
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("Mobile")}
              >
                Mobile
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("Service Name")}
              >
                Service Name
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("Sales Rep")}
              >
                Sales Rep
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction1("Trainer")}
              >
                Trainer
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex" style={{ gap: "10px" }}></div>
      </div>
      <div className="d-flex justify-content-between mt-4 ml-4 mr-4">
        <div className=" btn filter-btn2" style={{ backgroundColor: "yellow" }}>
          Welcome : 23
        </div>

        <div
          className=" btn filter-btn2"
          style={{ backgroundColor: "skyblue" }}
        >
          Upgrade Call : 18
        </div>

        <div
          className=" btn filter-btn2"
          style={{ backgroundColor: "#F39C12" }}
        >
          Courtesy Call : 18
        </div>
        <div
          className=" btn filter-btn2"
          style={{ backgroundColor: "#2ECC71" }}
        >
          Renewal Call : 18
        </div>

        <div
          className=" btn filter-btn2"
          style={{ backgroundColor: "#2ECC71" }}
        >
          Payment Call : 18
        </div>

        <div className="btn filter-btn2" style={{ backgroundColor: "red" }}>
          Birthday Call : 5
        </div>
        <div
          className=" btn filter-btn2"
          style={{ backgroundColor: "#2ECC71" }}
        >
          Total Call : 18
        </div>

        <div
          className=" btn filter-btn2"
          style={{ backgroundColor: "skyblue" }}
        >
          Cold : 18
        </div>

        <div className=" btn filter-btn2" style={{ backgroundColor: "orange" }}>
          Warm : 18
        </div>

        <div
          className=" btn filter-btn2"
          style={{ backgroundColor: "#2ECC71" }}
        >
          Hot : 18
        </div>

        <div className=" btn filter-btn2" style={{ backgroundColor: "red" }}>
          Missed Call : 18
        </div>
      </div>
      <div>
        <Table data={Users} column={column} />
      </div>
    </>
  );
};

export default MemberCalls;
