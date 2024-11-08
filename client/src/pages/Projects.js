// client/src/pages/Projects.js
import React, { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/projects`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2>My GitHub Projects</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;
