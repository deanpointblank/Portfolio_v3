import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';

export const ContactBlurb = () => {
    return(
        <Container fluid>
            <Row className="contactBlurb-text text-center d-flex align-content-center justify-content-center flex-wrap">
                <h2>Get in Touch</h2>
                <p>
                    I'm interested in medium to long-term contracts
                    and full-time opportunities. However, if you 
                    have any other request feel free to contact me.
                </p>
                <ul class="list-unstyled">
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                    <li>Twitter</li>
                </ul>
            </Row>
        </Container>
    )
}