import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layout/Navbar";
import Table from "../../Table";
import ToggleButton from "../../ToggleButton";

const SMSMaster = () => {
  const navigate = useNavigate();
  const column = [
    /* 
            value: keyword for normal value passing
            btn: keyword for button
            btn1 to btn4: keyword for component passing
            lebel: keyword for anchor tag
            Note: please don't pass empty values or perameters
            */
    { heading: "S.No", value: "id" },
    { heading: "Template Name", value: "name" },
    { heading: "SMS Content", value: "content" },
    {
      heading: "Extra Content Length",
      btn1: (
        <div>
          <div className="d-flex justify-content-center">
            <div className="bg-icon d-flex justify-content-center align-items-center mr-2">
              <AiFillEdit onClick={() => navigate("/editAgreement/master")} />
            </div>

            <div className="bg-icon d-flex justify-content-center align-items-center mr-2">
              <AiFillEye onClick={() => navigate("/tc/master")} />
            </div>
            <div className="bg-icon d-flex justify-content-center align-items-center mr-2">
              <AiFillDelete />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const Users = [
    {
      id: 1,
      name: "T & C In-studio",
      content: "CRM, Front Desk",
    },
    {
      id: 2,
      name: "T & C In-studio",
      content: "CRM, Front Desk",
    },
    {
      id: 3,
      name: "T & C In-studio",
      content: "CRM, Front Desk",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10 " style={{ marginBottom: "20px" }}>
          <div className="text-center" style={{ gap: "30px" }}>
            <h4 style={{ fontWeight: "bold" }}>Center T&C Master</h4>
          </div>

          <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
            <div></div>
            <div>
              <button className="filter-btn1 mr-3">Add New Category</button>
            </div>
          </div>
          <div className="mt-3">
            <Table data={Users} column={column} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SMSMaster;
