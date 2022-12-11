import React from "react";
import "./About.css";
import Avatar from "../../images/me.jpg";
import { FaCheck } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiApollographql } from "react-icons/si";
import { SiPwa } from "react-icons/si";
import mongoose from "../../images/mongoose-rmbg.png";
import pwa from "../../images/pwa-rmbg.png";
import mern from "../../images/mern-rmbg.png";
import UTlogo from "../../images/UofT_SCS.jpg";
import UOlogo from "../../images/UofO.png";

function About() {
  return (
    <section className="about">
      <div className="avatar-education">
        <div className="avatar">
          <img
            className="avatar-image"
            src={Avatar}
            alt="developer avatar"
          ></img>
        </div>
        <ul className="education">
          <li className="education-item">
            <img className="school-logo" src={UTlogo} alt="school logo"></img>
            <span className="school-certificate">
              Full Stack Web Development Coding Certificate
            </span>
          </li>
          <li className="education-item">
            <img className="school-logo" src={UOlogo} alt="school logo"></img>
            <span className="school-certificate">
              Bachelor of Electrical Engineering
            </span>
          </li>
        </ul>
      </div>

      <div className="bio">
        <p className="bio-text">
          Hi, I am a Full Stack Web Developer with a solid and evolving
          skillset. I am great at many things, such as building RESTful APIs
          with Node.js and Express.js, working with SQL or NoSQL databases,
          working with GraphQL, making visually appealing web page designs with
          CSS, implementing user interactivity with JavaScript, and many more.
        </p>
        <h2 className="skills-intro">Technologies</h2>
        <ul className="technologies">
          <li className="technology">
            <FaHtml5 className="technology-logo" />
            <p className="technology-name">HTML</p>
          </li>
          <li className="technology">
            <FaCss3 className="technology-logo" />
            <p className="technology-name">CSS</p>
          </li>
          <li className="technology">
            <SiJavascript className="technology-logo" />
            <p className="technology-name">JavaScript</p>
          </li>
          <li className="technology">
            <SiBootstrap className="technology-logo" />
            <p className="technology-name">Bootstrap</p>
          </li>
          <li className="technology">
            <FaReact className="technology-logo" />
            <p className="technology-name">React.js</p>
          </li>
          <li className="technology">
            <SiRedux className="technology-logo" />
            <p className="technology-name">Redux</p>
          </li>
          <li className="technology">
            <FaNodeJs className="technology-logo" />
            <p className="technology-name">Node.js</p>
          </li>

          <li className="technology">
            <SiExpress className="technology-logo" />
            <p className="technology-name">Express.js</p>
          </li>
          <li className="technology">
            <SiMysql className="technology-logo" />
            <p className="technology-name">MySQL</p>
          </li>
          <li className="technology">
            <SiSequelize className="technology-logo" />
            <p className="technology-name">Sequelize.js</p>
          </li>
          <li className="technology">
            <SiMongodb className="technology-logo" />
            <p className="technology-name">MongoDB</p>
          </li>

          <li className="technology">
            <SiGraphql className="technology-logo" />
            <p className="technology-name">GraphQL</p>
          </li>
          <li className="technology">
            <SiApollographql className="technology-logo" />
            <p className="technology-name">Apollo GraphQL</p>
          </li>
          <li className="technology">
            <SiPwa className="technology-logo" />
            <p className="technology-name">Progressive Web Application</p>
          </li>
          <li className="technology">
            <img
              className="technology-image-mongoose"
              src={mongoose}
              alt="mongoose"
            ></img>
            <p className="technology-name">Mongoose</p>
          </li>
          <li className="technology">
            <img className="technology-image" src={mern} alt="mern"></img>
            <p className="technology-name">MERN Stack</p>
          </li>
        </ul>
        <h2 className="skills-intro">Soft skills that made me stand out:</h2>
        <ul className="soft-skills">
          <li className="soft-skills-item">
            <FaCheck />I am a team player who thrives in a team-based
            environment.
          </li>
          <li className="soft-skills-item">
            <FaCheck />I have great development organization and task delegating
            skills.
          </li>
          <li className="soft-skills-item">
            <FaCheck />
            Project management with Agile Methodology.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
