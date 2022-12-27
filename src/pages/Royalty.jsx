import React from "react";
import "../css/General.css";
import Charts from "../components/Charts";

const Royalty = ({ open }) => {
  return (
    <div className={open ? "cont" : "cont end"}>
      <div className="d-flex align-items-center">
        <span className="h2 mx-2">Royalty</span>
      </div>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-8">
          <select name="" id="" style={{ width: "100%" }}></select>
        </div>
        <div className="col-4">
          <select name="" id="" style={{ width: "100%" }}></select>
        </div>
      </div>
      <div className="my-3">
        <p className="m-0">Monthly Revenue(Sales Period)</p>
        <small className="text-muted">Royalty(Nov 2021 - Feb 2022)</small>
      </div>
      <div style={{ width: "100%" }}>
        <Charts />
      </div>
      <div className="row my-3" style={{ width: "100%" }}>
        <div className="col-3 p-2">
          <div className="rounded border p-2">
            <div className="row text-center">
              <div className="col">
                <p>Artists</p>
                <h3>17</h3>
              </div>
              <div className="col">
                <p>Releases</p>
                <h3>68</h3>
              </div>
              <div className="col">
                <p>Tracks</p>
                <h3>178</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 p-2">
          <div
            className="rounded border p-2 text-light"
            style={{ background: "#006666" }}
          >
            <div className="row text-center">
              <div className="col">
                <p>Downloads</p>
                <h3>1.5k</h3>
              </div>
              <div className="col">
                <p>Streams</p>
                <h3>17.5M</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 p-2">
          <div
            className="rounded border p-2 text-light"
            style={{ background: "#006666" }}
          >
            <div className="row text-center">
              <div className="col">
                <p>Total Earned</p>
                <h3>$30k</h3>
              </div>
              <div className="col">
                <p>Label Gross</p>
                <h3>$926</h3>
              </div>
              <div className="col" style={{ borderLeft: "1px solid white" }}>
                <p>Total Due</p>
                <h3>$926</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Royalty;
