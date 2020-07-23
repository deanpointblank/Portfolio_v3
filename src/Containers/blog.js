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
        fetch("http://159.65.218.140/posts")
        .then(res => res.json())
        .then(posts => {
            this.setState({
                isLoaded: false,
                posts: posts.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0)) 
            })
        })
        .catch(error => {
            this.setState({
                isLoaded: true,
                error
            })
        })
    }

    currentblog = (url) =>{
        if(!url.blog){
            return <BlogMain Currentpost={this.state.posts[0]}/>
        } else {
            return <BlogMain Currentpost={this.state.posts.find(blog => blog.id == [url.blog])}/>
        }
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
                        <SideMenu menuList={posts}/>
                    </Col>
                    <Col>
                        {/* <BlogMain Currentpost={posts[0]}/> */}
                        {this.currentblog(this.props.match.params)}
                    </Col>
                </>
            )
        }
    }
}