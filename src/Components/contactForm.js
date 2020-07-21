import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export const ContactForm = () => {
    return(
        <Form>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                        />
                    </Form.Group>
                </Col>    
                <Col>    
                    <Form.Group>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Col>
            </Row>    
            <Form.Group>
                <Form.Control type="text" placeholder="Message" />
            </Form.Group>
                
            <Form.Group>
                <Form.Control as="textarea" placeholder="Message" rows="3" />
            </Form.Group>
                
            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    )
}