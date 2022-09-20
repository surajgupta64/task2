import React from "react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import Navbar from "../../Layout/Navbar";
import Table from "../../Table";

const HolidayMaster = () => {
  const [action, setAction] = useState(false);
  const Users = [
    {
      id: 1,
      staff_name: "Diwali",
      attendance_id: "2",
      fingerprint: "0",
      active: "ON",
    },
    {
      id: 2,
      staff_name: "Holi",
      attendance_id: "1",
      fingerprint: "0",
      active: "ON",
    },
  ];

  const column = [
    { heading: "S.No", value: "id" },

    { heading: "Date", value: "date" },
    { heading: "Holiday Name", value: "staff_name" },
    { heading: "Number Of Holidays", value: "attendance_id" },
    {
      heading: "Action",
      btn1: (
        <div className="d-flex justify-content-around">
          <div className="bg-icon d-flex justify-content-center align-items-center">
            <AiFillEdit />
          </div>
          <div className="bg-icon d-flex justify-content-center align-items-center">
            <AiOutlineDelete />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              Holidays List
            </div>
            <div className="d-flex justify-content-between mt-2">
              <div></div>
              <div>
                {action === false && (
                  <button onClick={() => setAction(!action)}>
                    Add Holiday
                  </button>
                )}
              </div>
            </div>
            {action && (
              <div className="d-flex justify-content-between mt-2">
                <div>
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="d-flex left" style={{ gap: "30px" }}>
                        <div className="mr-3">Job Designation Name:</div>
                      </div>
                    </div>

                    <div className="col-lg-10">
                      <div className="d-flex mt-3" style={{ gap: "30px" }}>
                        <div className="btn-group">
                          <input
                            type="text"
                            className="btn btn-own"
                            placeholder="Enter Subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="d-flex left" style={{ gap: "30px" }}>
                        <div className="mr-3">Job Designation Details:</div>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="d-flex  mt-3" style={{ gap: "30px" }}>
                        <div className="btn-group">
                          <textarea
                            className="filter-btn2"
                            style={{
                              minHeight: "100px",
                              borderRadius: "10px",
                              padding: "10px",
                              minWidth: "700px",
                            }}
                            placeholder="Type Email"
                          ></textarea>
                        </div>
                      </div>
                      <div className="mt-2">
                        <button className="mr-3">Save</button>
                        <button onClick={() => setAction(false)}>Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            )}
            <Table data={Users} column={column} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HolidayMaster;
