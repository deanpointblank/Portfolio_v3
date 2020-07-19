import React, { Component } from 'react';
import blogList from '../Components/blogList';
import blogMain from '../Components/blogMain';

export default class BlogContainer extends Component {

    render(){
        return(
            <div>
                <p>This is the Blog page</p>
                <blogList />
                <blogMain />
            </div>
        )
    }
}