import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

function NavBar() {
    return(
        <Navbar expand = "lg">
            <Navbar.Toggle aria-controls = "to-be-toggled" />
            <Navbar.Collapse id = "to-be-toggled">
                <Nav variant = "pills" className = "justify-content-end navbar">
                    <Nav.Item>
                        <Link className = "navbar-links" activeClass = "active" to = "home" spy = {true} smooth = {true} duraton = {500}>HOME</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className = "navbar-links" activeClass = "active" to = "projects" spy = {true} smooth = {true} duraton = {500}>PROJECTS</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className = "navbar-links" activeClass = "active" to = "about" spy = {true} smooth = {true} duraton = {500}>ABOUT ME</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className = "navbar-links" activeClass = "active" to = "contact" spy = {true} smooth = {true} duraton = {500}>CONTACT</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
} 

export default NavBar;