import React, { useState } from "react";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Table from "../Table";
import { FaFolderOpen } from "react-icons/fa";

const Appointment = () => {
  const [action, setAction] = useState("Custom Date Range");
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
    { heading: "S.No", value: "id" },
    { heading: "Booking Date", value: "BookingDate" },
    { heading: "Service", value: "service" },
    { heading: "Charges", label: "charges" },
    { heading: "Amount", label: "amount" },
    { heading: "Appointment Date & Time", value: "date_time" },
    { heading: "Appointment With", value: "with" },
    { heading: "Booked by", value: "bookedBy" },
    { heading: "Status", value: "status" },
  ];

  const Users = [
    {
      id: 1,
      BookingDate: "20-08-2022",
      service: "Yoga",
      charges: "paid",
      amount: "500",
      date_time: "25-08-2022 03:00 PM",
      with: "prabha",
      bookedBy: "sonali",
      status: "upcoming",
    },
    {
      id: 2,
      BookingDate: "20-08-2022",
      service: "Yoga",
      charges: "free",
      amount: "-",
      date_time: "25-08-2022 03:00 PM",
      with: "prabha",
      bookedBy: "sonali",
      status: "upcoming",
    },
  ];

  return (
    <>
      <div>
        <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
          <div className="title ml-3">Appointment</div>
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
        <div className="d-flex justify-content-between mt-3 ml-2 mr-2">
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
              <div className="cal-icon ">
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
                className="btn filter-btn1 mt-2 dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {action}
              </button>
              <div class="dropdown-menu">
                <label
                  class="dropdown-item"
                  onClick={() => setAction("Custom Date Range")}
                >
                  Customize Date
                </label>
              </div>
            </div>
            <div>
              <button className="btn mt-2 filter-primary-btn">Go</button>
            </div>
          </div>
          <div className="btn-group">
            <button
              className="btn filter-btn1"
              style={{ backgroundColor: "#2640E6", color: "#ffffff" }}
            >
              Upcoming : 0
            </button>
            <button
              className="btn filter-btn1"
              style={{ backgroundColor: "#37C726", color: "#ffffff" }}
            >
              Rescheduled : 0
            </button>
            <button
              className="btn filter-btn1"
              style={{ backgroundColor: "#91CBE4", color: "#ffffff" }}
            >
              Completed : 0
            </button>
            <button
              className="btn filter-btn1"
              style={{ backgroundColor: "#E62632", color: "#ffffff" }}
            >
              Cancelled : 0
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-between mb-4 ml-2 mr-2">
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
                className="btn filter-btn1 dropdown-toggle"
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
                className="btn filter-btn1 dropdown-toggle"
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
                className="btn filter-btn1 dropdown-toggle"
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
          <div>
            <div className="mt-3">
              <button className="btn filter-btn1">
                Export <FaFolderOpen className="mb-1" />
              </button>
            </div>
          </div>
        </div>
        <Table className="mt-3" data={Users} column={column} />
      </div>
    </>
  );
};

export default Appointment;
