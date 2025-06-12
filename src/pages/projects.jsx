import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("https://my-website-api-c80g.onrender.com/projects")
            .then(res => setProjects(res.data))
            .catch(err => console.error("Failed to fetch projects:", err));
    }, []);

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Have a look here
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;
