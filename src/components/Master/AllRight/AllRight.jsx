import React from "react";
import PTRenewedVSLeftClient from "../../Clients/PTRenewedVSLeftClient";
import Navbar from "../../Layout/Navbar";
import Tabs from "../../Tabs";
import ClientMaster from "./ClientMaster";
import DashboardMaster from "./DashboardMaster";
import LeadMaster from "./LeadMaster";

const AllRight = () => {
  const data = [
    {
      title: "Dashboard",
      compo: <DashboardMaster />,
    },
    { title: "Lead", compo: <LeadMaster /> },

    { title: "Clients", compo: <ClientMaster /> },
    { title: "Marketing & Communication", compo: <PTRenewedVSLeftClient /> },
    { title: "Inventory", compo: <PTRenewedVSLeftClient /> },
    { title: "Finance", compo: <PTRenewedVSLeftClient /> },
    { title: "HR", compo: <PTRenewedVSLeftClient /> },
    { title: "Fitness", compo: <PTRenewedVSLeftClient /> },
    { title: "Export", compo: <PTRenewedVSLeftClient /> },
    { title: "Master", compo: <PTRenewedVSLeftClient /> },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center" style={{ fontSize: "23px" }}>
            All Rights
          </div>
          <div className="mt-3">
            <Tabs data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRight;
