import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export const HomeSkills = () => {
    return(
        <div className="container">
            <Row className="h-25">
                <Col className="d-flex justify-content-center">
                    <h1 className="display-3">Here are my skills:</h1>
                </Col>
            </Row>

            <Row className=" h-25">
                <Col className="display-4w-100 d-flex justify-content-center">
                    <div className="d-inline w-25 home-skills">
                        <h1>Rails</h1>
                    </div>
                    <div className="d-inline w-25 home-skills">
                        <h1>Html5</h1>
                    </div>
                    <div className="d-inline w-25 home-skills">
                        <h1>Redux</h1>
                    </div>
                    <div className="d-inline w-25 home-skills">
                        <h1>Ruby</h1>
                    </div>
                </Col>
            </Row>
            <Row className="h-25">
                <Col className="w-100 d-flex justify-content-center">
                    <div className="d-inline w-25 home-skills">
                        <h1>React</h1>
                    </div>
                    <div className="d-inline w-25 home-skills">
                        <h1>JavaScript</h1>
                    </div>
                    <div className="d-inline w-25 home-skills">
                        <h1>SQL</h1>
                    </div>
                    <div className="d-inline w-25 home-skills">
                        <h1>Bootstrap</h1>
                    </div>
                </Col>
            </Row>
        </div>
    )
}