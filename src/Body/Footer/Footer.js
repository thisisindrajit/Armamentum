import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
    return(
        <div id="footer">
            © Copyright {new Date().getFullYear()} - Indrajit
        </div>
    );
    }
}