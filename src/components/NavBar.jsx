import "./navbar.scss";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div
          className={dropDown ? "hamburger active" : "hamburger"}
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
        <ul className="links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={dropDown ? "dropdown active" : "dropdown inactive"}>
        <ul className="dropdown-links">
          <li className="dropdown-link-1">
            <a
              className="link"
              href="#about"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              About
            </a>
          </li>
          <li className="dropdown-link-2">
            <a
              className="link"
              href="#skills"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              Skills
            </a>
          </li>
          <li className="dropdown-link-3">
            <a
              className="link"
              href="#projects"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              Projects
            </a>
          </li>
          <li className="dropdown-link-4">
            <a className="link" href="#about">
              <a
                className="link"
                href="#about"
                onClick={() => {
                  setDropDown(!dropDown);
                }}
              >
                Resume
              </a>
            </a>
          </li>
          <li className="dropdown-link-5">
            <a
              className="link"
              href="#contact"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
