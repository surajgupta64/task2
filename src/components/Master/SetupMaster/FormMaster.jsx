import React from "react";
import Payment from "../../AddDetails/Payment";
import Navbar from "../../Layout/Navbar";
import Tabs from "../../Tabs";
import EnquiryForm from "./EnquiryForm";

const FormMaster = () => {
  const data = [
    {
      title: "Enquiry Form",
      compo: <EnquiryForm />,
    },
    {
      title: "Member Form",
      compo: <Payment />,
    },
    {
      title: "Additional",
      compo: <Payment />,
    },

    { title: "Fitness Profile", compo: <Payment /> },
    { title: "Apparel and shoes", compo: <Payment /> },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div
            className="text-center"
            style={{ fontWeight: "bold", fontSize: "23px" }}
          >
            Form Master
          </div>
          <div className="mt-3">
            <Tabs data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormMaster;
