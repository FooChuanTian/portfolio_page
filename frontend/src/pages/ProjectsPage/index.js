import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ProjectModule from '../../components/ProjectModule';
import "./style.css";

function Projects() {
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        async function fetchProjects() {
            let response = await fetch('./txt_information/projects-desc-en.json');
            response = await response.json();
            console.log(response);
            setProjects(response);
        }
        fetchProjects();
    }, []);


    if (!projects) {
        return <Container>Loading...</Container>;
    }

    return (
        <Container>
            <h1>Projects</h1>
            <br />
            {projects.map((project) => (
                <ProjectModule props={project} />
            ))}
        </Container>
    )
}

export default Projects;