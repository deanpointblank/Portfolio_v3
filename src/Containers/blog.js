import React, { Component } from 'react';
import {BlogList} from '../Components/blogList';
import {BlogMain} from '../Components/blogMain';

export default class BlogContainer extends Component {

    render(){
        return(
            <div>
                <p>This is the Blog page</p>
                <BlogList />
                <BlogMain />
            </div>
        )
    }
}