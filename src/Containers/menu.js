import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default class MenuContainer extends Component {

    render(){
        return(
            <Nav defaultActiveKey="/" className="d-flex flex-column">
                    <Navbar.Brand href="/"><span className="underlined">Dean Betty</span></Navbar.Brand>
                    <Nav.Link className="underlined" href="/projects">Projects</Nav.Link>
                    <Nav.Link className="underlined" href="/blog">Blog</Nav.Link>
                    <Nav.Link className="underlined" href="/contact">Contact</Nav.Link>
            </Nav>
        )
    }
}