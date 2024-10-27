import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ProjectModule from '../../components/ProjectModule';

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



    /*
    let projects = [
        {
            "title": "CTRL ALT TOWER",
            "module": "03.007 - Design Thinking and Innovation",
            "tools": ["LLM", "Python"],
            "description": "Help me this was bad"
        },
        
        {
            "title": "Hotel Booking Web App",
            "module": "50.003 - Elements of Software Construction",
            "tools": ["React JS", "Express JS", "MongoDB"],
            "description": "Lorem Ipsum"
        },
    
        {
            "title": "Test",
            "module": "Test",
            "tools": ["Test"],
            "description": "Test"
        }
    ];
    */

    if (!projects) {
        return <Container>Loading...</Container>;
    }

    return (
        <Container>
            {projects.map((project) => (
                <ProjectModule props={project} />
            ))}
        </Container>
    )
}

export default Projects;