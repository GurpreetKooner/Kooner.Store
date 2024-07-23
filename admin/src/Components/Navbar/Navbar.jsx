import React from "react";
import "./Navbar.css";
import profileIcon from "../../assets/profile_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="nav-logo" href="#">
        Kooner.store
      </a>
      <img className="nav-profile" src={profileIcon} />
    </div>
  );
};

export default Navbar;
