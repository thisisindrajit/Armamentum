import React, { Component } from "react";
import "./nyt.css";
import nytlogo from "./nytlogo.png";
export default class NYT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("https://armamentum.herokuapp.com/news/nytnews")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.results);
        this.setState({ result: data.results, isLoading: false });
      });
  }

  dateformat = (date) => {
    //date format -> 2020-11-05T21:30:39Z
    //need to convert it to 05/11/2020

    let splitdate = date.split("T")[0];
    let splitbyhiffen = splitdate.split("-");

    return splitbyhiffen[2] + "/" + splitbyhiffen[1] + "/" + splitbyhiffen[0];
  };

  render() {
    return (
      <div id="news-box-nyt">
        {this.state.isLoading ? (
          <div style={{padding:"10px"}}>Loading news...</div>
        ) : (
          <>
            <img src={nytlogo} id="nyt-logo" alt="nyt-logo"></img>
            {this.state.result.slice(0, 10).map((newsitem, index) => {
              return (
                <div
                  key={index}
                  className="news-list-item-nyt"
                  onClick={() => {
                    window.open(newsitem.url, "_blank");
                  }}
                >
                  <img
                    className="nyt-img-holder"
                    src={newsitem.multimedia[1].url}
                    alt="thumbnail"
                  ></img>
                  <div className="other-data">
                    <span className="nyt-title" title={newsitem.title}>
                      {newsitem.title}
                    </span>
                    <div className="pubdateandsubsection">
                      <div className="pubdate">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-calendar2-minus"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginRight: "5px" }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
                          />
                          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                          <path
                            fillRule="evenodd"
                            d="M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                          />
                        </svg>
                        {this.dateformat(newsitem.published_date)}
                      </div>
                      <span className="category">{newsitem.subsection}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
