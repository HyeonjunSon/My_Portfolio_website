// client/src/pages/Projects.js
import React from 'react';
import '../App.css'; // CSS 파일을 import합니다.

function Projects() {
  const projectData = [
    {
      title: "To_do_list",
      description: "This is a description for Project 1.",
      image: "image1.jpg",
      githubLink: "https://github.com/HyeonjunSon/Side_Projects/tree/main/To_do_list",
    },
    {
      title: "Timer",
      description: "This is a description for Project 2.",
      image: "image2.jpg",
      githubLink: "https://github.com/HyeonjunSon/Side_Projects/tree/main/Timer",
    },
    {
      title: "Calculator",
      description: "This is a description for Project 3.",
      image: "image3.jpg",
      githubLink: "https://github.com/HyeonjunSon/Side_Projects/tree/main/Calculator",
    },
    {
      title: "CRUD board Website",
      description: "my first personal project. CRUD and login website",
      image: "image4.jpg",
      githubLink_Front: "https://github.com/HyeonjunSon/Board_project_front",
      githubLink_Back: "https://github.com/HyeonjunSon/Board_project_back",
    }
  ];

  return (
    <div className="projects">
      <h2>Welcome to Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`${project.title} Image`} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <button
              className="github-button"
              onClick={() => window.open(project.githubLink, "_blank")}
            >
              GitHub
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
