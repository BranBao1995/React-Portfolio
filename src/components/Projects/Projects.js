import React from "react";
import Project from "./Project";
import kkproject from "../../images/kk_project.png";
import beerMealBuddies from "../../images/beer_meal_buddies.JPG";
import shophub from "../../images/shophub.png";
import sixAuto from "../../images/6ixAuto.png";
import jate from "../../images/JATE.png";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: "project 1",
      name: "KK Cabinets & Countertops",
      image: kkproject,
      link: "https://trusting-babbage-2ec47b.netlify.app/",
      description:
        "Official webpage of KK Cabinets & Countertops built with React.js.",
    },
    {
      id: "project 2",
      name: "Beer Meal Buddies",
      image: beerMealBuddies,
      link: "https://branbao1995.github.io/Beer-Meal-Buddies/",
      description:
        "Beer Meal Buddies is where you can find the best meal pairing recommendations while enjoying your beers.",
    },
    {
      id: "project 3",
      name: "Shophub",
      image: shophub,
      link: "https://frightful-coffin-45274.herokuapp.com/api/departments",
      description:
        "Shophub is your one-stop online shopping website where you can find groceries, furnitures, electronics, and more.",
    },
    {
      id: "project 4",
      name: "6ixAuto",
      image: sixAuto,
      link: "https://the6ixauto.herokuapp.com/",
      description:
        "6ixAuto is an auto trading platform for auto enthusiasts where you can find all the latest or most classic models.",
    },

    {
      id: "project 5",
      name: "JATE Text Editor",
      image: jate,
      link: "https://fast-lowlands-58659.herokuapp.com/",
      description:
        "JATE is a downloadable online text editor which also is a Progressive Web Application.",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              image={project.image}
              link={project.link}
              description={project.description}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
