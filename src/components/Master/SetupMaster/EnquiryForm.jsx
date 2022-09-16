import React from "react";
import "react-calendar/dist/Calendar.css";
import Section from "../../Section";

const EnquiryForm = () => {
  const Personal = ["Email", "Gender", "Date of Birth", "Locality"];

  return (
    <>
      <div
        className="title mt-5 ml  -5"
        style={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Enquiry Form
      </div>
      <div className=" row">
        <div className="col-lg-6">
          <div className=" left">
            <Section title={"Personal Details"} data={Personal} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className=" left">
            <Section title={"Personal Details"} data={Personal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryForm;
