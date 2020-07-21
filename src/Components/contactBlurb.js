import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';

export const ContactBlurb = () => {
    return(
        <>
            <Row className="h-50 contactBlurb-text text-center d-flex align-content-center justify-content-center flex-wrap">
                <h2>Get in Touch</h2>
                <p>
                    I'm interested in medium to long-term contracts
                    and full-time opportunities. However, if you 
                    have any other request feel free to contact me.
                </p>
            </Row>
            <Row className="h-50 contactBlurb-text text-left d-flex align-content-center justify-content-center flex-wrap">
                <ul class="list-unstyled">
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                    <li>Twitter</li>
                </ul>
            </Row>
        </>
    )
}