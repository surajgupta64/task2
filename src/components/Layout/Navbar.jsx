import React from "react";
import yog_logo from "../../Images/yog_logo.png";
import { FiSearch } from "react-icons/fi";
import { HiUserAdd } from "react-icons/hi";
import { BsCalendarEvent, BsFilePostFill } from "react-icons/bs";
import { ImTelegram } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { TbBrandBooking } from "react-icons/tb";
import { RiSpeedLine } from "react-icons/ri";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState(0);

  return (
    <>
      <div className="admin_navbar">
        <div
          className="bunty d-flex align-items-center justify-content-between"
          style={{ height: "100%;" }}
        >
          <div>
            <img src={yog_logo} width="100px" height="100px" alt="error" />
          </div>
          <div className="d-flex navMenu" style={{ gap: "50px" }}>
            <div className="sidebar_content" style={{ position: "relative" }}>
              <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="nav-icons">
                    {option === 10 ? (
                      <>
                        <div className="fc btn-group">
                          <input
                            type="text"
                            className="filter-btn mr-2"
                            style={{
                              padding: "5px",
                              height: "35px",
                              width: "350px",
                            }}
                            placeholder="Search..."
                          />
                          <button className="search-btn mr-5">Search</button>
                          <AiOutlineClose
                            className="mt-1"
                            onClick={() => setOption(0)}
                          />
                        </div>
                      </>
                    ) : (
                      <FiSearch
                        onClick={() => {
                          setOption(10);
                        }}
                      />
                    )}
                  </div>
                </div>
              </Link>
            </div>
            <div className="sidebar_content" style={{ position: "relative" }}>
              <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="nav-icons">
                    {option === 1 ? (
                      <div
                        onClick={() => {
                          setOption(0);
                        }}
                      >
                        <HiUserAdd />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setOption(1);
                        }}
                      >
                        <HiUserAdd />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              <div className={option === 1 ? "options2" : "hide"}>
                <ul className="category-sb">
                  <li onClick={() => navigate("/enquiryForm/form")}>
                    <b>Enquiry</b>
                  </li>
                  <li onClick={() => navigate("/membershipForm/form")}>
                    <b>Member</b>
                  </li>
                  <li onClick={() => navigate("/staffForm/form")}>
                    <b>Staff</b>
                  </li>
                  <li onClick={() => navigate("/productForm/form")}>
                    <b>Product</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Expense</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Invoice</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Support request</b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar_content" style={{ position: "relative" }}>
              <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="nav-icons">
                    {option === 2 ? (
                      <div
                        onClick={() => {
                          setOption(0);
                        }}
                      >
                        <TbBrandBooking />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setOption(2);
                        }}
                      >
                        <TbBrandBooking />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              <div className={option === 2 ? "options2" : "hide"}>
                <ul className="category-sb">
                  <li onClick={() => navigate("/all/enquiry")}>
                    <b>Turf/Venue</b>
                  </li>
                  <li onClick={() => navigate("/trial")}>
                    <b>Class</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Event</b>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sidebar_content" style={{ position: "relative" }}>
              <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="nav-icons">
                    {option === 3 ? (
                      <div
                        onClick={() => {
                          setOption(0);
                        }}
                      >
                        <BsCalendarEvent />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setOption(3);
                        }}
                      >
                        <BsCalendarEvent />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              <div className={option === 3 ? "options2" : "hide"}>
                <ul className="category-sb">
                  <li onClick={() => navigate("/all/enquiry")}>
                    <b>Enquiry</b>
                  </li>
                  <li onClick={() => navigate("/trial")}>
                    <b>Member</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Staff</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Product</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Expense</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Invoice</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Support request</b>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sidebar_content" style={{ position: "relative" }}>
              <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="nav-icons">
                    {option === 4 ? (
                      <div
                        onClick={() => {
                          setOption(0);
                        }}
                      >
                        <RiSpeedLine />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setOption(4);
                        }}
                      >
                        <RiSpeedLine />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              <div className={option === 4 ? "options2" : "hide"}>
                <ul className="category-sb">
                  <li onClick={() => navigate("/all/enquiry")}>
                    <b>Enquiry</b>
                  </li>
                  <li onClick={() => navigate("/trial")}>
                    <b>Member</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Staff</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Product</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Expense</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Invoice</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Support request</b>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sidebar_content" style={{ position: "relative" }}>
              <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="nav-icons">
                    {option === 5 ? (
                      <div
                        onClick={() => {
                          setOption(0);
                        }}
                      >
                        <BsFilePostFill />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setOption(5);
                        }}
                      >
                        <BsFilePostFill />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              <div className={option === 5 ? "options2" : "hide"}>
                <ul className="category-sb">
                  <li onClick={() => navigate("/all/enquiry")}>
                    <b>Enquiry</b>
                  </li>
                  <li onClick={() => navigate("/trial")}>
                    <b>Member</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Staff</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Product</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Expense</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Invoice</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Support request</b>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sidebar_content" style={{ position: "relative" }}>
              <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="nav-icons">
                    {option === 6 ? (
                      <div
                        onClick={() => {
                          setOption(0);
                        }}
                      >
                        <ImTelegram />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setOption(6);
                        }}
                      >
                        <ImTelegram />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              <div className={option === 6 ? "options2" : "hide"}>
                <ul className="category-sb">
                  <li onClick={() => navigate("/all/enquiry")}>
                    <b>Send Feedback Link</b>
                  </li>
                  <li onClick={() => navigate("/trial")}>
                    <b>Send Review Link</b>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sidebar_content" style={{ position: "relative" }}>
              <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="nav-icons">
                    {option === 7 ? (
                      <div
                        onClick={() => {
                          setOption(0);
                        }}
                      >
                        <CgProfile />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setOption(7);
                        }}
                      >
                        <CgProfile />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              <div className={option === 7 ? "options2" : "hide"}>
                <ul className="category-sb">
                  <li onClick={() => navigate("/all/enquiry")}>
                    <b>Admin Profile</b>
                  </li>
                  <li onClick={() => navigate("/trial")}>
                    <b>Account Plan</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Central Panel</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Add a Branch</b>
                  </li>
                  <li onClick={() => navigate("/followups")}>
                    <b>Log Out</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
