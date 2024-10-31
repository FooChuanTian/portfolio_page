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
                    <p>I am a third-year undergraduate at the Singapore University of Technology and Design with plans to major in Computer Science. I am currently serving as the Treaurer of SUTD Drama Club and also work part-time at iTrust in SUTD as a Student Assistant. I am passionate about information security and how it continues to evolve in the face of new technological and geopolitical challenges. In my spare time, I enjoy learning Japanese.</p>
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