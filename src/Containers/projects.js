import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProjectInfo } from '../Components/projectInfo';
import SideMenu from '../Components/sideMenu';


export default class ProjectsContainer extends Component {
    constructor(){
        super();
        this.state ={
            error: null,
            isLoaded: false,
            projects: []
        }
    }
    
    componentDidMount(){
    }


    render(){
        const {error, isLoaded, projects} = this.state;
        if (error){
            return <>{error}</>;
        } else if (isLoaded) {
            return <>Loading</>
        } else{
            return(
                <div>
                    <Row className="h-50">
                        <Col xs="2">
                            <SideMenu menuList={""}/>
                        </Col>
                        <Col>
                            <ProjectInfo currentProject={""}/>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}