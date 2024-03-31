import React, { useState, useContext } from "react";
import "./SignUp.css";
import "../../App.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../../../context/userContext";

const SignIn = () => {
  const { setUser } = useContext(UserContext); // Get setUser from UserContext

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data: responseData } = await axios.post("./sign-in", {
        email,
        password,
      });
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setUser(responseData.user);
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <>
      <div className="sign-up">
        <div className="container">
          <div className="header">
            <div className="text">Sign in</div>
            <div className="underline"></div>
          </div>
          <form onSubmit={loginUser}>
            <div className="inputs">
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

export default SignIn;
