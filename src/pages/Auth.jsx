import React from "react";
import Form from "../components/Form";
import Nav from "../components/Nav";

const Auth = () => {
  return (
    <div style={{ backgroundColor: "#ECEFF1" }}>
      <Nav />
      <div className="container">
        <div
          className="card"
          style={{ width: "100%", marginTop: "50px", marginBottom: "20px" }}
        >
          <div className="card-body">
            <h5 className="card-title">Portal Account</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Your use of this portals means you accept the{" "}
              <span style={{ color: "red" }}>Terms & Conditions</span>. To
              continue, please use the form below to create your account or log
              in if you already have a Portal Account.
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div
              className="card"
              style={{ width: "100%", marginTop: "50px", marginBottom: "20px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Login</h5>
                <h6 className="card-body mb-2 text-muted">
                  Log in here if you already have a Portal Account
                </h6>
              </div>
            </div>
          </div>
          <div className="col-8">
          <div
              className="card"
              style={{ width: "100%", marginTop: "50px", marginBottom: "20px" }}
            >
              <div className="card-body">
                <h5 className="card-title">New Portal User</h5>
                <h6 className="card-body mb-2 text-muted"><span class="text-primary" style={{fontWeight:"bolder"}}>PLEASE NOTE:</span> All <span style={{color:"red"}}>*</span> fields are required.</h6>
                <hr
                style={{ height:"2px", color:"black" }}
                />
                <Form/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Auth;
