import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { ContactBlurb } from '../Components/contactBlurb';
import { ContactForm } from '../Components/contactForm';

export default class ContactContainer extends Component {

    render(){
        return(
            <Row>
                <Col className="contactBlurb">
                    <ContactBlurb />
                </Col>
                <Col className="d-flex align-content-center justify-content-center flex-wrap contactForm contact">
                    <ContactForm />
                </Col>
            </Row>
        )
    }
}