import React, { Component } from "react";
import "./nyt.css";
import nytlogo from './nytlogo.png';
export default class NYT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" +
        process.env.REACT_APP_NYT_API_KEY
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.results);
        this.setState({ result: data.results, isLoading: false});
      });
  }

  render() {
    return (
      <div id="news-box-nyt">
        {this.state.isLoading ? (
          <div>Loading news...</div>
        ) : (
          <>
            <img
              src={nytlogo}
              id="nyt-logo"
              alt="nyt-logo"
            ></img>
            {this.state.result.slice(0, 10).map((news, index) => {
              return <div key={index} className="news-list-item-nyt" onClick={() => {window.open(news.url, "_blank")}}>{news.title}</div>;
            })}
          </>
        )}
      </div>
    );
  }
}
