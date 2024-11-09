import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaLinkedin, FaGithub, FaBook } from "react-icons/fa"

function AboutMe(){
    const [lang, setLang] = useState(null);
    const [txtbody, setTxtBody] = useState(null);
    useEffect(() => {
        async function fetchProjects() {
            let response = await fetch('./txt_information/aboutme-en.json');
            response = await response.json();
            console.log(response);
            setTxtBody(response);
        }
        fetchProjects();
    }, []);

    if (!txtbody) {
        return (<p>Loading...</p>);
    }

    return (
        <Container>
            <h2>About Me</h2>
            <Card>
            <Card.Body>
            <Row>
                <Col xs={12} md={4}>
                    <Card.Img src="./images/oredesu.jpeg" />
                </Col>
                <Col xs={12} md={8}>
                    <p>{ txtbody.aboutme }</p>
                </Col>
            </Row>
            <ListGroup>
                <ListGroupItem>
                    <Row>
                    <Button variant='light' href="https://www.linkedin.com/in/foo-chuan-tian" target='_blank'><FaLinkedin /> LinkedIn </Button>
                    <Button variant='light' href="https://github.com/FooChuanTian" target='_blank'><FaGithub /> GitHub </Button>
                    <Button variant='light' href="./resume.pdf" target='_blank'><FaBook /> Resume </Button>
                    </Row>
                </ListGroupItem>
            </ListGroup>
            </Card.Body>
            </Card>
        </Container>
    );
}

export default AboutMe;