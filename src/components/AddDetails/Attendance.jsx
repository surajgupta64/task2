import React from "react";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import profile from "../../Images/profile.png";
import Table from "../Table";

const Attendance = () => {
  const [options, setOptions] = useState("Select");
  const [attendanceId, setAttendanceId] = useState(230);

  const onRadioChange = (e) => {
    setOptions(e.target.value);
  };

  const column = [
    /* 
    value: keyword for normal value passing
    btn: keyword for button
    btn1 to btn4: keyword for component passing
    lebel: keyword for anchor tag
    Note: please don't pass empty values or perameters
    */
    { heading: "S.No", value: "srno" },
    { heading: "Date", value: "date" },
    { heading: "Name", value: "name" },
    { heading: "Mobile", value: "contact" },
    { heading: "Service", value: "service" },
    { heading: "Branch", value: "branch" },
    { heading: "CheckIn", value: "checkIn" },
    { heading: "CheckOut", value: "checkOut" },
    { heading: "Group", value: "group" },
    { heading: "PT", value: "pt" },
    { heading: "Condcuted By", value: "condcuted" },
    { heading: "Alert", btn: <FiAlertCircle /> },
  ];

  const Users = [
    {
      srno: "1",
      name: "Sajel",
      contact: "7710957578",
      date: "14-09-2022",
      service: "TTC",
      branch: "Yog Power Studio, Kandivali East",
      checkIn: "12:00 PM",
      checkOut: "1:00 PM",
      group: "-",
      pt: "-",
      condcuted: "-",
    },
    {
      srno: "2",
      name: "Sajel",
      contact: "7710957578",
      date: "14-09-2022",
      service: "TTC",
      branch: "Yog Power Studio, Kandivali East",
      checkIn: "12:00 PM",
      checkOut: "1:00 PM",
      group: "-",
      pt: "-",
      condcuted: "-",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
        <div className="title ml-3">Attendance</div>
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
      <div className="d-flex justify-content-between mt-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="d-flex left ml-3" style={{ gap: "30px" }}>
              <img
                height="150px"
                style={{ borderRadius: "5px" }}
                src={profile}
                alt="Profile"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex left">
                  Scan Membership Card Or Enter Attendance Id
                </div>
              </div>

              <div className="col-lg-3">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Check in Type:</div>
                </div>
              </div>

              <div className="col-lg-9 mt-2">
                <div className="d-flex mt-2" style={{ gap: "30px" }}>
                  <label style={{ color: "#fff" }}>
                    <input
                      type="radio"
                      value="Male"
                      checked={options === "Male"}
                      onChange={onRadioChange}
                    />{" "}
                    Current Branch
                  </label>

                  <label style={{ marginLeft: "15px", color: "#fff" }}>
                    <input
                      type="radio"
                      value="Female"
                      checked={options === "Female"}
                      onChange={onRadioChange}
                    />{" "}
                    Multiple Centers
                  </label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex left">Attendance Id</div>
              </div>
              <div className="col-lg-9">
                <div className="d-flex left">
                  <input
                    type="number"
                    value={attendanceId}
                    onChange={(e) => setAttendanceId(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex left">Date</div>
              </div>
              <div className="col-lg-9">
                <div className="d-flex left">
                  <input
                    type="date"
                    className="filter-btn2 btn"
                    value={attendanceId}
                    onChange={(e) => setAttendanceId(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex left">Time</div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex left">
                  <input
                    type="time"
                    className="filter-btn2 btn"
                    value={attendanceId}
                    onChange={(e) => setAttendanceId(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex left">
                  <button className="filter-primary-btn"> Check In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex ml-3 mt-3">Attendance Details</div>
        <Table data={Users} column={column} />
      </div>
    </>
  );
};

export default Attendance;
