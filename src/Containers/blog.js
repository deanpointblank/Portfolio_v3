import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap'
import {BlogList} from '../Components/blogList';
import {BlogMain} from '../Components/blogMain';
import SideMenu from '../Components/sideMenu';

export default class BlogContainer extends Component {
    constructor(){
        super();
        this.state ={
            error: null,
            isLoaded: false,
            posts: []
        }
    }
    
    componentDidMount(){
    }

    render(){
        const {error, isLoaded, posts} = this.state;
        if (error){
            return <>{error}</>;
        } else if (isLoaded) {
            return <>Loading</>
        } else{
            return(
                <>
                    <Col xs="2">
                        <SideMenu menuList={""}/>
                    </Col>
                    <Col>
                        <BlogMain />
                    </Col>
                </>
            )
        }
    }
}