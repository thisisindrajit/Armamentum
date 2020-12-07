import React, { Component } from 'react';
import './quotes.css';

export default class Quote extends Component
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
        // fetch('https://api.quotable.io/random')
        // .then(response => response.json())
        // .then(data => {
        //     this.setState({quote:data.content, author:data.author})
        // })
        // .catch((err) => console.log(err))

        //testing using another api - better quote API
        fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random')
        .then(response => response.json())
        .then(data => {
            this.setState({quote:data.quote.quoteText, author:data.quote.quoteAuthor})
        })
        .catch((err) => console.log(err))
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