import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import ToggleButton from "../../ToggleButton";

const DashboardMaster = () => {
  const [search, setSearch] = useState(true);
  const [unisearch, setUnisearch] = useState(true);
  const [summary, setSummary] = useState(true);
  const [collected, setCollected] = useState(true);
  const [paymentMode, setPaymentMode] = useState(true);
  const [expense, setExpense] = useState(true);
  const [myFollowup, setMyFollowup] = useState(true);
  const [allFollowup, setAllFollowup] = useState(true);
  const [saleTarget, setSaleTaregt] = useState(true);
  const [ptTarget, setPTTarget] = useState(true);
  const [corporateTarget, setCorporateTarget] = useState(true);
  const [ttcTarget, setTTCTarget] = useState(true);

  return (
    <>
      <div className="dbox-14 " style={{ marginBottom: "20px" }}>
        <div className="row">
          <div className="col-lg-6">
            <br />
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Search:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={search}
                    onClick={() => setSearch(!search)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Universal Search:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={unisearch}
                    onClick={() => setUnisearch(!unisearch)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Summary:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={summary}
                    onClick={() => setSummary(!summary)}
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">
                    Sales, Pending Payment and Payment Collected Display:
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={collected}
                    onClick={() => setCollected(!collected)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Payment mode summary:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={paymentMode}
                    onClick={() => setPaymentMode(!paymentMode)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Expense summary:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={expense}
                    onClick={() => setExpense(!expense)}
                  />
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
              }}
            >
              Follow-ups
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">View only my follow-ups:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={myFollowup}
                    onClick={() => setMyFollowup(!myFollowup)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">View all follow-ups:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={allFollowup}
                    onClick={() => setAllFollowup(!allFollowup)}
                  />
                </div>
              </div>
            </div>
            <br />
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Emplyoee Dahsbord
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Sales Target:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={saleTarget}
                    onClick={() => setSaleTaregt(!saleTarget)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">PT Target:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={ptTarget}
                    onClick={() => setPTTarget(!ptTarget)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Corporate Target:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateTarget}
                    onClick={() => setCorporateTarget(!corporateTarget)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">TTC Target:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={ttcTarget}
                    onClick={() => setTTCTarget(!ttcTarget)}
                  />
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
