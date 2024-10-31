import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"

function MyNavbar() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav classname="me.auto">
                    <Nav.Link href="/portfolio_page" activeStyle>About Me</Nav.Link>
                    <Nav.Link href="/portfolio_page/projects">Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;