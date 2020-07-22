import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProjectInfo } from '../Components/projectInfo';
import { ProjectDisplay } from '../Components/projectDisplay';
import { ProjectList } from '../Components/projectsList';
import SideMenu from '../Components/sideMenu';


export default class ProjectsContainer extends Component {

    render(){
        return(
            <div>
                <Row className="h-50">
                    <Col xs="2">
                        <SideMenu projectlist={""}/>
                    </Col>
                    <Col>
                        <ProjectInfo currentProject={""}/>
                    </Col>
                </Row>
            </div>
        )
    }
}