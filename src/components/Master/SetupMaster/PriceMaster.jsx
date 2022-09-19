import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import Navbar from "../../Layout/Navbar";
import Table from "../../Table";
import ToggleButton from "../../ToggleButton";

const PriceMaster = () => {
  const [action1, setAction1] = useState("%");
  const [action2, setAction2] = useState(false);
  const column = [
    /* 
            value: keyword for normal value passing
            btn: keyword for button
            btn1 to btn4: keyword for component passing
            lebel: keyword for anchor tag
            Note: please don't pass empty values or perameters
            */
    { heading: "S.No", value: "id" },
    { heading: "Package Name", value: "name" },

    {
      heading: "Edit",
      btn: "Edit",
    },
    {
      heading: "View",
      btn: "View",
    },
    {
      heading: "Disable from Selling",
      btn1: <ToggleButton />,
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
            <h4 style={{ fontWeight: "bold" }}>Price Master</h4>
          </div>

          <div className="d-flex justify-content-between mt-5 ml-2 mr-2">
            <div></div>
            <div>
              <button
                className="filter-btn1 mr-3"
                style={{
                  backgroundColor: "blue",
                  border: "2px solid #fff",
                  color: "#fff",
                }}
                onClick={() => setAction2(!action2)}
              >
                Add New
              </button>
            </div>
          </div>
          {action2 && (
            <div className="mt-3">
              <table className="ml-3 mr-5">
                <tr>
                  <th>Sr.No.</th>
                  <th>SERVICE</th>
                  <th>SERVICE FEE</th>
                  <th>SERVICE DISCOUNT</th>
                  <th>
                    <IoAdd />
                  </th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <input
                      type="text"
                      className="btn filter-btn2"
                      placeholder="Enter Service Name"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="btn filter-btn2"
                      placeholder="Enter Service Fee"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="btn filter-btn1"
                      style={{ width: "100px" }}
                    />
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn filter-btn1 dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ width: "100px" }}
                      >
                        {action1}
                      </button>
                      <div className="dropdown-menu">
                        <label
                          className="dropdown-item"
                          onClick={() => setAction1("%")}
                        >
                          %
                        </label>
                        <label
                          className="dropdown-item"
                          onClick={() => setAction1("₹")}
                        >
                          ₹
                        </label>
                      </div>
                    </div>
                    =
                    <input
                      type="number"
                      className="btn filter-btn1"
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <div className="bg-icon d-flex justify-content-center align-items-center">
                        <AiOutlineDelete onClick={() => setAction2(!action2)} />
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
              <div>
                <button className="btn btn-own mt-2 ml-3">Submit</button>
              </div>
            </div>
          )}
          <div className="mt-3">
            <Table data={Users} column={column} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceMaster;
