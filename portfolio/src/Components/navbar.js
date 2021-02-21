import react from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'

function TopNav(props) {
    return (
        <Navbar className="Navbarbar navbar-expand-md">
            <div className='navbar-brand' id='logo'> ॐ Ali-Schreck.</div>
            <Button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01'
                aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </Button>
            <Nav className='collapse navbar-collapse' id='navbarTogglerDemo01'>
                <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                    <Nav.Link className='nav-item'>
                        <a className='nav-link' href='#experience'>Experience</a>
                    </Nav.Link>
                    <Nav.Link className='nav-item'>
                        <a className='nav-link' href='#technologies'>Technologies</a>
                    </Nav.Link>
                    <Nav.Link className='nav-item active'>
                        <a className='nav-link' href='#projects'>Projects</a>
                    </Nav.Link>
                    <Nav.Link className='nav-item active'>
                        <a className='nav-link' href='#contact'>Contact</a>
                    </Nav.Link>
                </ul>
            </Nav>
        </Navbar>
        );
}

export default TopNav;