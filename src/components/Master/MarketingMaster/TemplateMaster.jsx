import Tabs from "faster-react-tabs";
import React from "react";
import Navbar from "../../Layout/Navbar";

const TemplateMaster = () => {
  const data = [
    {
      title: "SMS Template",
      compo: <TemplateMaster />,
    },
    {
      title: "SMS Template",
      compo: <TemplateMaster />,
    },
    {
      title: "SMS Template",
      compo: <TemplateMaster />,
    },
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
            Membership Form
          </div>
          <div className="mt-3">
            <Tabs data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateMaster;
