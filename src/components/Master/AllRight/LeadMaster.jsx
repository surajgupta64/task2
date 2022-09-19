import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import ToggleButton from "../../ToggleButton";

const LeadMaster = () => {
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
              Lead
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">
                    Add enquiry, manage enquiries, enquiry archive:
                  </div>
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
                  <div className="mr-3">Convert Enquiry & Add member:</div>
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
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Delete enquiries:</div>
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
                  <div className="mr-3">Print all enquiries :</div>
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
                  <div className="mr-3">Daily sales (DSR):</div>
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
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Revenue:</div>
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
                  <div className="mr-3">Expected Revenue:</div>
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
                  <div className="mr-3">Revenue vs target:</div>
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
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">Revenue month till date:</div>
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
                  <div className="mr-3">Service sale, service type:</div>
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
                  <div className="mr-3">Registration fee:</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-group mt-2">
                  <ToggleButton toggled={fee} onClick={() => setFee(!fee)} />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3">
                    Upgrade and cross-sell (3 reports):
                  </div>
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
                  <div className="mr-3">Not interested:</div>
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
                  <div className="mr-3">PT Sales Report:</div>
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
                  <div className="mr-3">Corporate sales:</div>
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

export default LeadMaster;
