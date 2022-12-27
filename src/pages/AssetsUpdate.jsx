import React from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import "../css/General.css";

const AssetsUpdate = ({ open }) => {
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
                Edit Assets
              </h1>
              <Link to="/assets">
                <GrClose />
              </Link>
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
                <input type="date" className="form-control" id="apartment" />
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
              <button
                type="submit"
                className="btn"
                style={{ background: "#006666", color: "white" }}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsUpdate;
