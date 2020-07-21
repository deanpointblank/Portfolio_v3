import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export const ContactForm = () => {
    return(
        <Form>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Control size="lg"
                        required
                        type="text"
                        placeholder="Name"
                        />
                    </Form.Group>
                </Col>    
                <Col>    
                    <Form.Group>
                        <Form.Control
                        required
                        size="lg"
                        type="email" 
                        placeholder="Email" 
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>    
            <Form.Group>
                <Form.Control
                required
                size="lg"
                type="text"
                placeholder="Subject"
                />
            </Form.Group>
            </Row>
            <Row>    
            <Form.Group>
                <Form.Control
                required
                size="lg"
                as="textarea"
                placeholder="Message"
                rows="3"
                />
            </Form.Group>
            </Row>
                <Button variant="outline-light" type="submit" className="w-25 float-right">
                    Send
                </Button>
        </Form>
    )
}