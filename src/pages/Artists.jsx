import React from "react";
import "../css/General.css";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const Artist = ({ open }) => {
  return (
    <div className={open ? "cont" : "cont end"}>
      <div
        className="p-4 rounded"
        style={{ border: "1px solid rgba(0,0,0,0.2)" }}
      >
        <div className="d-flex align-items-center">
          <span className="h4">Artists</span>
          <button
            type="button"
            className="btn p-1 ms-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ backgroundColor: "rgb(211, 231, 211)" }}
          >
            Add Artist
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
                <th>Artist Name</th>
                <th>Users</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark Powells</td>
                <td>mark</td>
                <td>
                  <span className="ms-1" style={{ cursor: "pointer" }}>
                    <BsPencilSquare
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                  <span className="ms-2" style={{ cursor: "pointer" }}>
                    <BsTrash
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>John Doe</td>
                <td>john</td>
                <td>
                  <span className="ms-1" style={{ cursor: "pointer" }}>
                    <BsPencilSquare
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                  <span className="ms-2" style={{ cursor: "pointer" }}>
                    <BsTrash
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mary Sally</td>
                <td>mary</td>
                <td>
                  <span className="ms-1" style={{ cursor: "pointer" }}>
                    <BsPencilSquare
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                  <span className="ms-2" style={{ cursor: "pointer" }}>
                    <BsTrash
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Morgan Freeman</td>
                <td>morgan</td>
                <td>
                  <span className="ms-1" style={{ cursor: "pointer" }}>
                    <BsPencilSquare
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                  <span className="ms-2" style={{ cursor: "pointer" }}>
                    <BsTrash
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Frank Smith</td>
                <td>frank</td>
                <td>
                  <span className="ms-1" style={{ cursor: "pointer" }}>
                    <BsPencilSquare
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                  <span className="ms-2" style={{ cursor: "pointer" }}>
                    <BsTrash
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Powells Mark</td>
                <td>powells</td>
                <td>
                  <span className="ms-1" style={{ cursor: "pointer" }}>
                    <BsPencilSquare
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                  <span className="ms-2" style={{ cursor: "pointer" }}>
                    <BsTrash
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Doe John</td>
                <td>Doe</td>
                <td>
                  <span className="ms-1" style={{ cursor: "pointer" }}>
                    <BsPencilSquare
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                  <span className="ms-2" style={{ cursor: "pointer" }}>
                    <BsTrash
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Sally Mary</td>
                <td>sally</td>
                <td>
                  <span className="ms-1" style={{ cursor: "pointer" }}>
                    <BsPencilSquare
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                  <span className="ms-2" style={{ cursor: "pointer" }}>
                    <BsTrash
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Freeman Morgan</td>
                <td>freeman</td>
                <td>
                  <span className="ms-1" style={{ cursor: "pointer" }}>
                    <BsPencilSquare
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                  <span className="ms-2" style={{ cursor: "pointer" }}>
                    <BsTrash
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Smith Frank</td>
                <td>smith</td>
                <td>
                  <span className="ms-1" style={{ cursor: "pointer" }}>
                    <BsPencilSquare
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                  <span className="ms-2" style={{ cursor: "pointer" }}>
                    <BsTrash
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </td>
              </tr>
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
                    Add Artist
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form className="p-3">
                  <div className="mb-3">
                    <label htmlFor="artist-name" className="form-label">
                      Artist Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="artist-name"
                      aria-describedby="emailHelp"
                      placeholder="Enter Artist Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user" className="form-label">
                      User
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      id="user"
                    >
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="apartment" className="form-label">
                      Sign Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="apartment"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="artist-split" className="form-label">
                      Artist Split
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="number"
                        id="artist-split"
                        class="form-control"
                        placeholder="Enter artist % spit"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span class="input-group-text" id="basic-addon2">
                        %
                      </span>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Edit Artist
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form className="p-3">
                  <div className="mb-3">
                    <label htmlFor="artist-name" className="form-label">
                      Artist Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="artist-name"
                      aria-describedby="emailHelp"
                      placeholder="Enter Artist Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user" className="form-label">
                      User
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      id="user"
                    >
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="apartment" className="form-label">
                      Sign Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="apartment"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="artist-split" className="form-label">
                      Artist Split
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="number"
                        id="artist-split"
                        class="form-control"
                        placeholder="Enter artist % spit"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span class="input-group-text" id="basic-addon2">
                        %
                      </span>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModal3"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Delete Artist
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">Are you sure you want to delete?</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    Save changes
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

export default Artist;
