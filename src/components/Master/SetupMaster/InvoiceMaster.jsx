import { useState } from "react";
import Navbar from "../../Layout/Navbar";
import profile from "../../../Images/yoga-3.jpg";

const InvoiceMaster = () => {
  const [action2, setAction2] = useState(false);
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10 " style={{ marginBottom: "20px" }}>
          <div className="text-center" style={{ gap: "30px" }}>
            <h4 style={{ fontWeight: "bold" }}>Invoice Master</h4>
          </div>

          <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
            <div></div>
            <div>
              <button
                className="filter-btn1 mr-3"
                style={{
                  backgroundColor: "blue",
                  border: "2px solid #fff",
                  color: "#fff",
                }}
                onClick={() => setAction2(!action2)}
              >
                Edit Invoice
              </button>
            </div>
          </div>
          {action2 && <div className="mt-3"></div>}
          <div className="mr-3 ml-3">
            <div className="row">
              <div
                className="col-lg-12 text-center"
                style={{ fontSize: "20px" }}
              >
                INVOICE
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex left">
                      <div
                        className="ml-5"
                        style={{ fontSize: "24px", fontWeight: "bold" }}
                      >
                        Yog Power Studio
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="d-flex left" style={{ margin: "0px" }}>
                      <div className="ml-5 title">kandivali east mumbai</div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="d-flex left" style={{ margin: "0px" }}>
                      <div className="ml-5 title">Phone :9819123291</div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="d-flex left" style={{ margin: "0px" }}>
                      <div className="ml-5 title">Name:</div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="d-flex left" style={{ margin: "0px" }}>
                      <div className="ml-5 title">Mobile:</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                <div className="text-center">
                  <img src={profile} alt="Logo" width="100px" height="100px" />
                </div>
              </div>
              <div className="col-lg-4 mt-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex right" style={{ gap: "30px" }}>
                      <div>Customer Id:</div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex left" style={{ gap: "30px" }}>
                      <div className="btn-group ">
                        <input
                          type="number"
                          className="btn filter-btn2"
                          placeholder="Enter Customer Id"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex right" style={{ gap: "30px" }}>
                      <div>Invoice Date:</div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex left" style={{ gap: "30px" }}>
                      <div className="btn-group ">
                        <input
                          type="date"
                          className="btn filter-btn2"
                          placeholder="Enter Invoice Date"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex right" style={{ gap: "30px" }}>
                      <div>Sales Rep:</div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex left" style={{ gap: "30px" }}>
                      <div className="btn-group ">
                        <input
                          type="text"
                          className="btn filter-btn2"
                          placeholder="Enter Sale Person"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-3 ">
                <table>
                  <tr>
                    <th>SR.NO.</th>
                    <th>Service</th>
                    <th>DURATION</th>
                    <th>SERVICE FEE</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <input
                        type="text"
                        className="filter-btn2"
                        placeholder="Enter Service"
                      />
                    </td>
                    <td style={{ padding: "0px" }}>
                      Start Date:
                      <input type="date" className="filter-btn2 ml-2 mr-2" />
                      End Date:
                      <input type="date" className="filter-btn2 ml-2 mr-2" />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="filter-btn2"
                        placeholder="Enter Fee"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceMaster;
