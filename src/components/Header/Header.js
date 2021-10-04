import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* Navigation area */}
            <Navbar bg="primary" variant="light">
                <Container className="m-2">
                    <Navbar.Brand>
                        <NavLink to="/home" className="text-white text-decoration-none ms-4 fw-bold">
                            THE KINGS
                        </NavLink>
                    </Navbar.Brand>
                    <Nav className="me-auto gap-3 ms-4" activeKey="/home">
                        <NavLink className="text-white text-decoration-none" to="/home">Home</NavLink>
                        <NavLink className="text-white text-decoration-none" to="/services">Services</NavLink>
                        <NavLink className="text-white text-decoration-none" to="/levels">Levels</NavLink>
                        <NavLink className="text-white text-decoration-none" to="/about">About us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;