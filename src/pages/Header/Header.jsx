import React from 'react';
import './Header.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="Navbar">
            <Container fluid>
                <i className="fas fa-code text-light me-3 fs-5"></i>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className="link">Home</Nav.Link>
                        <Nav.Link href="#skills" className="link">Skills</Nav.Link>
                        <Nav.Link href="#Projects" className="link">Projects</Nav.Link>
                        <Nav.Link href="#Contact" className="link">Contact</Nav.Link>
                    </Nav>
                    <Nav className="align-items-center">
                        {/* LinkedIn Icon and Link */}
                        <Nav.Link 
                            href="https://www.linkedin.com/in/ebrahim-elngar-6860a2333" 
                            target="_blank" 
                            className="text-light fs-6" 
                            aria-label="LinkedIn Profile"
                        >
                            <i className="fab fa-linkedin-in text-light me-2 fs-4"></i>
                            LinkedIn
                        </Nav.Link>

                        {/* GitHub Icon and Link */}
                        <Nav.Link 
                            href="https://github.com/Ebra7im27" 
                            target="_blank" 
                            className="text-light fs-6" 
                            aria-label="GitHub Profile"
                        >
                            <i className="fab fa-github text-light me-2 fs-4"></i>
                            GitHub
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
