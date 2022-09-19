import React from "react";
import { useState } from "react";
import profile from "../../Images/profile.png";
import Tabs from "../Tabs";
import IndividualAccess from "./IndividualAccess";

const ServiceCard = () => {
  const [action, setAction] = useState("Select");

  const data = [
    {
      title: "Individual Membership",
      compo: <IndividualAccess />,
      bgcolor: "#58D68D",
    },
    {
      title: "Multiple Centers Membership",
      compo: "Multiclub Access services",
      bgcolor: "#F39C12",
    },
    {
      title: "Postpaid Membership",
      compo: "Postpaid services",
      bgcolor: "#3498DB",
    },
  ];
  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex left ml-3" style={{ gap: "30px" }}>
                  <img
                    height="150px"
                    style={{ borderRadius: "5px" }}
                    src={profile}
                    alt="Profile"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex left ml-3" style={{ gap: "30px" }}>
                  Member Status :
                </div>
                <div
                  className="d-flex left ml-3"
                  style={{
                    gap: "30px",
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "10px",
                    backgroundColor: "#3498DB",
                  }}
                >
                  VIP
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex left">Member Id: 950345</div>
              </div>
              <div className="col-lg-12">
                <div className="d-flex left">Attendance ID: 230</div>
              </div>

              <div className="col-lg-12">
                <div className="d-flex left">Packeges: 1</div>
              </div>
              <div className="col-lg-12">
                <div className="d-flex left">Loyalty Points: 0</div>
              </div>
              <div className="col-lg-12">
                <div className="d-flex left">
                  <button className="btn filter-btn1 ">
                    Add/View Loyalty Points
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex left">Membership Status</div>
              </div>
              <div className="col-lg-6">
                <div
                  className="d-flex left"
                  style={{ color: "green", fontWeight: "bold" }}
                >
                  Active
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex left">Start From</div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex left">12-09-2022</div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex left">Packeges Amount: 500</div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex left">Pending Payment: 500</div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex left">Referrals: 2</div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex left">Referral value: 0</div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex left">No of Shop Item: 0</div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex left">Shop Value: 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
        <div className="title ml-3">
          <button className="btn filter-btn1 " style={{ marginRight: "5px" }}>
            Resync To Device
          </button>
          <button className="btn filter-btn1 " style={{ marginRight: "5px" }}>
            Delete Member
          </button>
          <div className="btn-group" style={{ marginRight: "5px" }}>
            <button
              type="button"
              className="btn filter-selector dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ width: "160px" }}
            >
              {action}
            </button>
            <div className="dropdown-menu">
              <label
                className="dropdown-item"
                onClick={() => setAction("Select")}
              >
                Select
              </label>
              <label
                className="dropdown-item"
                onClick={() => setAction("Device 1")}
              >
                Device 1
              </label>
            </div>
          </div>
          <button className="btn filter-btn1 " style={{ marginRight: "5px" }}>
            Add Fingerprint
          </button>
        </div>
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

      <div className="mt-5 justify-content-center">
        <Tabs data={data} height={"30px"} fontSize={"15px"} />
      </div>
    </>
  );
};

export default ServiceCard;
