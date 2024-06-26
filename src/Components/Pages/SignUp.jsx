import React, { useState } from "react";
import "./SignUp.css";
import "../../App.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUpUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    try {
      const response = await axios.post("/sign-up", {
        name,
        email,
        password,
      });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({
          ...data,
          name: "",
          email: "",
          password: "",
        });
        toast.success("Sign up successful");
        navigate("/sign-in");
      }
    } catch (error) {
      console.error("Error occurred during sign up:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="sign-up">
        <div className="container">
          <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
          </div>
          <form onSubmit={signUpUser}>
            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  placeholder="Name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="input">
                <input
                  type="email"
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <i className="fa-solid fa-user-lock"></i>
              </div>
            </div>
            <div>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
