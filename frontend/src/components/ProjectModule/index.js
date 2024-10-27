import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PictureCarousel from "../PictureCarousel";
import "./style.css";


function ProjectModule({ props }) {
    console.log(props.images);
    return (
        <Container class="courier">
            <Row>
                <h1>{ props.title }</h1>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                    <PictureCarousel images={ props.images } />
                </Col>
                <Col xs={6} md={4}>
                    { props.description }
                </Col>
            </Row>
            <hr />
        </Container>
    )
};

export default ProjectModule;