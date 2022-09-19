import React from "react";
import "react-calendar/dist/Calendar.css";

const IndividualAccess = () => {
  return (
    <>
      <div className="mt-3 ml-3">Recent Purchased Services</div>
      <div className="dbox-14" style={{ marginBottom: "20px" }}>
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-3">
                <div className="d-flex left">
                  Service Id:
                  <br /> 1925647
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex left">
                  Service Name: <br />
                  Yoga
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex left">
                  Service Duration: <br />1 Month
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex left">Packege Status: </div>

                <div className="d-flex left ml-4" style={{ color: "green" }}>
                  Active
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex left mr-2">TOTAL DAYS</div>
                <div className="d-flex left mr-2 " style={{ fontSize: "13px" }}>
                  30 Day's
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex left mr-2">START DATE</div>
                <div className="d-flex left mr-2" style={{ fontSize: "13px" }}>
                  17 SEPTEMBER 22
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex left mr-2">EXPIRY DATE</div>
                <div className="d-flex left mr-2" style={{ fontSize: "13px" }}>
                  16 OCTOBER 22
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualAccess;
