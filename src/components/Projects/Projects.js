import React from "react";
import Project from "./Project";
import horisen from "../../images/Horisen.JPG";
import kkproject from "../../images/kk_project.png";
import beerMealBuddies from "../../images/beer_meal_buddies.JPG";
import shophub from "../../images/shophub.png";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: "project 1",
      name: "Horisen",
      image: horisen,
      link: "https://branbao1995.github.io/Bootcamp-Module-1-Challenge/",
    },
    {
      id: "project 2",
      name: "KK Cabinets & Countertops",
      image: kkproject,
      link: "https://trusting-babbage-2ec47b.netlify.app/",
    },
    {
      id: "project 3",
      name: "Beer Meal Buddies",
      image: beerMealBuddies,
      link: "https://branbao1995.github.io/Beer-Meal-Buddies/",
    },
    {
      id: "project 4",
      name: "Shophub",
      image: shophub,
      link: "https://frightful-coffin-45274.herokuapp.com/api/departments",
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
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
