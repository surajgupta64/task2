import { useState } from "react";
import Navbar from "../Layout/Navbar";
import profile from "../../Images/profile.png";
import ToggleButton from "../ToggleButton";

const StaffForm = () => {
  const [action1, setAction1] = useState("Select");
  const [action, setAction] = useState("Select");
  const [options, setOptions] = useState("Male");
  const [options1, setOptions1] = useState("Select");

  const onRadioChange1 = (e) => {
    setOptions1(e.target.value);
  };
  const onRadioChange = (e) => {
    setOptions(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10 " style={{ marginBottom: "20px" }}>
          <div
            className="title text-center"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Add Staff
          </div>
          <div className="row mt-3 ml-5 ">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <img
                      height="100px"
                      style={{ borderRadius: "5px" }}
                      src={profile}
                      alt="Profile"
                    />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex mt-4" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <button className="btn btn_enquiry">Upload Image</button>
                    </div>
                  </div>
                  <div className="d-flex mt-2" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <button className="btn btn_enquiry">Capture Image</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Full name:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Contact Number:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="number"
                        className="btn btn-own"
                        placeholder="Enter Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Email:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="email"
                        className="btn btn-own"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Gender:</div>
                  </div>
                </div>

                <div className="col-lg-8 mt-2">
                  <div className="d-flex mt-2" style={{ gap: "30px" }}>
                    <label style={{ color: "#fff" }}>
                      <input
                        type="radio"
                        value="Male"
                        checked={options === "Male"}
                        onChange={onRadioChange}
                      />{" "}
                      Male
                    </label>

                    <label style={{ marginLeft: "15px", color: "#fff" }}>
                      <input
                        type="radio"
                        value="Female"
                        checked={options === "Female"}
                        onChange={onRadioChange}
                      />{" "}
                      Female
                    </label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Vaccinated:</div>
                  </div>
                </div>

                <div className="col-lg-8 mt-2">
                  <div className="d-flex mt-2" style={{ gap: "30px" }}>
                    <label style={{ color: "#fff" }}>
                      <input
                        type="radio"
                        value="Yes"
                        checked={options1 === "Yes"}
                        onChange={onRadioChange1}
                      />{" "}
                      Yes
                    </label>

                    <label style={{ marginLeft: "15px", color: "#fff" }}>
                      <input
                        type="radio"
                        value="No"
                        checked={options1 === "No"}
                        onChange={onRadioChange1}
                      />{" "}
                      No
                    </label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left mt-3" style={{ gap: "30px" }}>
                    <div className="mr-3">Login Access:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="btn-group mt-2">
                    <ToggleButton />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Password:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="password"
                        className="btn btn-own"
                        placeholder="8 to 12 characters"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Upload Resume:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="file"
                        className="btn btn-own"
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Employee Category:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <button
                        type="button"
                        className="btn btn-own dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {action}
                      </button>
                      <div className="dropdown-menu">
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Employee")}
                        >
                          Employee
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Consultant")}
                        >
                          Consultant
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Payout type:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <button
                        type="button"
                        className="btn btn-own dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {action}
                      </button>
                      <div className="dropdown-menu">
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Employee")}
                        >
                          Employee
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Consultant")}
                        >
                          Consultant
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Grade:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <button
                        type="button"
                        className="btn btn-own dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {action}
                      </button>
                      <div className="dropdown-menu">
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Employee")}
                        >
                          Employee
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Consultant")}
                        >
                          Consultant
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Date of Birth:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="date"
                        className="btn btn-own"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Anniversary:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="date"
                        className="btn btn-own"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Salary:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="number"
                        className="btn btn-own"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3">Job Designation:</div>
                  </div>
                </div>
                <div className="col-lg-8">
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
                          class="dropdown-item"
                          onClick={() => setAction1("Pakistan (+92)")}
                        >
                          Pakistan (+92)
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction1("Nepal (+977)")}
                        >
                          Nepal (+977)
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction1("Bangladesh (+880)")}
                        >
                          Bangladesh (+880)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3">Admin Rights:</div>
                  </div>
                </div>
                <div className="col-lg-8">
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
                          class="dropdown-item"
                          onClick={() => setAction1("Pakistan (+92)")}
                        >
                          Pakistan (+92)
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction1("Nepal (+977)")}
                        >
                          Nepal (+977)
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction1("Bangladesh (+880)")}
                        >
                          Bangladesh (+880)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Date of Joining:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="date"
                        className="btn btn-own"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Attendance ID:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">PAN Card:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="number"
                        className="btn btn-own"
                        placeholder="Enter Relationship"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Account No:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="number"
                        className="btn btn-own"
                        placeholder="Enter Relationship"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">IFSC:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="number"
                        className="btn btn-own"
                        placeholder="Enter Relationship"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">HRMS ID:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="number"
                        className="btn btn-own"
                        placeholder="Enter Relationship"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 text-center">
              <button
                className="btn btn-primary mt-5 mr-5"
                style={{ width: "200px" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffForm;
