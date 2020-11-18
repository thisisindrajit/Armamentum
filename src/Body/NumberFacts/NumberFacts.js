import React, { PureComponent } from "react";
import "./numberfacts.css";

export default class NumberFacts extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fact: {},
    };
  }

  componentDidMount() {
    fetch("https://armamentum.herokuapp.com/fact")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        this.setState({ isLoading: false, fact: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return this.state.isLoading === false ? (
      <div id="fact-box">
          {"Fact about number " + this.state.fact.number}
          <span id="fact">{this.state.fact.text}</span></div>
    ) : null;
  }
}
