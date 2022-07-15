import React from "react";
import "./Header.css";
import LeftHead from "./LeftHead/LeftHead";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="Header-container">
      <div className="Titre">
        <LeftHead />
        <h1>KNANI Yosri</h1>
      </div>
      <ul className="Header-List">
        <li className="list">
          <Link to="home" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li className="list">
          <Link to="about" smooth={true} duration={1000}>
            About ME
          </Link>
        </li>
        <li className="list">
          <Link to="resume" smooth={true} duration={1000}>
            Resume
          </Link>
        </li>
        <li className="list">
          <Link to="Testimonial" smooth={true} duration={1500}>
            Testimonial
          </Link>
        </li>
        <li className="list">
          <Link to="contact" smooth={true} duration={1500}>
            Contact ME
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
