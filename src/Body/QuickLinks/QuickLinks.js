import React, { PureComponent } from 'react';
import './quicklinks.css';

export default class QuickLinks extends PureComponent
{
    constructor(props)
    {
    super(props);
    this.state={
        links:[]
    };
    }

    render() {
    return(
        <div id="quick-links">This is the quick links component</div>
    );
    }
}