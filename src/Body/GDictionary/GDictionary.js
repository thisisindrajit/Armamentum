import React, { Component } from "react";
import "./gdictionary.css"; //for specific styles of this component
import "../Dictionary/dictionary.css"; //general styles of Dictionary Component

export default class GDictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      isLoading: false,
      error: false,
      result: [],
    };
  }

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchHandler = (e) => {
    e.preventDefault();

    this.setState({ isLoading: true, error: false });

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + this.state.word)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);

        //in case no definition is found for the given word
        if ((data.title && data.title === "No Definitions Found") || data[0].meanings.length === 0) {
          this.setState({ error: true, isLoading: false });
        }

        this.setState({ word:"",result: data, isLoading: false });
      })
      .catch((err) => {
        console.log("inside error");
        console.log(err);
        this.setState({ error: true, isLoading: false });
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
        {/*Search Results Box*/}
        {this.state.error === false &&
        (this.state.isLoading || this.state.result.length > 0) ? (
          <div id="search">
            {this.state.isLoading === true ? (
              "Searching..."
            ) : this.state.result.length > 0 ? (
              <div id="search-results">
                <div id="top">
                  <span id="word">{this.state.result[0].word}</span>
                </div>
                {this.state.result.map((result, index) => {
                  return (
                    <div className="def-box" key={index}>
                      {result.meanings.map((meaning, index) => {
                        return (
                          <div className="result" key={index}>
                            {meaning.partOfSpeech && (
                              <span className="type">
                                {meaning.partOfSpeech}
                              </span>
                            )}
                            {meaning.definitions.map((def, index) => {
                              return (
                                <div className="defn" key={index}>
                                  <span className="definition">{def.definition}</span>
                                  {(def.example || def.synonyms) && <div className="other">
                                  {def.example && <span className="example"><b>Example: </b>{def.example}</span>}
                                  {def.synonyms && <div className="synonyms"><b>Synonyms: </b>{def.synonyms.join(", ")}</div>}
                                  </div>}
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
        {this.state.error === true && (
          <div id="no-def">
            {"Sorry! No definition found for the given word!"}
          </div>
        )}
      </div>
    );
  }
}
