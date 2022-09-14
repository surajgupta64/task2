import React from "react";
import "react-calendar/dist/Calendar.css";
import Table from "../Table";

const Measurement = () => {
  const column = [
    /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */
    { heading: "S.No", value: "id" },
    { heading: "Date", value: "Date" },
    { heading: "Weight", label: "Weight" },
    { heading: "Neck", value: "Neck" },
    { heading: "Shoulder", value: "Shoulder" },
    { heading: "Chest", value: "Chest" },
    { heading: "Upper Abs", value: "UpperAbs" },
    { heading: "Waist", value: "Waist" },
    { heading: "Lower Abs", value: "LowerAbs" },
    { heading: "Hips", value: "Hips" },
    { heading: "Left-Thigh", value: "LeftThigh" },
    { heading: "Right-Thigh", value: "RightThigh" },
    { heading: "Left-Arms", value: "LeftArms" },
    { heading: "Right-Arms", value: "RightArms" },
    { heading: "Fat", value: "Fat" },
    { heading: "Body Age", value: "BodyAge" },
    { heading: "BMI", value: "BMI" },
    { heading: "Muscle", value: "Muscle" },
    { heading: "RBM", value: "RBM" },
    { heading: "Vis. Fat", value: "VisFat" },

    { heading: "Sub Fat", value: "SubFat" },
  ];

  const Users = [
    {
      id: 1,
      Date: "25-08-2022",
      Weight: "56.4",
      Neck: "13 1/2",
      Shoulder: "18",
      Chest: "33",
      UpperAbs: "26",
      Waist: "32",
      LowerAbs: "36",
      Hips: "38",
      LeftThigh: "22",
      RightThigh: "22.5",
      LeftArms: "13.5",
      RightArms: "12",
      Fat: "48",
      BodyAge: "-",
      BMI: "36.8",
      Muscle: "-",
      RBM: "2040",
      VisFat: "-",
      SubFat: "-",
    },
    {
      id: 2,
      Date: "25-09-2022",
      Weight: "56.4",
      Neck: "13 1/2",
      Shoulder: "18",
      Chest: "33",
      UpperAbs: "26",
      Waist: "32",
      LowerAbs: "36",
      Hips: "38",
      LeftThigh: "22",
      RightThigh: "22.5",
      LeftArms: "13.5",
      RightArms: "12",
      Fat: "48",
      BodyAge: "-",
      BMI: "36.8",
      Muscle: "-",
      RBM: "2040",
      VisFat: "-",
      SubFat: "-",
    },
  ];

  return (
    <>
      <div className="dbox-10 " style={{ marginBottom: "20px" }}>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Body Measurement
            </div>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Date:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="date"
                      className="btn btn-own"
                      placeholder="Enter Date"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Weight:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Weight"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Neck:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Neck"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Shoulder:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Shoulder"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Chest:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Chest"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Upper Abs:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Upper Abs"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className="col-lg-6 mt-1">
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            ></div>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Waist:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Waist"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Lower Abs:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Lower Abs"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Hips:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Hips"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Left-Thigh:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Left Thigh"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Right-Thigh:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Right Thigh"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Left-Arms:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Left Arms"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Right-Arms:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Right Arms"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-2">
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              BMI
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Fat:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Fat"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Body Age:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Body Age"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">BMI:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter BMI"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Muscle:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Muscle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            ></div>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">RBM:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter RBM"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Vis. Fat:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Vis Fat"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex left" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Sub Fat:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Sub Fat"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <div className="col-lg-3"></div>

          <div className="col-lg-8">
            <button
              className="btn btn-primary mt-3 mr-5"
              style={{ width: "200px" }}
            >
              All Member & Bill
            </button>
            <button
              className="btn btn-primary mt-3 mr-5"
              style={{ width: "150px" }}
            >
              Sell Product
            </button>
            <button className="btn btn-primary mt-3" style={{ width: "150px" }}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div>
        <Table data={Users} column={column} />
      </div>
    </>
  );
};

export default Measurement;
