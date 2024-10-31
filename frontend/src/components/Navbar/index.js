import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"

function MyNavbar() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav classname="me.auto">
                    <Nav.Link href="/" activeStyle>About Me</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;