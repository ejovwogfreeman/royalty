import React, { useState } from "react";
import logo from "../assets/logo.ico";
import "../css/General.css";
import "../css/Login.css";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { ToastifyContext } from "../context/ToastifyContext";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState(true);
  const [passwordType2, setPasswordType2] = useState(true);

  const handlePasswordType = () => {
    setPasswordType(!passwordType);
  };
  const handlePasswordType2 = () => {
    setPasswordType2(!passwordType2);
  };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    role: "admin",
    email: "",
    password: "",
  });
  const [password2, setPassword2] = useState("");

  const { firstName, lastName, phone, role, email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(form);
    // if (password.length !== 8) {
    //   setToastifyState({
    //     ...ToastifyState,
    //     message: "Password must be at least eight(8) characters long",
    //     variant: "error",
    //     open: true,
    //   });
    //   setLoading(false);
    //   return;
    // }
    // if (password != password2) {
    //   setToastifyState({
    //     ...ToastifyState,
    //     message: "Passowords do not match",
    //     variant: "error",
    //     open: true,
    //   });
    //   setLoading(false);
    //   return;
    // }
    console.log(form);
    axios
      .post(`https://api.royalti.io/api/register`, form, {
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
          <span className="d-flex">
            <div className="mb-3 mx-1" style={{ flex: "1" }}>
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                name="firstName"
                value={firstName}
                type="text"
                className="form-control"
                id="firstName"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 mx-1" style={{ flex: "1" }}>
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                name="lastName"
                value={lastName}
                type="text"
                className="form-control"
                id="lastName"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
          </span>
          <span className="d-flex">
            <div className="mb-3 mx-1" style={{ flex: "1" }}>
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                name="phone"
                value={phone}
                type="text"
                className="form-control"
                id="phone"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 mx-1" style={{ flex: "1" }}>
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                name="role"
                value={role}
                className="form-control"
                id="role"
                onChange={handleChange}
              >
                <option value="admin">Admin</option>
                <option value="main_admin">Main Admin</option>
                <option value="super_admin">Super Admin</option>
                <option value="main_super_admin">Main Super Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </span>
          <div className="mb-3 mx-1" style={{ flex: "1" }}>
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
          <span className="d-flex">
            <div className="mb-3 mx-1" style={{ flex: "1" }}>
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
            <div className="mb-3 mx-1" style={{ flex: "1" }}>
              <label htmlFor="exampleInputPassword2" className="form-label">
                Confirm Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  value={password2}
                  type={passwordType ? "password" : "text"}
                  className="form-control"
                  id="exampleInputPassword2"
                  onChange={(e) => setPassword2(e.target.value)}
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
                  onClick={() => handlePasswordType2()}
                >
                  {passwordType2 ? <ImEye /> : <ImEyeBlocked />}
                </span>
              </div>
            </div>
          </span>
          <div className="mb-3 mx-1 form-check">
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
            {loading ? "LOADING..." : "REGISTER"}
          </button>
        </form>
        <small className="mt-3 text-center d-block">
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </div>
    </div>
  );
};

export default Register;
