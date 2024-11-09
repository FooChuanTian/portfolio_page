import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PictureCarousel from "../PictureCarousel";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import "./style.css";
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaYoutube } from "react-icons/fa"


function ProjectModule({ props }) {
    let gitHubExist = "github" in props;
    let youTubeExist = "youtube" in props;
    return (
        <Container>
            <Card bg='light'>
                <Card.Body>
                    <Row>
                        <Card.Title><h2>{ props.title }</h2></Card.Title>
                    </Row>
                    <Row>
                        <Card.Subtitle>{ props.module }</Card.Subtitle><br />
                    </Row>
                    <Row>
                        <Col xs={12} md={8}>
                            <PictureCarousel images={ props.images } />
                        </Col>
                        <Col xs={12} md={4}>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                            <strong>Description</strong> <br />
                            { props.description }
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Responsibilities</strong>
                                <ul>
                                {props.responsibilities.map((res) => (
                                    <li>{ res }</li>
                                ))}
                                </ul>
                            </ListGroupItem>
                            
                                {gitHubExist ? (
                                <ListGroupItem>
                                    <Button variant='light' href={ props.github } target='_blank'><FaGithub /> GitHub Repository </Button>
                                </ListGroupItem>
                                ) : (null)}

                                {youTubeExist ? (
                                    props.youtube.map((vid) => (
                                        <ListGroupItem>
                                            <Button variant='light' href={ vid.link } target='_blank'><FaYoutube /> { vid.title } </Button>
                                        </ListGroupItem>
                                    ))
                                ) : (null)}
                        </ListGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <br />
        </Container>
    )
};

export default ProjectModule;