import react from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function TopNav(props) {
    return (
        <Navbar className="navbar navbar-expand-lg " expand="lg">
        <Navbar.Brand className='navbar-brand' id='logo'> ॐ Ali-Schreck.</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link className='nav-link' href='#experience'>Experience
                    </Nav.Link>
                        <Nav.Link className='nav-link' href='#technologies'>Technologies
                    </Nav.Link>
                        <Nav.Link className='nav-link' href='#projects'>Projects
                    </Nav.Link>
                        <Nav.Link className='nav-link' href='#contact'>Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopNav;