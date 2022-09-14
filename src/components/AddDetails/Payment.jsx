import React from "react";
import { BsFillEyeFill, BsFillPrinterFill } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa";
import { TbBrandTelegram, TbFileInvoice } from "react-icons/tb";
import Table from "../Table";

const Payment = () => {
  const column = [
    /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */
    { heading: "S.No", value: "id" },
    { heading: "Purchased", value: "date_time" },
    { heading: "Name", label: "name" },
    { heading: "Pro Forma Invoice No.", value: "invoiceNo" },
    { heading: "Amount", value: "amount" },
    { heading: "Tax", value: "tax" },
    { heading: "Net", value: "net" },
    {
      heading: "Paid",
      value: "paid",
    },
    { heading: "Pending	", value: "pending" },
    {
      heading: "Mode",
      value: "mode",
    },
    { heading: "Write Off", value: "writeOff" },
    {
      heading: "Paid Invoice & Receipt",
      btn1: (
        <div>
          <div className="d-flex justify-content-center">
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <FaFileInvoice />
            </div>
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <TbFileInvoice />
            </div>
          </div>
        </div>
      ),
    },
    {
      heading: "Pro Forma Invoice Details",
      btn1: (
        <div>
          <div className="d-flex justify-content-center">
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <BsFillEyeFill />
            </div>
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <BsFillPrinterFill />
            </div>
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <TbBrandTelegram />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const Users = [
    {
      id: 1,
      date_time: "25-08-2022 03:00 PM",
      name: "Nayana Nagrecha",
      invoiceNo: "Sep23-2022",
      amount: "₹500",
      tax: "₹0",
      net: "₹500",
      paid: "₹0",
      pending: "₹500",
      mode: "-",
      writeOff: "No",
    },
    {
      id: 2,
      date_time: "25-08-2022 03:00 PM",
      name: "Nayana Nagrecha",
      invoiceNo: "Sep23-2022",
      amount: "₹500",
      tax: "₹0",
      net: "₹500",
      paid: "₹0",
      pending: "₹500",
      mode: "-",
      writeOff: "No",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
        <div className="title ml-3">Payment</div>
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
      <div>
        <Table data={Users} column={column} />
      </div>
    </>
  );
};

export default Payment;
