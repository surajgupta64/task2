import React from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdGroups, MdPowerSettingsNew } from "react-icons/md";
import Navbar from "../../Layout/Navbar";
import { SiGoogleadsense } from "react-icons/si";
import { AiOutlineComment } from "react-icons/ai";
import { RiGalleryFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";

const MarketingMaster = () => {
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
          Marketing Master
        </div>
        <div
          className="title"
          style={{
            fontSize: "14px",
            marginLeft: "64px",
          }}
        >
          Complete the following steps for center Marketing master
        </div>

        <div
          className="dbox-14"
          style={{ padding: "15px", backgroundColor: "#3498DB" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <AiOutlineComment
                style={{ marginLeft: "20px", height: "45px", width: "45px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Sms, E-mail, Template Master
                  <br />
                  Brand logo
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button
                className="btn btn-own"
                onClick={() => navigate("/tamplateMaster/master")}
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
              <SiGoogleadsense
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Lead Sources Master
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
              <FaRegAddressCard
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Guest Pass Master
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
              <RiGalleryFill
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Gallery Master
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
              <HiUserGroup
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Automated Communication To staff Master
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

        <div
          className="dbox-14"
          style={{ padding: "15px", backgroundColor: "#4854D6" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <MdGroups
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Automated Communication To Member Master
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

export default MarketingMaster;
