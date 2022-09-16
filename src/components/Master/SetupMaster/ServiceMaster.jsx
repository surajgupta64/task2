import { useState } from "react";
import {
  AiFillEdit,
  AiFillPlusCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineDelete,
} from "react-icons/ai";
import Navbar from "../../Layout/Navbar";
import Table from "../../Table";
import ToggleButton from "../../ToggleButton";

const ServiceMaster = () => {
  const [action1, setAction1] = useState(true);
  const column = [
    /* 
            value: keyword for normal value passing
            btn: keyword for button
            btn1 to btn4: keyword for component passing
            lebel: keyword for anchor tag
            Note: please don't pass empty values or perameters
            */
    { heading: "S.No", value: "id" },
    { heading: "Service Name", value: "name" },
    { heading: "Service Variations", value: "variations" },
    {
      heading: "Sort",
      btn1: (
        <div className="d-flex justify-content-around">
          <div className="bg-icon d-flex justify-content-center align-items-center">
            <AiOutlineArrowUp />
          </div>

          <div className="bg-icon d-flex justify-content-center align-items-center">
            <AiOutlineArrowDown />
          </div>
        </div>
      ),
    },
    {
      heading: "Promote",
      btn1: (
        <ToggleButton toggled={action1} onClick={() => setAction1(!action1)} />
      ),
    },
    {
      heading: "Status",
      btn1: (
        <ToggleButton toggled={action1} onClick={() => setAction1(!action1)} />
      ),
    },
    {
      heading: "Options",
      btn1: (
        <div>
          <div className="d-flex justify-content-around">
            <div>
              <button className="filter-btn2">
                <AiFillPlusCircle /> Add Variation
              </button>
            </div>
            <div className="bg-icon d-flex justify-content-center align-items-center">
              <AiFillEdit />
            </div>

            <div className="bg-icon d-flex justify-content-center align-items-center">
              <AiOutlineDelete />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const Users = [
    {
      id: 1,
      name: "TTC",
      variations: "12 View",
    },
    {
      id: 2,
      name: "Yoga",
      variations: "2 View",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10 " style={{ marginBottom: "20px" }}>
          <div className="text-center" style={{ gap: "30px" }}>
            <h4 style={{ fontWeight: "bold" }}>Service Master</h4>
          </div>

          <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
            <div></div>
            <div>
              <button className="filter-btn1 mr-3">Add New Service</button>
              <button className="filter-btn1 mr-3">Playgrounds</button>
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

export default ServiceMaster;
