import React from "react";
import { AiOutlineForm } from "react-icons/ai";
import { BsCalendar3, BsFillImageFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineMiscellaneousServices,
  MdPowerSettingsNew,
} from "react-icons/md";
import Navbar from "../../Layout/Navbar";

const CenterSetup = () => {
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
          Center Setup Master
        </div>
        <div
          className="title"
          style={{
            fontSize: "14px",
            marginLeft: "64px",
          }}
        >
          Complete the following steps to get the most out of your account
        </div>

        <div
          className="dbox-14"
          style={{ padding: "15px", backgroundColor: "#3498DB" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <BsFillImageFill
                style={{ marginLeft: "20px", height: "45px", width: "45px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Company Logo Setup
                  <br />
                  Brand logo
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button
                className="btn btn-own"
                onClick={() => navigate("/logoMaster/master")}
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
                  Company Profile Setup
                  <br />
                  Set Up Branch Profile
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button
                className="btn btn-own"
                onClick={() => navigate("/profileMaster/master")}
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
              <MdOutlineMiscellaneousServices
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Services Master
                  <br />
                  Set Up Branch Profile
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button
                className="btn btn-own"
                onClick={() => navigate("/serviceMaster/master")}
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
          style={{ padding: "15px", backgroundColor: "#33C68C" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <HiCurrencyRupee
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Price Master
                  <br />
                  Set Up Branch Profile
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button
                className="btn btn-own"
                onClick={() => navigate("/priceMaster/master")}
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
          style={{ padding: "15px", backgroundColor: "#EC9F2F" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <BsCalendar3
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Batch time Master
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
          style={{ padding: "15px", backgroundColor: "#6B33C6" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <AiOutlineForm
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Form Master
                  <br />
                  Set Up Branch Profile
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button
                className="btn btn-own"
                onClick={() => navigate("/formMaster/master")}
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
          style={{ padding: "15px", backgroundColor: "#2F8C18" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <FaFileInvoiceDollar
                style={{ marginLeft: "20px", height: "50px", width: "50px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-flex left" style={{ marginTop: "0px" }}>
                <div className="row">
                  Invoice Master
                  <br />
                  Set Up Branch Profile
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-2">
              <button
                className="btn btn-own"
                onClick={() => navigate("/invoiceMaster/master")}
              >
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

export default CenterSetup;
