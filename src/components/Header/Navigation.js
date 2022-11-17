import React from "react";

import "./Header.css";

function Navigation(props) {
  return (
    <ul className="nav-items">
      <li
        className={
          props.activeLink === "about" ? "nav-item-active" : "nav-item"
        }
        onClick={() => props.onClickHandler("about")}
      >
        About Me
      </li>
      <li
        className={
          props.activeLink === "projects" ? "nav-item-active" : "nav-item"
        }
        onClick={() => props.onClickHandler("projects")}
      >
        Projects
      </li>
      <li
        className={
          props.activeLink === "contact" ? "nav-item-active" : "nav-item"
        }
        onClick={() => props.onClickHandler("contact")}
      >
        Contact
      </li>
      <li
        className={
          props.activeLink === "resume" ? "nav-item-active" : "nav-item"
        }
        onClick={() => props.onClickHandler("resume")}
      >
        Resume
      </li>
    </ul>
  );
}

export default Navigation;
