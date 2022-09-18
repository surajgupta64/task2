import { AiOutlineDelete, AiOutlinePrinter } from "react-icons/ai";
import Navbar from "../../Layout/Navbar";
import Table from "../../Table";

const IdCardMaster = () => {
  const column = [
    /* 
            value: keyword for normal value passing
            btn: keyword for button
            btn1 to btn4: keyword for component passing
            lebel: keyword for anchor tag
            Note: please don't pass empty values or perameters
            */
    { heading: "S.No", value: "id" },
    { heading: "Name", value: "name" },
    { heading: "Mobile Number", value: "mobile" },
    {
      heading: "Email",
      value: "email",
    },
    {
      heading: "Print",
      btn1: (
        <div className="d-flex justify-content-around">
          <div className="bg-icon d-flex justify-content-center align-items-center">
            <AiOutlinePrinter />
          </div>
        </div>
      ),
    },
    {
      heading: "Delete",
      btn1: (
        <div className="d-flex justify-content-around">
          <div className="bg-icon d-flex justify-content-center align-items-center">
            <AiOutlineDelete />
          </div>
        </div>
      ),
    },
  ];

  const Users = [
    {
      id: 1,
      name: "suraj",
      mobile: "7710957578",
      email: "surajgupta6425@gmail.com",
    },
    {
      id: 2,
      name: "suraj",
      mobile: "7710957578",
      email: "surajgupta6425@gmail.com",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10 " style={{ marginBottom: "20px" }}>
          <div className="text-center" style={{ gap: "30px" }}>
            <h4 style={{ fontWeight: "bold" }}>ID Card Master</h4>
          </div>

          <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
            <div>
              Search Member:
              <input
                style={{ paddingLeft: "5px" }}
                type="text"
                className="search-input ml-3"
                placeholder="Search..."
              />
              <button className="search-btn ml-2">Search</button>
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

export default IdCardMaster;
