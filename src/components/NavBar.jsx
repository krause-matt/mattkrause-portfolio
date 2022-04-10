import "./navbar.scss";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div
          className="hamburger"
          onClick={() => {
            setDropDown(!dropDown);
            console.log("dropDown", dropDown);
          }}
        >
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
        <ul className="links">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#about">resume</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div className={dropDown ? "dropdown active" : "dropdown inactive"}>
        <ul className="dropdown-links">
          <li className="dropdown-link-1">
            <a href="#about">About</a>
          </li>
          <li className="dropdown-link-2">Skills</li>
          <li className="dropdown-link-3">Projects</li>
          <li className="dropdown-link-4">Resume</li>
          <li className="dropdown-link-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}
