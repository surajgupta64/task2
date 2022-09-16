import { useState } from "react";
import Navbar from "../../Layout/Navbar";

const LogoMaster = () => {
  const [image, setImage] = useState();
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10 " style={{ marginBottom: "20px" }}>
          <div className="text-center" style={{ gap: "30px" }}>
            <h4 style={{ fontWeight: "bold" }}>Logo Master</h4>
          </div>
          <div className="row mt-5">
            <div className="col-lg-1 "></div>
            <div className="col-lg-2 ">
              <img className="mt-3 ml-5" src={image} alt="Company logo" />
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-flex right" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Upload Logo:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
                      <input
                        type="file"
                        className="btn btn-own"
                        placeholder="Enter Name"
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 mt-2">
              <button className="btn btn-primary" style={{ width: "150px" }}>
                Upload Image
              </button>
            </div>

            <div className="col-lg-2 mt-2">
              <button className="btn btn-primary" style={{ width: "150px" }}>
                Change Image
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="dbox-10 ">
        <div className="d-flex justify-content-between">
          <div className="d-flex" style={{ gap: "30px" }}>
            <form onSubmit={handleSubmit}>
              <h1>Register</h1>
              <div className="row">
                <div className="col-lg-6">
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                </div>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default LogoMaster;
