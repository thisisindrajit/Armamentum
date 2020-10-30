import React,{ Component } from 'react';
import './welcome.css';

export default class Welcome extends Component
{
    render() {

    var hour = new Date().getHours();

    return(
        <div id="content">
        <div id="welcome">
            {hour < 12 ? "Good Morning" : hour < 16 ? "Good Afternoon" : hour < 21 ? "Good Evening" : "Good Night"} Indrajit!
        </div>
        </div>
    );
    }
}