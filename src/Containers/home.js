import React, { Component } from 'react';
import { HomeAbout } from '../Components/homeAbout';
import { HomeSkills } from '../Components/homeSkills';


export default class HomeContainer extends Component {

    render(){
        return(
            <div>
                <p>This is the Home page</p>
                <HomeAbout />
                <HomeSkills />
            </div>
        )
    }
}