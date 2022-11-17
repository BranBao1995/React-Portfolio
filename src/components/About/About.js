import React from "react";
import "./About.css";
import Avatar from "../../images/me.jpg";

function About() {
  return (
    <section className="about">
      <div className="avatar">
        <img className="avatar-image" src={Avatar} alt="developer avatar"></img>
      </div>
      <div className="bio">
        <p className="bio-text">
          Junior Front End Developer with solid knowledge on core web front-end
          technologies such as JavaScript, HTML5, and CSS3. As well as extensive
          knowledge on front-end based libraries such as ReactJS, JQuery, and
          Bootstrap to optimize development speed to meet specific requirements.
        </p>
      </div>
    </section>
  );
}

export default About;
