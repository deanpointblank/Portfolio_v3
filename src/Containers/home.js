import React, { Component } from 'react';
import { HomeAbout } from '../Components/homeAbout';
import { HomeSkills } from '../Components/homeSkills';
import { Row, Col } from 'react-bootstrap';


export default class HomeContainer extends Component {

    render(){
        return(
            <>
                <Row className="h-50 homeAbout align-items-center">
                    <HomeAbout />
                </Row>
                <Row className="h-50">
                    <HomeSkills />
                </Row>
            </>
        )
    }
}