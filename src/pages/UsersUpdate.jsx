import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import "../css/General.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastifyContext } from "../context/ToastifyContext";

const UsersUpdate = ({ open }) => {
  const [user, setUser] = useState({});
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nickName: "",
    userType: "",
  });

  const { firstName, lastName, email, nickName, userType } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .put(`https://api.royalti.io/user/${params.id}`, form, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
        },
      })
      .then((res) => {
        console.log(res);
        setToastifyState({
          ...ToastifyState,
          message: "User Updated Successfully",
          variant: "success",
          open: true,
        });
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "Please fill all Field",
          variant: "error",
          open: true,
        });
        window.location.reload();
        setLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get(`https://api.royalti.io/user/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
          Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
        },
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
        console.log(res.data.TenantUser.nickName);
        console.log(user);
        setForm({
          firstName: res ? res.data.firstName : "",
          lastName: res ? res.data.lastName : "",
          email: res ? res.data.email : "",
          nickName: res ? res.data.TenantUser.nickName : "",
          userType: res ? res.data.TenantUser.userType[0] : "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <div className={open ? "cont" : "cont end"}>
      <div
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{
          width: "500px",
          margin: "auto",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "10px",
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header pt-3 px-3">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit User
              </h1>
              <Link to="/users">
                <GrClose />
              </Link>
            </div>
            <form className="p-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="artist-name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  id="artist-name"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="artist-name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  id="artist-name"
                  aria-describedby="emailHelp"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="artist-name" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  id="artist-name"
                  aria-describedby="emailHelp"
                  placeholder="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="artist-name" className="form-label">
                  Nick Name
                </label>
                <input
                  type="text"
                  name="nickName"
                  value={nickName}
                  className="form-control"
                  id="artist-name"
                  aria-describedby="emailHelp"
                  placeholder="Nick Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="user" className="form-label">
                  User Type
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="user"
                  name="userType"
                  value={userType}
                  onChange={handleChange}
                  required
                >
                  <option value="Artist">Artist</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                </select>
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
                {loading ? "LOADING..." : "UPDATE USER"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersUpdate;
