import React from "react";
import "../css/General.css";
import wavehand from "../assets/wavehand.gif";
import Charts from "../components/Charts";

const Dashboard = ({ open }) => {
  let timeDay = new Date().getHours();
  let timeGreet = null;
  if (timeDay < 12) {
    timeGreet = "Good Morinng";
  } else if (timeDay < 16) {
    timeGreet = "Good Afternoon";
  } else if (timeDay < 21) {
    timeGreet = "Good Evening";
  } else {
    timeGreet = "Good Night";
  }
  return (
    <div className={open ? "cont" : "cont end"}>
      <div className="d-flex align-items-center">
        <span className="text-muted h4">Welcome</span>
        <span className="h2 mx-2">Royal</span>
        <img src={wavehand} alt="" width={50} />
      </div>
      <small>{(timeDay, timeGreet)}</small>
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
        <div className="my-3">
          <p className="m-0">Monthly Revenue(Sales Period)</p>
          <small className="text-muted">Royalty(Nov 2021 - Feb 2022)</small>
        </div>
        <Charts />
      </div>
    </div>
  );
};

export default Dashboard;
