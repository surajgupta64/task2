import React, { useState } from "react";

import "react-calendar/dist/Calendar.css";
import Navbar from "../../Layout/Navbar";
const EditAgreement = () => {
  const [action1, setAction1] = useState("Select");

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10 ">
          <div
            className="text-center mb-3"
            style={{ fontSize: "20px", fontWeight: "bold", gap: "30px" }}
          >
            Terms & Condition Control Panel
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="d-flex left" style={{ gap: "30px" }}>
                <div className="ml-5">Name:</div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="d-flex mt-2" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <input
                    type="text"
                    className="btn btn-own"
                    value="Terms & Conditions"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="d-flex left" style={{ gap: "30px" }}>
                <div className="ml-5">Type of acceptance:</div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-own dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {action1}
                  </button>
                  <div className="dropdown-menu">
                    <label
                      className="dropdown-item"
                      onClick={() => setAction1("Select")}
                    >
                      Select
                    </label>
                    <label
                      className="dropdown-item"
                      onClick={() => setAction1(" E-signature")}
                    >
                      E-signature
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div
                className="d-flex align-items-center justify-content-center left"
                style={{ gap: "30px" }}
              >
                <div className="ml-5">T&C In-studio:</div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <textarea
                    style={{
                      minHeight: "400px",
                      borderRadius: "10px",
                      padding: "10px",
                      minWidth: "700px",
                    }}
                    placeholder="Type Agreement"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div
                className="d-flex align-items-center justify-content-center mt-3"
                style={{ gap: "30px" }}
              ></div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <button className="btn btn-primary">Changes Submit </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAgreement;
