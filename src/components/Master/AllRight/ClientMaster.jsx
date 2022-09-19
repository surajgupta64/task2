import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import ToggleButton from "../../ToggleButton";

const ClientMaster = () => {
  const [enquiry, setEnquiry] = useState(true);
  const [addMember, setAddMember] = useState(true);
  const [deleteEnq, setDeleteEnq] = useState(true);
  const [printAll, setPrintAll] = useState(true);
  const [dailySales, setDailySales] = useState(true);
  const [revenue, setRevenue] = useState(true);
  const [expRevenue, setExpRevenue] = useState(true);
  const [revTar, setRevTar] = useState(true);
  const [monthTill, setMonthTill] = useState(true);
  const [service, setService] = useState(true);
  const [fee, setFee] = useState(true);
  const [upgrade, setUpgrade] = useState(true);
  const [notInterest, setNotInterest] = useState(true);
  const [ptSalesReport, setPtSalesReport] = useState(true);
  const [corporateSales, setCorporateSales] = useState(true);

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
              Clients
            </div>
            <br />
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Manage Lists
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Manage all members list:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={enquiry}
                    onClick={() => setEnquiry(!enquiry)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Manage groups:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={addMember}
                    onClick={() => setAddMember(!addMember)}
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
              Member Profile
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Update client profile:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={deleteEnq}
                    onClick={() => setDeleteEnq(!deleteEnq)}
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Change client mobile number:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={printAll}
                    onClick={() => setPrintAll(!printAll)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Agreement signature editing:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={dailySales}
                    onClick={() => setDailySales(!dailySales)}
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
              Update Memberships
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Transfer memberships:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={revenue}
                    onClick={() => setRevenue(!revenue)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Upgrade memberships:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={expRevenue}
                    onClick={() => setExpRevenue(!expRevenue)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Freeze memberships:</div>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="btn-group ">
                  <ToggleButton
                    toggled={revTar}
                    onClick={() => setRevTar(!revTar)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Change start & end date:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={monthTill}
                    onClick={() => setMonthTill(!monthTill)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Suspend memberships:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={service}
                    onClick={() => setService(!service)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Add/reduce sessions:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton toggled={fee} onClick={() => setFee(!fee)} />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Update Checkins:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={upgrade}
                    onClick={() => setUpgrade(!upgrade)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Checkin Reversal:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={notInterest}
                    onClick={() => setNotInterest(!notInterest)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Change staff name in PT check-ins:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={ptSalesReport}
                    onClick={() => setPtSalesReport(!ptSalesReport)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Change sales rep and PT:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Add to transfer:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Interbranch Transfer:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Add support request:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Delete client support requests:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Delete fingerprint/face:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <br />
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Client Management
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Renewal vs attrition:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={monthTill}
                    onClick={() => setMonthTill(!monthTill)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">New clients:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={service}
                    onClick={() => setService(!service)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Renewals:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton toggled={fee} onClick={() => setFee(!fee)} />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Membership:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={upgrade}
                    onClick={() => setUpgrade(!upgrade)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Membeship & PT expiry:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={notInterest}
                    onClick={() => setNotInterest(!notInterest)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Members not called:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={ptSalesReport}
                    onClick={() => setPtSalesReport(!ptSalesReport)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Irregular members:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">
                    Active/Inactive clients Summary(2 reports):
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Multiclub Clients:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Archived Clients:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Freeze & Change Date:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Suspensions:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Attendance heat map:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Service transfer:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Client groups:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Birthdays & Anniversaries:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Feedback (2 reports):</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Client Attendance:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Data Hygiene:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Membership retention:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">View Member checkins:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Attendance Register:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Support requests:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Referrers:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">One-time purchasers:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Average lifetime value:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton
                    toggled={corporateSales}
                    onClick={() => setCorporateSales(!corporateSales)}
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

export default ClientMaster;
