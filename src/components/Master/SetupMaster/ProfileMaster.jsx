import { useState } from "react";
import Navbar from "../../Layout/Navbar";

const ProfileMaster = () => {
  const [action1, setAction1] = useState("Select");
  const [action2, setAction2] = useState("Select");
  const [action3, setAction3] = useState("Select");
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10 " style={{ marginBottom: "20px" }}>
          <div className="text-center" style={{ gap: "30px" }}>
            <h4 style={{ fontWeight: "bold" }}>Profile Master</h4>
          </div>
          <div className="row mt-5 ml-5">
            <div className="col-lg-6">
              <div
                className="title mb-2"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Center Profile
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Brand Name:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter Brand Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Branch Phone No:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Business Category:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter Category"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Center Area Sequer Fit:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter Area Sequer Fit"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Currency:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <input
                        type="number"
                        className="btn btn-own"
                        placeholder="Enter Currency"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">City:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Country Name:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter Country Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Branch Full Address:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <textarea
                        style={{
                          minHeight: "80px",
                          minWidth: "200px",
                          borderRadius: "5px",
                          padding: "10px",
                        }}
                        placeholder="Enter Address"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="title mb-2"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Timming Details
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Opening Time:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <input
                        type="time"
                        pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
                        className="btn btn-own"
                        placeholder="Enter Brand Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Closing Time:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <input
                        type="time"
                        pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
                        className="btn btn-own"
                        placeholder="Enter Brand Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Wokring Days:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
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
                          onClick={() => setAction1("7 Days")}
                        >
                          7 Days
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction1("6 Days ")}
                        >
                          6 Days
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction1("5 Days")}
                        >
                          5 Days
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction1("4 Days")}
                        >
                          4 Days
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction1("3 Days ")}
                        >
                          3 Days
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction1("2 Days")}
                        >
                          2 Days
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction1("1 Days ")}
                        >
                          1 Days
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Half Day:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <button
                        type="button"
                        className="btn btn-own dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {action2}
                      </button>
                      <div className="dropdown-menu">
                        <label
                          className="dropdown-item"
                          onClick={() => setAction2("Monday")}
                        >
                          Monday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction2("Tuesday")}
                        >
                          Tuesday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction2("Wednesday")}
                        >
                          Wednesday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction2("Thursday")}
                        >
                          Thursday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction2("Friday")}
                        >
                          Friday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction2("Saturday")}
                        >
                          Saturday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction2("Sunday")}
                        >
                          Sunday
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Holidays:</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <button
                        type="button"
                        className="btn btn-own dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {action3}
                      </button>
                      <div className="dropdown-menu">
                        <label
                          className="dropdown-item"
                          onClick={() => setAction3("Monday")}
                        >
                          Monday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction3("Tuesday")}
                        >
                          Tuesday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction3("Wednesday")}
                        >
                          Wednesday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction3("Thursday")}
                        >
                          Thursday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction3("Friday")}
                        >
                          Friday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction3("Saturday")}
                        >
                          Saturday
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction3("Sunday")}
                        >
                          Sunday
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="mt-5 ml-5">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMaster;
