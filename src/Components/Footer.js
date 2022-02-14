import React, { Component } from "react"
import { Navbar, Container } from "react-bootstrap"

export class Footer extends Component {
    render() {
        return (
            <Navbar bg="light">
                <Container className="justify-content-center">
                    <Navbar.Brand href="home">Bulgarian Republic Tools</Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}