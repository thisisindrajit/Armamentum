import React, { PureComponent } from "react";
import "./dictionary.css";
import renderHTML from 'react-render-html';
var Owlbot = require("owlbot-js");
//OWLBOT API KEY - a73d4c94f67c7b70b93d1023e8f8095173fe430d
var client = Owlbot("a73d4c94f67c7b70b93d1023e8f8095173fe430d");

export default class Dictionary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      isLoading: false,
      error: false,
      result: {
        definitions: [],
      },
    };
  }

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchHandler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true, error:false });

    client
      .define(this.state.word)
      .then((result) => {
        //console.log(result);
        this.setState({ word: "", isLoading: false, result: result });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: true, isLoading: false, word: "" });
      });
  };

  render() {
    return (
      <div id="dictionary">
        Dictionary
        <div id="search">
        <form method="POST" onSubmit={this.searchHandler}>
          <input
            type="text"
            name="word"
            placeholder="Enter the word to search..."
            value={this.state.word}
            autoComplete="off"
            onChange={this.inputHandler}
          ></input>
          <div className="buttons">
            <button id="search-button" type="submit">
              Search
            </button>
          </div>
          </form>
        </div>
        {/* Search results box */}
        {this.state.error === false &&
        (this.state.isLoading || this.state.result.definitions.length > 0) ? (
          <div id="search">
            {this.state.isLoading === true ? (
              "Searching..."
            ) : this.state.result.definitions.length > 0 ? (
              <div id="search-results">
                <div id="top">
                  <span id="word">{this.state.result.word}</span>
                  {this.state.result.pronunciation && (
                    <span id="pronunciation">
                      /{this.state.result.pronunciation}/
                    </span>
                  )}
                </div>
                {this.state.result.definitions.map((definition, index) => {
                  return (
                    <div className="def-box" key={index}>
                      {definition.type && (
                        <span className="type">{definition.type}</span>
                      )}
                      <span className="definition">
                        {definition.definition}
                      </span>
                      {definition.example && (
                        <span className="example">
                          <b>Example:</b> {renderHTML(definition.example)}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
        {this.state.error === true && (
          <div id="no-def">{"Sorry! No definition found for the given word!"}</div>
        )}
      </div>
    );
  }
}
