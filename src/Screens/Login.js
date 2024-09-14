import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import Animate from "../Animations/LoginAnimation.json";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const LoginUser = (e) => {
    e.preventDefault();
    localStorage.setItem("Email", Email);
    toast.success(`Welcome ${Email}`)
    navigate("/pro");
  };

  return (
    <div className="container">
      <div className=" maindiv row mt-5">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <div className="Animationdiv">
            <Lottie animationData={Animate} loop={true} />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6 mt-3">
          <h2 className="Login">Login Here</h2>
          <form>
            <div>
              <input
                type="email"
                className="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
              />
            </div>
            <div>
              <input
                type="password"
                className="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
              />
            </div>
          </form>
          <>
            <button onClick={LoginUser} className="LoginButton ">
              Login
            </button>
          </>
        </div>
        <Toaster/>
      </div>
    </div>
  );
};
