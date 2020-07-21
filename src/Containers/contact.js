import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactBlurb } from '../Components/contactBlurb';
import { ContactForm } from '../Components/contactForm';

export default class ContactContainer extends Component {

    render(){
        return(
            <Row>
                <Col>
                    <ContactBlurb />
                </Col>
                <Col>
                    <ContactForm />
                </Col>
            </ Row>
        )
    }
}