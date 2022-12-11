import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <ul className="footer-nav-items">
        <li
          className={
            props.activeLink === "about"
              ? "footer-nav-item-active"
              : "footer-nav-item"
          }
          onClick={() => props.onClickHandler("about")}
        >
          About Me
        </li>
        <li
          className={
            props.activeLink === "projects"
              ? "footer-nav-item-active"
              : "footer-nav-item"
          }
          onClick={() => props.onClickHandler("projects")}
        >
          Projects
        </li>
        <li
          className={
            props.activeLink === "contact"
              ? "footer-nav-item-active"
              : "footer-nav-item"
          }
          onClick={() => props.onClickHandler("contact")}
        >
          Contact
        </li>
        <li
          className={
            props.activeLink === "resume"
              ? "footer-nav-item-active"
              : "footer-nav-item"
          }
          onClick={() => props.onClickHandler("resume")}
        >
          Resume
        </li>
      </ul>
      <div className="icon-container">
        <a className="footer-link" href="https://github.com/BranBao1995">
          <FaGithub />
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/hongdong-brandon-bao/"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
