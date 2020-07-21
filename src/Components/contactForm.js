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
                        placeholder="First name"
                        />
                    </Form.Group>
                </Col>    
                <Col>    
                    <Form.Group>
                        <Form.Control
                        required
                        size="lg"
                        type="email" 
                        placeholder="Enter email" 
                        />
                    </Form.Group>
                </Col>
            </Row>    
            <Form.Group>
                <Form.Control
                required
                size="lg"
                type="text"
                placeholder="Subject"
                />
            </Form.Group>
                
            <Form.Group>
                <Form.Control
                required
                size="lg"
                as="textarea"
                placeholder="Message"
                rows="3"
                />
            </Form.Group>
                
            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    )
}