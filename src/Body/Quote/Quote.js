import React, { PureComponent } from 'react';
import './quotes.css';

export default class Quote extends PureComponent
{
    constructor(props)
    {
    super(props);
    this.state={
        quote:"",
        author:""
    };
    }

    componentDidMount(){
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            this.setState({quote:data.content, author:data.author})
        })
    }

    render() {

    return(
        <div id="quote"> 
                <span id="content">{this.state.quote}</span>
                {this.state.quote !== "" && <div id="line"></div>}
                <span id="author">{this.state.author}</span>
        </div>
    );
    }
}