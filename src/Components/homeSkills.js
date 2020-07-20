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

            <Row className="display-4 h-25">
                <Col className="w-100 d-flex justify-content-center">
                    <div className="d-inline w-25">
                        Rails
                    </div>
                    <div className="d-inline w-25">
                        Html5
                    </div>
                    <div className="d-inline w-25">
                        Redux
                    </div>
                    <div className="d-inline w-25">
                        Ruby
                    </div>
                </Col>
            </Row>
            <Row className="display-4 h-25">
                <Col className="w-100 d-flex justify-content-center">
                    <div className="d-inline w-25">
                        React
                    </div>
                    <div className="d-inline w-25">
                        JavaScript
                    </div>
                    <div className="d-inline w-25">
                        SQL
                    </div>
                    <div className="d-inline w-25">
                        Bootstrap
                    </div>
                </Col>
            </Row>
        </div>
    )
}