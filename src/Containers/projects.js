import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { ProjectCarosal } from '../Components/projectCarosal';
import { ProjectDisplay } from '../Components/projectDisplay';
import { ProjectList } from '../Components/projectsList';

export default class ProjectsContainer extends Component {

    render(){
        return(
            <div>
                <Row className="h-50">
                    {/* <ProjectList />
                    <ProjectDisplay /> */}
                    <ProjectCarosal />
                </Row>
                <Row className="h-50">
                    <ProjectList />
                </Row>
            </div>
        )
    }
}