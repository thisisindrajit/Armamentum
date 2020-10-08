import React,{Component} from 'react';
import './welcome.css';

export default class Welcome extends Component
{
    constructor()
    {
    super();
    this.state={
        
    };
    }

    render() {
    return(
        <div id="welcome">
            Good morning Indrajit!
        </div>
    );
    }
}