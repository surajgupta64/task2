import React from "react";
import { useState } from "react";
import "./toggleButton.css";

const ToggleButton = ({ toggled, onClick, text = false, text1 = false }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={`toggle${toggle ? " night" : ""}`}
    >
      <div className="notch"></div>
      {text && (
        <div className="text-status" style={{ fontSize: "10px" }}>
          {toggle ? "ON" : "OFF"}
        </div>
      )}
      {text1 && (
        <div className="text-status" style={{ fontSize: "10px" }}>
          {toggle ? "YES" : "NO"}
        </div>
      )}
    </div>
  );
};

export default ToggleButton;
