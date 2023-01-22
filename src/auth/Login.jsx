import React, { useState } from "react";
import logo from "../assets/logo.ico";
import "../css/General.css";
import "../css/Login.css";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { ToastifyContext } from "../context/ToastifyContext";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState(true);

  const handlePasswordType = () => {
    setPasswordType(!passwordType);
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setLoading(true);
    axios
      .post(`https://api.royalti.io/api/auth/login`, form, {
        headers: {
          Accept: "application/json",
          //   Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
        },
      })
      .then((res) => {
        console.log(res);
        setToastifyState({
          ...ToastifyState,
          message: "User Created Successfully",
          variant: "success",
          open: true,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "Something went wrong",
          variant: "error",
          open: true,
        });
        setLoading(false);
      });
  };

  return (
    <div className="fullScreen">
      <div className="form-cont m-3">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="my-3 text-center">
            <img src={logo} alt="" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              value={email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                name="password"
                value={password}
                type={passwordType ? "password" : "text"}
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange}
              />
              <span
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "20px",
                  position: "absolute",
                  top: "23%",
                  right: "10px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
                onClick={() => handlePasswordType()}
              >
                {passwordType ? <ImEye /> : <ImEyeBlocked />}
              </span>
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="btn"
            style={{
              background: "rgb(0, 102, 102)",
              color: "white",
            }}
            disabled={loading}
          >
            {loading ? "LOADING..." : "LOG IN"}
          </button>
        </form>
        <small className="mt-3 text-center d-flex align-items-center justify-content-between">
          <a href="">Lost Your Password?</a>
          <span>
            New here? <Link to="/register">Register</Link>
          </span>
        </small>
      </div>
    </div>
  );
};

export default Login;
