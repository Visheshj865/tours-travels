import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import img4 from "../assets/4.jpg";
function Signupform() {
  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row h-100" style={{ height: "50vh" }}>
          <div className="col">
            <div className="card card-registration">
              <div className="row">
                <div className="col-xl-6 d-none d-xl-block">
                  <img src={img4} />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-4 text-uppercase">Trippy</h3>
                    <h5 className="mb-4 text-uppercase">Registration</h5>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1m"
                          >
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1n"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n"
                          >
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example8"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example8">
                        Email Id
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example97"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example97">
                        Password
                      </label>
                    </div>
                    <div className="d-flex justify-content">
                      <button type="button" className="btn btn-success">
                        Sign Up
                      </button>
                    </div>
                    <div className="d-flex justify-content mt-4 logintext">
                      <p>
                        Already a Member ? <Link to="/login">Login</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signupform;
