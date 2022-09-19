import React from "react";
import Tabs from "../Tabs";
import Measurement from "./Measurement";
import PersonalInformation from "./PersonalInformation";
import ProfessionalInformation from "./ProfessionalInformation";

const Profile = () => {
  const data = [
    {
      title: "Personal Information",
      compo: <PersonalInformation />,
      bgcolor: "#58D68D",
    },
    {
      title: "Professional Information",
      compo: <ProfessionalInformation />,
      bgcolor: "#F39C12",
    },
    { title: "Measurement", compo: <Measurement />, bgcolor: "#3498DB" },
  ];

  return (
    <>
      <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
        <div className="title ml-3">Profile</div>
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

export default Profile;
