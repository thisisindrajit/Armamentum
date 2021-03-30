import React, { Component } from "react";
import "./books.css";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("https://armamentum.herokuapp.com/books/nytbooks")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.results.books);
        this.setState({ result: data.results.books, isLoading: false });
      });
  }

  render() {
    return (
      <div id="nytbooks">
           {this.state.isLoading ? (
          <div style={{ padding: "10px", textAlign:"center" }}>Loading books...</div>
        ) : (
        <>
        <span id="books-title">Best Selling Books</span>
        {this.state.result.slice(0, 10).map((books, index) => {
          return (
            <div className="book-box" key={index} onClick={() => {window.open(books.amazon_product_url, "_blank")}}>
              <img className="bookcover" src={books.book_image} alt="book_cover"></img>
              <div className="details">
                <span className="title">{books.title}</span>
                <span className="author">{books.author}</span>
                <span className="desc">{books.description}</span>
              </div>
            </div>
          );
        })}
        </>)}
      </div>
    );
  }
}
