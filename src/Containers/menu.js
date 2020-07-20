import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

export default class MenuContainer extends Component {

    render(){
        return(
            <Nav defaultActiveKey="/" className="flex-column">
                    <Navbar.Brand href="/">Dean Betty</Navbar.Brand>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        )
    }
}