import React, { useState } from "react";
import "./SignUp.css";
import "../../App.css";
import Button from "../Button";

function ForgotPassword() {
  return (
    <>
      <body className="sign-up">
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="email" placeholder="Email" />
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="input">
              <input type="password" placeholder="Password" />
              <i className="fa-solid fa-user-lock"></i>
            </div>
            <div>
              {action === "Sign Up" ? (
                <div></div>
              ) : (
                <div className="forgot-password">
                  Forgot Password? <span>Click Here</span>
                </div>
              )}
            </div>
            <div className="submit-container">
              <div
                className={action === "Sign In" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Sign Up
              </div>
              <div
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Sign In");
                }}
              >
                Sign in
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default ForgotPassword;
