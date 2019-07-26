import React from 'react';
import { 
    Navbar, 
    Nav, 
} from 'react-bootstrap';
import logo from '../../images/RV-logo.svg';

import './header.css';

const Header = () => (
    <Navbar variant="light">
        <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link href="#modelr" className="custom-navmenu">Model R</Nav.Link>
            <Nav.Link href="#modeliq" className="custom-link custom-navmenu">Model IQ</Nav.Link>
            <Nav.Link href="#modelmobi" className="custom-link custom-navmenu">Model Mobi</Nav.Link>
            <Nav.Link href="#modelcharlie" className="custom-link custom-navmenu">Model Charlie</Nav.Link>
            <Nav.Link href="#modelitaly" className="custom-link custom-navmenu">Model Italy</Nav.Link>
        </Nav>
    </Navbar>
)

export default Header;