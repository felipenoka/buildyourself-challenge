import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { 
    Navbar, 
    Nav, 
} from 'react-bootstrap';
import logo from '../../images/RV-logo.svg';

import './header.css';

const Header = () => (
    <Navbar variant="light">
        <Navbar.Brand href="/home"><img src={logo} /></Navbar.Brand>
        
        <Nav className="ml-auto">
        <Router>
            <Nav.Link href="/home" className="custom-navmenu">Model R</Nav.Link>
            <Nav.Link href="" className="custom-link custom-navmenu">Model IQ</Nav.Link>
            <Nav.Link href="" className="custom-link custom-navmenu">Model Mobi</Nav.Link>
            <Nav.Link href="" className="custom-link custom-navmenu">Model Charlie</Nav.Link>
            <Nav.Link href="" className="custom-link custom-navmenu">Model Italy</Nav.Link>
            </Router>
        </Nav>
        
    </Navbar>
)

export default Header;