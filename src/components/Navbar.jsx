import React, { useState } from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.ico";
import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

const Navbar = ({ handleOpen }) => {
  return (
    <nav className="d-flex bg-light shadow-sm align-items-center ">
      <div className="icon">
        <FiMenu onClick={handleOpen} />
      </div>
      <span className="d-flex align-items-center ms-2">
        <img src={logo} alt="" style={{ width: "20px" }} />
        <h5 className="ms-2 mt-2" style={{ fontSize: "17px" }}>
          Royalty.io
        </h5>
      </span>
      <form className="rounded d-flex align-items-center px-3">
        <input type="text" placeholder="Search" />
        <BsSearch />
      </form>
    </nav>
  );
};

export default Navbar;
