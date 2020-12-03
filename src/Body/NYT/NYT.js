import React, { Component } from 'react';
import './nyt.css';

export default class NYT extends Component
{
    constructor(props)
    {
    super(props);
    this.state={
        
    };
    }

    render() {
    return(
        <div id="news-box-nyt">This is the New York Times Component</div>
    );
    }
}