import React from "react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import Navbar from "../../Layout/Navbar";
import Table from "../../Table";

const LeaveTypeMaster = () => {
  const [action, setAction] = useState(false);
  const Users = [
    {
      id: 1,
      staff_name: "Sick Leave",
      attendance_id: "5",
      fingerprint: "0",
      active: "ON",
    },
    {
      id: 2,
      staff_name: "Paid Leave",
      attendance_id: "8",
      fingerprint: "0",
      active: "ON",
    },
  ];

  const column = [
    { heading: "S.No", value: "id" },

    { heading: "Leave Type", value: "staff_name" },
    { heading: "Leave Days", value: "attendance_id" },
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
              Leave List
            </div>
            <div className="d-flex justify-content-between mt-2">
              <div></div>
              <div>
                {action === false && (
                  <button onClick={() => setAction(!action)}>Add Leave</button>
                )}
              </div>
            </div>
            {action && (
              <div className="d-flex justify-content-between mt-2">
                <div>
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="d-flex left" style={{ gap: "30px" }}>
                        <div className="mr-3">Leave Type Name:</div>
                      </div>
                    </div>

                    <div className="col-lg-9">
                      <div className="d-flex mt-3" style={{ gap: "30px" }}>
                        <div className="btn-group">
                          <input
                            type="text"
                            className="btn btn-own"
                            placeholder="Enter Leave Type"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex left" style={{ gap: "30px" }}>
                        <div className="mr-3">Leave Days:</div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="d-flex  mt-3" style={{ gap: "30px" }}>
                        <div className="btn-group">
                          <input
                            type="number"
                            className="btn btn-own"
                            placeholder="Enter Leave Days"
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <button className="mr-3 filter-btn2">Save</button>
                        <button
                          className="filter-btn2"
                          onClick={() => setAction(false)}
                        >
                          Cancel
                        </button>
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

export default LeaveTypeMaster;
