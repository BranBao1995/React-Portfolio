import React from "react";
import "./About.css";
import Avatar from "../../images/me.jpg";
import { FaCheck } from "react-icons/fa";
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
              Full Stack Web Development Coding Certificate - University of
              Toronto School of Continuing Studies
            </span>
          </li>
          <li className="education-item">
            <img className="school-logo" src={UOlogo} alt="school logo"></img>
            <span className="school-certificate">
              Bachelor of Electrical Engineering - University of Ottawa
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
        <h2 className="soft-skills-intro">
          Soft skills that made me stand out:
        </h2>
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
            Project managements with Agile Methodology.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
