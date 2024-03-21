import React, { useState } from "react";
import "./SignUp.css";
import "../../App.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("./sign-in", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/");
      }
    } catch (error) {}
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
