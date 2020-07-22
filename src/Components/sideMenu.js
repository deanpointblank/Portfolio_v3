import React, { Component } from 'react';
import { Row, Nav, Navbar } from 'react-bootstrap';

export default class SideMenu extends Component {

    render(){
        return(
            <Navbar bg="light" expand="lg" defaultActiveKey="/" className="flex-column">
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="mr-auto flex-column">
                    <Nav.Link className="underlined" href="/projects">Projects</Nav.Link>
                    <Nav.Link className="underlined" href="/blog">Blog</Nav.Link>
                    <Nav.Link className="underlined" href="/contact">Contact</Nav.Link>
                </Nav>
            {/* </Navbar.Collapse> */}
        </Navbar>
        )
    }
}