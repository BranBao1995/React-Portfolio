import React from "react";
import { saveAs } from "file-saver";
import { FaCheck } from "react-icons/fa";
import resume from "../../MyResume_WebDev.docx";
import "./Resume.css";

function Resume() {
  const proficiencies = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MySQL",
    "Sequalize.js",
    "MongoDB",
    "Mongoose",
    "PWA Development",
    "MERN Stack App Development",
    "GraphQL",
  ];

  const downloadResume = () => {
    saveAs(resume, "resume.docx");
  };

  return (
    <div className="resume">
      <h1 className="resume-title" onClick={downloadResume}>
        Download My Resume
      </h1>
      <div className="proficiencies">
        <h2 className="proficiencies-title">My Skillset</h2>
        <ul className="proficiencies-list">
          {proficiencies.map((proficiency) => {
            return (
              <li className="proficiencies-list-item">
                <FaCheck />
                <span className="proficiencies-list-item-name">
                  {proficiency}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
