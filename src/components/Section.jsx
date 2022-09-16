import React from "react";
import ToggleButton from "./ToggleButton";

const Section = ({ title, data }) => {
  return (
    <div className="dbox-14" style={{ width: "600px" }}>
      <div
        className="title"
        style={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {title}
      </div>

      {data.map((item, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-lg-8">
              <div className="d-flex left" style={{ gap: "30px" }}>
                <div className="mr-3">{item}:</div>
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="btn-group right" style={{ margin: "0px" }}>
                <ToggleButton />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
