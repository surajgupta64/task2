import React from "react";
import Tabs from "../Tabs";
import FollowUpCalls from "./FollowUpCalls";
import MemberCalls from "./MemberCalls";

const CallHistary = () => {
  const data = [
    {
      title: "Follow Calls",
      compo: <FollowUpCalls />,
      bgcolor: "#58D68D",
    },
    {
      title: "Member Calls",
      compo: <MemberCalls />,
      bgcolor: "#F39C12",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
        <div className="title ml-3">Calls History</div>
        <div>
          <button className="btn filter-btn1 " style={{ marginRight: "5px" }}>
            Inter branch transfer
          </button>
          <button className="btn filter-btn1 " style={{ marginRight: "5px" }}>
            Print Profile
          </button>
          <button className="btn filter-btn1 " style={{ marginRight: "5px" }}>
            New Invoice
          </button>
          <button className="btn filter-btn1 " style={{ marginRight: "5px" }}>
            New Call
          </button>
          <button className="btn filter-btn1 ">New Appointment</button>
        </div>
      </div>
      <div className="mt-3">
        <Tabs data={data} />
      </div>
    </>
  );
};

export default CallHistary;
