import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Signupimage from "../assets/Banner-products/Signup.jpg";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  const divStyle = {
    backgroundImage: `url(${Signupimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={divStyle}>
      <div className="d-flex justify-content-center align-items-center vh-200">
        <div className=" bg-slate-300 p-10 rounded w-200 shadow-2xl">
          <h2>Register</h2>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  autoComplete="off"
                  name="email"
                  className="form-control rounded-0"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  className="form-control rounded-0"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="off"
                  name="password"
                  className="form-control rounded-0"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-0">
                Register
              </button>
            </form>
            <p>Already Have an account</p>
            <Link
              to="/login"
              className="btn btn-default  border w-100 bg-light  rounded-0 "
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
