import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProjectCarosal } from '../Components/projectCarosal';
import { ProjectDisplay } from '../Components/projectDisplay';
import { ProjectList } from '../Components/projectsList';
import SideMenu from '../Components/sideMenu';


export default class ProjectsContainer extends Component {

    render(){
        return(
            <div>
                <Row className="h-50">
                    {/* <ProjectList />
                    <ProjectDisplay /> */}
                    <Col xs="2">
                        <SideMenu />
                    </Col>
                    <Col>
                        <ProjectCarosal />
                    </Col>
                </Row>
            </div>
        )
    }
}