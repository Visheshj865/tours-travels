import React from "react";
import { Link } from "react-router-dom";
// import "./Login.css";
import logo from "../assets/1.jpg";
import img4 from "../assets/4.jpg";

function Loginform() {
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
                    <h5 className="mb-4 text-uppercase">Login</h5>

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
                        type="text"
                        id="form3Example97"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example97">
                        Password
                      </label>
                    </div>
                    <div className="d-flex justify-content">
                      <button type="button" className="btn btn-success">
                        Login
                      </button>
                    </div>
                    <div className="d-flex justify-content mt-4 logintext">
                      <p>
                        Already a Member ? <Link to="/signup">Login</Link>
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

export default Loginform;
