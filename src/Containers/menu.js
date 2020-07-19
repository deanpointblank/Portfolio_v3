import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

export default class MenuContainer extends Component {

    render(){
        return(
            <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link href="/">Dean Betty</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        )
    }
}