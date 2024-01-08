import React, { useState } from "react";
import "./SignUp.css";
import "../../App.css";

const SignUp = () => {
  const [action, setAction] = useState("Sign Up");

  const toggleAction = () => {
    setAction(action === "Sign Up" ? "Sign In" : "Sign Up");
  };

  return (
    <>
      <body className="sign-up">
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action === "Sign Up" && (
              <div className="input">
                <input type="text" placeholder="Name" />
                <i className="fa-solid fa-user"></i>
              </div>
            )}

            <div className="input">
              <input type="email" placeholder="Email" />
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="input">
              <input type="password" placeholder="Password" />
              <i className="fa-solid fa-user-lock"></i>
            </div>
            <div>
              {action === "Sign In" && (
                <div className="forgot-password">
                  Forgot Password? <span>Click Here</span>
                </div>
              )}
            </div>
            <div className="submit-container">
              <div
                className={action === "Sign In" ? "submit gray" : "submit"}
                onClick={toggleAction}
              >
                Sign Up
              </div>
              <div
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={toggleAction}
              >
                Sign In
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default SignUp;
