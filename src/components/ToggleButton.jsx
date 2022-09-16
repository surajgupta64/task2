import React from "react";
import { useState } from "react";
import "./toggleButton.css";

const ToggleButton = ({ toggled, onClick }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={`toggle${toggle ? " night" : ""}`}
    >
      <div className="notch"></div>

      <div className="text-status" style={{ fontSize: "10px" }}>
        {toggle ? "ON" : "OFF"}
      </div>
    </div>
  );
};

export default ToggleButton;
