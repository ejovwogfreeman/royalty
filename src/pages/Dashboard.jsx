import React from "react";
import "../css/Dashboard.css";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

const Dashboard = ({ open }) => {
  return (
    <div className={open ? "cont" : "cont end"}>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Tenant
      </button>

      <div class="table-responsive mt-3 me-3">
        <table className="table">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">Tenant UID</th>
              <th scope="col">Tenant Name</th>
              <th scope="col">Tenant Email</th>
              <th scope="col">Created At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark Powells</td>
              <td>mark@gmail.com</td>
              <td>12/2/2022</td>
              <td>
                <span className="ms-1" style={{ cursor: "pointer" }}>
                  <BsPencilSquare />
                </span>
                <span className="ms-2" style={{ cursor: "pointer" }}>
                  <BsTrash />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>John Doe</td>
              <td>john@gmail.com</td>
              <td>12/2/2022</td>
              <td>
                <span className="ms-1" style={{ cursor: "pointer" }}>
                  <BsPencilSquare />
                </span>
                <span className="ms-2" style={{ cursor: "pointer" }}>
                  <BsTrash />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mary Sally</td>
              <td>mary@gmail.com</td>
              <td>12/2/2022</td>
              <td>
                <span className="ms-1" style={{ cursor: "pointer" }}>
                  <BsPencilSquare />
                </span>
                <span className="ms-2" style={{ cursor: "pointer" }}>
                  <BsTrash />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Tenants
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form className="p-3">
                <div className="row">
                  <div class="mb-3 col">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div class="mb-3 col">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="street" class="form-label">
                    Street
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="street"
                    placeholder="123 Main St."
                  />
                </div>
                <div class="mb-3">
                  <label for="apartment" class="form-label">
                    Apartment
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="apartment"
                    placeholder="Apartment, floor etc..."
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
