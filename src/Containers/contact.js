import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactBlurb } from '../Components/contactBlurb';
import { ContactForm } from '../Components/contactForm';

export default class ContactContainer extends Component {

    render(){
        return(
            <Row className="h-100">
                <Col className="h-100 contactBlurb">
                    <ContactBlurb />
                </Col>
                <Col className="h-100 d-flex align-content-center justify-content-center flex-wrap contactForm contact">
                    <ContactForm />
                </Col>
            </ Row>
        )
    }
}