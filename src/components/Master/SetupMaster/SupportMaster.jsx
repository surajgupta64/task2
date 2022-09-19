import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { IoCallOutline, IoDocumentText } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MdPowerSettingsNew, MdSupportAgent } from "react-icons/md";
import Navbar from "../../Layout/Navbar";
import { SiGoogleclassroom } from "react-icons/si";

const SupportMaster = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="dbox-10">
        <div
          className="title"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginLeft: "64px",
          }}
        >
          Support Master
        </div>
        <div
          className="title"
          style={{
            fontSize: "14px",
            marginLeft: "64px",
          }}
        >
          Complete the following steps for center support master
        </div>

        <div
          className="dbox-14"
          style={{ padding: "15px", backgroundColor: "#3498DB" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <FaAddressCard
                style={{ marginLeft: "20px", height: "45px", width: "45px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  ID Card Master
                  <br />
                  Brand logo
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button
                className="btn btn-own"
                onClick={() => navigate("/idCardMaster/master")}
              >
                <MdPowerSettingsNew
                  style={{ height: "20px", width: "20px", marginRight: "4px" }}
                />
                Start
              </button>
            </div>
          </div>
        </div>
        <div
          className="dbox-14"
          style={{ padding: "15px", backgroundColor: "#33C635" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <IoDocumentText
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Center T & C Master
                  <br />
                  Set Up Branch Profile
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button
                className="btn btn-own"
                onClick={() => navigate("/centerTcMaster/master")}
              >
                <MdPowerSettingsNew
                  style={{ height: "20px", width: "20px", marginRight: "4px" }}
                />
                Start
              </button>
            </div>
          </div>
        </div>
        <div
          className="dbox-14"
          style={{ padding: "15px", backgroundColor: "#3533C6" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <IoCallOutline
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Remainder Call Master
                  <br />
                  Set Up Branch Profile
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button
                className="btn btn-own"
                onClick={() => navigate("/remainderCalls/master")}
              >
                <MdPowerSettingsNew
                  style={{ height: "20px", width: "20px", marginRight: "4px" }}
                />
                Start
              </button>
            </div>
          </div>
        </div>

        <div
          className="dbox-14"
          style={{ padding: "15px", backgroundColor: "red" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <SiGoogleclassroom
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Batch Master
                  <br />
                  Set Up Branch Profile
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button
                className="btn btn-own"
                onClick={() => navigate("/remainderCalls/master")}
              >
                <MdPowerSettingsNew
                  style={{ height: "20px", width: "20px", marginRight: "4px" }}
                />
                Start
              </button>
            </div>
          </div>
        </div>

        <div
          className="dbox-14"
          style={{ padding: "15px", backgroundColor: "green" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <MdSupportAgent
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Customer Support Master
                  <br />
                  Set Up Branch Profile
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button className="btn btn-own">
                <MdPowerSettingsNew
                  style={{ height: "20px", width: "20px", marginRight: "4px" }}
                />
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportMaster;
