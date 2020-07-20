import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export const HomeSkills = () => {
    return(
        <div className="container">
            <Row>
                <Col className="d-flex justify-content-center">
                    <h1>Here are my skills:</h1>
                </Col>
            </Row>

            <Row className="display-4 h-50">
                <Col className="w-100 d-flex justify-content-between">
                    <div className="d-inline">
                        Rails
                    </div>
                    <div className="d-inline">
                        Html5
                    </div>
                    <div className="d-inline">
                        Redux
                    </div>
                    <div className="d-inline">
                        Ruby
                    </div>
                </Col>
            </Row>
            <Row className="display-4 h-50">
                <Col className="w-100 d-flex justify-content-between">
                    <div className="d-inline">
                        React
                    </div>
                    <div className="d-inline">
                        JavaScript
                    </div>
                    <div className="d-inline">
                        SQL
                    </div>
                    <div className="d-inline">
                        Bootstrap
                    </div>
                </Col>
            </Row>
        </div>
    )
}