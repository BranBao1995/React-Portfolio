import React, { useState } from "react";
import { saveAs } from "file-saver";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaDownload } from "react-icons/fa";
import resume from "../../MyResume_WebDev.docx";
import resume_page_1 from "../../images/page_1.JPG";
import resume_page_2 from "../../images/page_2.JPG";
import resume_page_3 from "../../images/page_3.JPG";
import "./Resume.css";

function Resume() {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const downloadResume = () => {
    saveAs(resume, "resume.docx");
  };

  const backdropHandler = () => {
    setShowBackdrop((prevState) => !prevState);
  };

  let backdrop = (
    <div className="resume-backdrop" onClick={backdropHandler}>
      <img
        className="resume-backdrop-image"
        src={resume_page_1}
        alt="resume backdrop page 1"
      ></img>
      <img
        className="resume-backdrop-image"
        src={resume_page_2}
        alt="resume backdrop page 1"
      ></img>
      <img
        className="resume-backdrop-image"
        src={resume_page_3}
        alt="resume backdrop page 1"
      ></img>
    </div>
  );

  return (
    <div className="resume">
      <div className="resume-container">
        <div className="resume-image-container">
          <img
            className="resume-image"
            src={resume_page_1}
            alt="resume page 1"
            onClick={backdropHandler}
          ></img>
        </div>

        <div className="resume-buttons">
          <div className="resume-button" onClick={backdropHandler}>
            <GiMagnifyingGlass />
            <p className="resume-button-description">View Resume</p>
          </div>
          <div className="resume-button" onClick={downloadResume}>
            <FaDownload />
            <p className="resume-button-description">Download Resume</p>
          </div>
        </div>
      </div>
      {showBackdrop ? backdrop : ""}
    </div>
  );
}

export default Resume;
