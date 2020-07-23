import React, { Component } from 'react';
import { Row, Nav, Navbar } from 'react-bootstrap';

export default class SideMenu extends Component {

    // showPostInMenu = (posts) =>{

    //     posts.map(post=>{
    //         console.log(post)
    //         return(
    //             <Nav.Link className="underlined" href={`/blog/${post.Title.split(" ").join("_")}`}>{post.Title}</Nav.Link>
    //         )
    //     })
    // }

    render(){
        return(
            <Navbar bg="light" expand="lg" defaultActiveKey="/" className="flex-column">
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="mr-auto flex-column">
                    {this.props.menuList.map(post => {
                       return <Nav.Link className="underlined sideMenu" href={`/blog/${post.Title.replace(/[^0-9a-z]/gi, '_')}`}>{post.Title}</Nav.Link>
                    })}
                </Nav>
            {/* </Navbar.Collapse> */}
        </Navbar>
        )
    }
}