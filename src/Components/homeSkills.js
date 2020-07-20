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
                    <div className="d-inline w-25 homeSkills">
                        <h2>Rails</h2>
                    </div>
                    <div className="d-inline w-25 homeSkills">
                        <h2>Html5</h2>
                    </div>
                    <div className="d-inline w-25 homeSkills">
                        <h2>Redux</h2>
                    </div>
                    <div className="d-inline w-25 homeSkills">
                        <h2>Ruby</h2>
                    </div>
                </Col>
            </Row>
            <Row className="h-25">
                <Col className="w-100 d-flex justify-content-center">
                    <div className="d-inline w-25 homeSkills">
                        <h2>React</h2>
                    </div>
                    <div className="d-inline w-25 homeSkills">
                        <h2>JavaScript</h2>
                    </div>
                    <div className="d-inline w-25 homeSkills">
                        <h2>SQL</h2>
                    </div>
                    <div className="d-inline w-25 homeSkills">
                        <h2>Bootstrap</h2>
                    </div>
                </Col>
            </Row>
        </div>
    )
}