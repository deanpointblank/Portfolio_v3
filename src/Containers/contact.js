import React, { Component } from 'react';
import { ContactBlurb } from '../Components/contactBlurb';
import { ContactForm } from '../Components/contactForm';

export default class ContactContainer extends Component {

    render(){
        return(
            <div>
                <p>This is the Contact page</p>
                <ContactBlurb />
                <ContactForm />
            </div>
        )
    }
}