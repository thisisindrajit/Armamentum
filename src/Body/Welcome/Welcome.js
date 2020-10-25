import React,{ Component } from 'react';
import './welcome.css';
import Notes from '../Notes/Notes';
import Quote from '../Quote/Quote';

export default class Welcome extends Component
{
    render() {

    var hour = new Date().getHours();

    return(
        <div id="content">
        <div id="welcome">
            {hour < 12 ? "Good Morning" : hour < 16 ? "Good Afternoon" : hour < 20 ? "Good Evening" : "Good Night"} Indrajit!
        </div>

        <Quote />

        <div id="widget-grid">
            <Notes />
        </div>
        </div>
    );
    }
}