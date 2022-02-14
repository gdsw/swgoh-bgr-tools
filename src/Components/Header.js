import React, {Component} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

export class Header extends Component{
    render() {
        return(
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Bulgarian Republic Tools</Navbar.Brand>
                    <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/calculator" className="nav-link">Calculator</Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}