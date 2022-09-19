import { useState } from "react";
import Navbar from "../Layout/Navbar";
import ToggleButton from "../ToggleButton";

const ProductForm = () => {
  const [action1, setAction1] = useState("Select");
  const [action, setAction] = useState("Select");

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10 " style={{ marginBottom: "20px" }}>
          <div
            className="title text-center"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Add Product
          </div>
          <div className="row mt-3 ml-5 ">
            <div className="col-lg-6">
              <div
                className="title"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Product Details
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Category Type:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <button
                        type="button"
                        className="btn btn-own dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {action}
                      </button>
                      <div className="dropdown-menu">
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Employee")}
                        >
                          Employee
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Consultant")}
                        >
                          Consultant
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Sub Category Type:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <button
                        type="button"
                        className="btn btn-own dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {action}
                      </button>
                      <div className="dropdown-menu">
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Employee")}
                        >
                          Employee
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Consultant")}
                        >
                          Consultant
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Brand Name:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <button
                        type="button"
                        className="btn btn-own dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {action}
                      </button>
                      <div className="dropdown-menu">
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Employee")}
                        >
                          Employee
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Consultant")}
                        >
                          Consultant
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Product Name:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Description:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <textarea
                        style={{
                          minHeight: "80px",
                          minWidth: "200px",
                          borderRadius: "5px",
                          padding: "10px",
                        }}
                        placeholder="Enter Description"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">SKU:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter SKU"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">HSN Code:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter HSN Code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12 mb-2">
                  <div className="d-flex left mt-3" style={{ gap: "30px" }}>
                    <div
                      className="title"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Retail Sales
                    </div>

                    <div className="btn-group ">
                      <ToggleButton />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Retail Price:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="number"
                        className="btn btn-own"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Tax:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <button
                        type="button"
                        className="btn btn-own dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {action}
                      </button>
                      <div className="dropdown-menu">
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Employee")}
                        >
                          Employee
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction("Consultant")}
                        >
                          Consultant
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mb-2">
                  <div className="d-flex left mt-3" style={{ gap: "30px" }}>
                    <div
                      className="title"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Stock
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Cost/Purchase Price:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="number"
                        className="btn btn-own"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Set stock as unlimited:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-3">
                      <label>
                        <input type="checkbox" />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Stock:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3">Supplier:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <button
                        type="button"
                        className="btn btn-own dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {action1}
                      </button>
                      <div className="dropdown-menu">
                        <label
                          class="dropdown-item"
                          onClick={() => setAction1("Pakistan (+92)")}
                        >
                          Pakistan (+92)
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction1("Nepal (+977)")}
                        >
                          Nepal (+977)
                        </label>
                        <label
                          class="dropdown-item"
                          onClick={() => setAction1("Bangladesh (+880)")}
                        >
                          Bangladesh (+880)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mb-2">
                  <div className="d-flex left mt-3" style={{ gap: "30px" }}>
                    <div
                      className="title"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Reorder Alert
                    </div>

                    <div className="btn-group ">
                      <ToggleButton />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="d-flex left" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Reorder Point:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="number"
                        className="btn btn-own"
                        placeholder="Enter Reorder Point"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 text-center">
              <button
                className="btn btn-primary mt-5 mr-5"
                style={{ width: "200px" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
