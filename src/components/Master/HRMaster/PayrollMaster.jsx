import React from "react";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layout/Navbar";
import Table from "../../Table";

const PayrollMaster = () => {
  const navigate = useNavigate();
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
  //**Sr No	Emp Name	EMP Mob	EMP ID	Joing date	Gender	Job Post	Department	Location	Full Time Or Part Time	Work From Office or Home	Gross Salary	TWD	Incentive	Profisional Tax	Advance Dedcation	Net take Home	Remark	bank name	ac no	IFSC Code */
  const column = [
    { heading: "S.No", value: "id" },

    { heading: "Emp Name", value: "staff_name" },
    { heading: "EMP Mob", value: "staff_name" },
    { heading: "EMP ID", value: "staff_name" },
    { heading: "Joing date", value: "staff_name" },
    { heading: "Gender", value: "staff_name" },
    { heading: "Job Post", value: "staff_name" },
    { heading: "Department", value: "staff_name" },
    { heading: "Location", value: "staff_name" },
    { heading: "Full Time Or Part Time", value: "staff_name" },
    { heading: "Work From", value: "staff_name" },
    { heading: "Gross Salary", value: "staff_name" },
    { heading: "TWD", value: "staff_name" },
    { heading: "Incentive", value: "staff_name" },
    { heading: "Profisional Tax", value: "staff_name" },
    { heading: "Advance Dedcation", value: "staff_name" },
    { heading: "Net take Home", value: "staff_name" },
    { heading: "Remark", value: "staff_name" },
    { heading: "bank name", value: "staff_name" },
    { heading: "ac no", value: "staff_name" },
    { heading: "IFSC Code", value: "staff_name" },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              Payroll Master
            </div>
            <div className="d-flex justify-content-between mt-2">
              <div></div>
              <div>
                <button onClick={() => navigate("/payrollMaster/HR")}>
                  Add Staff
                </button>
              </div>
            </div>

            <Table data={Users} column={column} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PayrollMaster;
