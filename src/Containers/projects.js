import React, { Component } from 'react';
import { ProjectCarosal } from '../Components/projectCarosal';
import { ProjectDisplay } from '../Components/projectDisplay';
import { ProjectList } from '../Components/projectsList';

export default class ProjectsContainer extends Component {

    render(){
        return(
            <div>
                <p>This is the Projects page</p>
                <ProjectList />
                <ProjectDisplay />
                <ProjectCarosal />
            </div>
        )
    }
}