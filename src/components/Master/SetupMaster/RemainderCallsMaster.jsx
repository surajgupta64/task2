import React from "react";
import "react-calendar/dist/Calendar.css";
import Navbar from "../../Layout/Navbar";
import Section from "../../Section";
import ToggleButton from "../../ToggleButton";

const RemainderCallsMaster = () => {
  const data = [
    "Welcome Call",
    "Payment call",
    "Membership upgrade call",
    "Cross-Sell calls",
    "Renewal call",
    "Single Session Renewal call",
    "Irregular member calls",
    "Feedback Calls",
    "Feedback Calls OTP",
    "Birthday Call",
    "Anniversary Call",
  ];

  return (
    <>
      <Navbar />
      <div className="dbox-14">
        <div
          style={{
            backgroundColor: "#fff",
            padding: "5px",
            color: "black",
            height: "40px",
            width: "100%",
            fontSize: "20px",
          }}
        >
          <div className="ml-2">Remainder Calls Master</div>
        </div>
        <div className="row">
          <div className="col-lg-6" style={{ marginTop: "25px" }}>
            <Section data={data} />
          </div>
          <div className="col-lg-6 " style={{ marginTop: "35px" }}>
            <div className="row">
              <div className="col-lg-1">
                <input
                  type="number"
                  style={{ width: "50px" }}
                  className="filter-btn2"
                  placeholder="Enter Days"
                />
              </div>
              <div className="col-lg-11">Day(s) after invoice date</div>

              <div className="col-lg-1 mt-1">
                <input
                  type="number"
                  style={{ width: "50px" }}
                  className="filter-btn2"
                  placeholder="Enter Days"
                />
              </div>
              <div className="col-lg-11">
                Day(s) after bill date. The automated call will be scheduled
                only If the follow-up date is not selected while billing.
              </div>
              <div className="col-lg-1">
                <input
                  type="number"
                  style={{ width: "50px" }}
                  className="filter-btn2"
                  placeholder="Enter Days"
                />
              </div>
              <div className="col-lg-11">Days after Start date</div>
              <div className="col-lg-1 mt-2">
                <input
                  type="number"
                  style={{ width: "50px" }}
                  className="filter-btn2"
                  placeholder="Enter Days"
                />
              </div>
              <div className="col-lg-11 mt-2">Days after Start date</div>
              <div className="col-lg-1 mt-2">
                <input
                  type="number"
                  className="filter-btn2 mt-1"
                  style={{ width: "50px" }}
                  placeholder="Enter Days"
                />
              </div>
              <div className="col-lg-11">
                Day(s) Before expiry date. The renewal call on session expiry (
                for a session based service) will be scheduled on the day of the
                last session usage.
              </div>
              <div className="col-lg-1" style={{ marginTop: "40px" }}>
                <input
                  type="number"
                  style={{ width: "50px" }}
                  className="filter-btn2"
                  placeholder="Enter Days"
                />
              </div>
              <div className="col-lg-11" style={{ marginTop: "40px" }}>
                Days after Last Check-In date
              </div>
              <div className="col-lg-1 mt-2">
                <input
                  type="number"
                  style={{ width: "50px" }}
                  className="filter-btn2"
                  placeholder="Enter Days"
                />
              </div>
              <div className="col-lg-11 mt-2">
                Days from the service start date (Only for active services)
              </div>
              <div className="col-lg-1 mt-2">
                <input
                  type="number"
                  style={{ width: "50px" }}
                  className="filter-btn2"
                  placeholder="Enter Days"
                />
              </div>
              <div className="col-lg-11 mt-2">
                Days from the completion of a scheduled feedback call (next
                feedback call)
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="row">
              <div className="col-lg-3">Default Call Time</div>
              <div className="col-lg-2">
                <ToggleButton />
              </div>

              <div className="col-lg-2">
                <input
                  type="date"
                  className="filter-btn2"
                  placeholder="Enter Days"
                />
              </div>
              <div className="col-lg-3">
                All the automated calls will be scheduled at this time.
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="row">
              <div className="col-lg-4">Display Tasks</div>

              <div className="col-lg-8">
                <div className="btn-group">
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Enquiry calls</span>
                  </label>
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Cross-Sell calls </span>
                  </label>
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Courtesy calls</span>
                  </label>
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Welcome calls </span>
                  </label>
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Renewal calls</span>
                  </label>
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Inbound calls</span>
                  </label>
                </div>
                <div className="btn-group">
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Payment calls</span>
                  </label>
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Irregular Member calls</span>
                  </label>
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Birthdays & Anniversaries calls</span>
                  </label>
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Upgrade calls</span>
                  </label>
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Feedback Calls</span>
                  </label>
                </div>
              </div>
              <div>
                <button className="search-btn btn ml-3 mt-3">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemainderCallsMaster;
