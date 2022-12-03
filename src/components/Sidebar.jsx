import React from "react";
import "../css/Sidebar.css";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { FaUserCircle, FaMusic } from "react-icons/fa";

const Sidebar = ({ open }) => {
  return (
    <div className={open ? "side-bar" : "side-bar hide"}>
      <ul className="list-group rounded-0">
        <li className="list-group-item p-2 bg-transparent border-0">
          <small className="d-flex px-3 p-2 m-0 text-muted">SUPER ADMIN</small>
        </li>
        <li className="list-group-item p-0 bg-transparent border-0">
          <Link className="d-flex px-3 p-2 align-items-center">
            <AiOutlineDashboard /> <span className="ms-2">Dashboard</span>
          </Link>
        </li>
        <li className="list-group-item p-2 bg-transparent border-0">
          <small className="d-flex px-3 p-2 m-0 text-muted">ROSTER</small>
        </li>
        <li className="list-group-item p-0 bg-transparent border-0">
          <Link className="d-flex px-3 p-2 align-items-center">
            <BsBuilding /> <span className="ms-2">Tenants</span>
          </Link>
        </li>
        <li className="list-group-item p-0 bg-transparent border-0">
          <Link className="d-flex px-3 p-2 align-items-center">
            <FaUserCircle /> <span className="ms-2">Users</span>
          </Link>
        </li>
        <li className="list-group-item p-0 bg-transparent border-0">
          <Link className="d-flex px-3 p-2 align-items-center">
            <FaMusic /> <span className="ms-2">Artists</span>
          </Link>
        </li>
        <li className="list-group-item p-2 bg-transparent border-0">
          <small className="d-flex px-3 p-2 m-0 text-muted">CATALOG</small>
        </li>
        <li className="list-group-item p-0 bg-transparent border-0">
          <Link className="d-flex px-3 p-2 align-items-center">
            <BsBuilding /> <span className="ms-2">Assets</span>
          </Link>
        </li>
        <li className="list-group-item p-0 bg-transparent border-0">
          <Link className="d-flex px-3 p-2 align-items-center">
            <FaUserCircle /> <span className="ms-2">Products</span>
          </Link>
        </li>
        <li className="list-group-item p-0 bg-transparent border-0">
          <Link className="d-flex px-3 p-2 align-items-center">
            <FaMusic /> <span className="ms-2">Splits</span>
          </Link>
        </li>
        <li className="list-group-item p-2 bg-transparent border-0">
          <small className="d-flex px-3 p-2 m-0 text-muted">MORE</small>
        </li>
        <li className="list-group-item p-0 bg-transparent border-0">
          <Link className="d-flex px-3 p-2 align-items-center">
            <BsBuilding /> <span className="ms-2">Filess</span>
          </Link>
        </li>
        <li className="list-group-item p-0 bg-transparent border-0">
          <Link className="d-flex px-3 p-2 align-items-center">
            <FaUserCircle /> <span className="ms-2">Accounting</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
