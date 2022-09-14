import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import ToggleButton from "../../ToggleButton";

const DashboardMaster = () => {
  const [sms, setSms] = useState(true);
  const [mail, setMail] = useState(true);
  const [push, setPush] = useState(true);

  return (
    <>
      <div className="dbox-10 " style={{ marginBottom: "20px" }}>
        <div className="row">
          <div className="col-lg-6">
            <br />
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "63px",
              }}
            >
              Communication Preference Settings
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">SMS:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="btn-group mt-3">
                  <ToggleButton toggled={sms} onClick={() => setSms(!sms)} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Mail:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="btn-group mt-3">
                  <ToggleButton toggled={mail} onClick={() => setMail(!mail)} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Push Notification:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="btn-group mt-3">
                  <ToggleButton toggled={push} onClick={() => setPush(!push)} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <br />
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "63px",
              }}
            >
              Communication Preference Settings
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">SMS:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="btn-group mt-3">
                  <ToggleButton toggled={sms} onClick={() => setSms(!sms)} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Mail:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="btn-group mt-3">
                  <ToggleButton toggled={mail} onClick={() => setMail(!mail)} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Push Notification:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="btn-group mt-3">
                  <ToggleButton toggled={push} onClick={() => setPush(!push)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMaster;
