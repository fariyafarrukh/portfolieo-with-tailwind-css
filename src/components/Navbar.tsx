import React from 'react';
import { CiMenuKebab } from "react-icons/ci";
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-brand">Fariya Farrukh</div>
        <ul className="navbar-menu">
          <li className="menu-link"><a href="#hero">Home</a></li>
          <li className="menu-link"><a href="#about">About</a></li>
          <li className="menu-link"><a href="#project">Project</a></li>
          <li className="menu-link"><a href="#skills">Skills</a></li>
          <li className="menu-link"><a href="#contact">Contact</a></li>
        </ul>
        <CiMenuKebab className="menu-icon" size={35} />
      </div>
    </div>
  );
};

export default Navbar;

