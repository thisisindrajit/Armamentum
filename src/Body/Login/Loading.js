import React, { Component } from 'react';
import loading from './loading.gif';

export default class Loading extends Component
{
    render() {

    return(
        <div id="loading-box">
            <img src={loading} alt="loading_gif" style={{height:"200px"}}></img>
        </div>
    );
    }
}