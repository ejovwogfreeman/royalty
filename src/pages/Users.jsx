import React, { useState, useEffect } from "react";
import "../css/General.css";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastifyContext } from "../context/ToastifyContext";

const Users = ({ open }) => {
  const [users, setUsers] = useState([]);
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState({});

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nickName: "",
    userType: "Artist",
  });

  const { firstName, lastName, email, nickName, userType } = form;

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
    axios
      .post(`https://api.royalti.io/user/`, form, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
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
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
      .get(`https://api.royalti.io/user/`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
          Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
        },
      })
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    const user = users.filter((x) => x.id === id);
    setDeleteId(user[0].id);
  };

  const deleteBtn = () => {
    console.log(deleteId);
    setLoading(true);
    axios.delete(`https://api.royalti.io/user/${deleteId}`, {
      headers: {
        Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
      },
    });
    setToastifyState({
      ...ToastifyState,
      message: "User Deleted successfully",
      variant: "success",
      open: true,
    });
    setLoading(false);
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className={open ? "cont" : "cont end"}>
      <div
        className="p-4 rounded"
        style={{ border: "1px solid rgba(0,0,0,0.2)" }}
      >
        <div className="d-flex align-items-center">
          <span className="h4">Users</span>
          <button
            type="button"
            className="btn p-1 ms-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ backgroundColor: "rgb(211, 231, 211)" }}
          >
            Add User
          </button>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-3">
          <ul className="top-texts text-muted m-0">
            <li>
              <span>show 10 rows</span> <IoMdArrowDropdown />
            </li>
            <li>
              <span>CSV</span> <IoMdArrowDropdown />
            </li>
            <li>
              <span>column visibility</span> <IoMdArrowDropdown />
            </li>
          </ul>
          <form action="">
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" className="ms-2" />
          </form>
        </div>
        <div className="table-responsive mt-3">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Fullname</th>
                <th>Nickname</th>
                <th>Type</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((x, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{x.fullName}</td>
                    <td>{x.TenantUser ? x.TenantUser.nickName : null}</td>
                    <td>{x.TenantUser.userType[0]}</td>
                    <td>{x.email ? x.email : null}</td>
                    <td>
                      <Link
                        to={`/edit-user/${x.id}`}
                        className="ms-1"
                        style={{ cursor: "pointer" }}
                      >
                        <BsPencilSquare />
                      </Link>
                      <span className="ms-2" style={{ cursor: "pointer" }}>
                        <BsTrash
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal3"
                          onClick={() => handleDelete(x.id)}
                        />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <span>Showing 1 to 10 of 17 entries</span>
            <ul className="bottom-texts text-muted m-0">
              <li>First</li>
              <li>Previous</li>
              <li>1</li>
              <li>2</li>
              <li>Next</li>
              <li>Last</li>
            </ul>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add User
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
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
                      className="form-select"
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
                    {loading ? "LOADING..." : "CREATE USER"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal3"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Delete User
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => deleteBtn()}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
