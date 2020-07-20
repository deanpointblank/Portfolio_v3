import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export const HomeSkills = () => {
    return(
        <div className="container">
            <Row>
                <h1 className="text-center">Here are my skills:</h1>
            </Row>

            <Row className="display-4 text-center">
                    <div>
                        Rails
                    </div>
                    <div>
                        Html5
                    </div>
                    <div>
                        Redux
                    </div>
                    <div>
                        Ruby
                    </div>
            </Row>
            <Row className="display-4 text-center">
                    <div>
                        React
                    </div>
                    <div>
                        JavaScript
                    </div>
                    <div>
                        SQL
                    </div>
                    <div>
                        Bootstrap
                    </div>
            </Row>
        </div>
    )
}