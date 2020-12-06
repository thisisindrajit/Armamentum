import React, { Component } from "react";
import "./guardian.css";
import guardianlogo from './guardianlogo.png';
import Guardian from "guardian-js";

const api = new Guardian("8125dc9a-3498-4272-bd7c-4568c525f5e3", true);

export default class GuardianNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoading: true,
    };
  }

  dateformat = (date) => {
    //date format -> 2020-11-05T21:30:39Z
    //need to convert it to 05/11/2020

    let splitdate = date.split("T")[0];
    let splitbyhiffen = splitdate.split("-");

    return splitbyhiffen[2] + "/" + splitbyhiffen[1] + "/" + splitbyhiffen[0];
  };

  componentDidMount() {
    api.content.search("world", {
        "order-by":"newest"
    }).then((res) => {
      const jsonparsedres = JSON.parse(res.body);
      this.setState({ news: jsonparsedres.response.results, isLoading: false});
    });
  }

  render() {
    return (
      <div id="news-box-guardian">
        {this.state.isLoading ? (
          <div style={{padding:"20px"}}>Loading news...</div>
        ) : (
        <>
        <img src={guardianlogo} id="guardian-logo" alt="guardian-logo"></img>
          {this.state.news.map((newsitem, index) => {
            return (
              <div
                className="news-list-item-guardian"
                onClick={() => window.open(newsitem.webUrl, "_blank")}
                key={index}
              >
                <span className="title">{newsitem.webTitle}</span>
                <div className="other-data">
                  <div className="pubdate">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-calendar2-minus"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{marginRight:"5px"}}
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
                    {this.dateformat(newsitem.webPublicationDate)}
                  </div>
                  <span className="category">{newsitem.sectionName}</span>
                </div>
              </div>
            );   
          }
          )}
          </>
        )}
      </div>
    );
  }
}
