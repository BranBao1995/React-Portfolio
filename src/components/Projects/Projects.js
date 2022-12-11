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
      link: "https://branbao1995.github.io/kkproject-2/",
      repo: "https://github.com/BranBao1995/kkproject-2",
      description:
        "Official webpage of KK Cabinets & Countertops built with React.js.",
      technologies: "React.js Axios Redux Firebase",
    },
    {
      id: "project 2",
      name: "Beer Meal Buddies",
      image: beerMealBuddies,
      link: "https://branbao1995.github.io/Beer-Meal-Buddies/",
      repo: "https://github.com/BranBao1995/Beer-Meal-Buddies",
      description:
        "Beer Meal Buddies is where you can find the best meal pairing recommendations while enjoying your beers.",
      technologies: "HTML CSS Javascript Bootstrap",
    },
    {
      id: "project 3",
      name: "Shophub",
      image: shophub,
      link: "https://frightful-coffin-45274.herokuapp.com/api/departments",
      repo: "https://github.com/BranBao1995/Shophub",
      description:
        "Shophub is your one-stop online shopping website where you can find groceries, furnitures, electronics, and more.",
      technologies:
        "Handlebars.js CSS Javascript Node.js Express.js MySQL Sequelize.js",
    },
    {
      id: "project 4",
      name: "6ixAuto",
      image: sixAuto,
      link: "https://the6ixauto.herokuapp.com/",
      repo: "https://github.com/BranBao1995/6ixAuto",
      description:
        "6ixAuto is an auto trading platform for auto enthusiasts where you can find all the latest or most classic models.",
      technologies:
        "React.js Bootstrap Node.js Express.js GraphQL MongoDB Mongoose",
    },

    {
      id: "project 5",
      name: "JATE Text Editor",
      image: jate,
      link: "https://fast-lowlands-58659.herokuapp.com/",
      repo: "https://github.com/BranBao1995/PWA-Text-Editor",
      description:
        "JATE is a downloadable online text editor which also is a Progressive Web Application.",
      technologies:
        "HTML CSS Javascript Node.js Express.js Service-worker IndexedDB",
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
              repo={project.repo}
              description={project.description}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
