import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap'
import {BlogList} from '../Components/blogList';
import {BlogMain} from '../Components/blogMain';
import SideMenu from '../Components/sideMenu';

export default class BlogContainer extends Component {

    render(){
        return(
            <>
                <Col>
                    <SideMenu />
                </Col>
                <Col>
                    <BlogMain />
                </Col>
            </>
        )
    }
}