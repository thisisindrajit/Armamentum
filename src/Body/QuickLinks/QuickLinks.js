import React, { PureComponent } from "react";
import "./quicklinks.css";

export default class QuickLinks extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: localStorage.hasOwnProperty("quick-links")
        ? JSON.parse(localStorage.getItem("quick-links"))
        : [],
      toggleLinkBox: false,
      title: "",
      url: "",
    };
  }

  toggleBox = () => {
    this.setState({ toggleLinkBox: !this.state.toggleLinkBox });
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  setLink = (name) => {
    var linkarr = this.state.links;

    if (this.state.title.length === 0 || this.state.url.length === 0) {
      alert("Please fill in all the fields!");
      return;
    }

    for (let i = 0; i < linkarr.length; i++) {
      if (linkarr[i].title === name) {
        alert("This title already exists! Please enter a new title!");
        return;
      }
    }

    linkarr.push({
      title: this.state.title,
      url: this.state.url,
    });

    //localStorage cannot store arrays and objects. So we do JSON.stringify on the array to store it as a string and then parse it while we need the contents
    localStorage.setItem("quick-links", JSON.stringify(linkarr));
    this.setState({
      links: JSON.parse(localStorage.getItem("quick-links")),
      title: "",
      url: "",
      toggleLinkBox: false,
    });
  };

  deleteLink = (name) => {
    var linkarr = this.state.links;

    linkarr = linkarr.filter((link) => link.title !== name);

    localStorage.setItem("quick-links", JSON.stringify(linkarr));
    this.setState({
      links: JSON.parse(localStorage.getItem("quick-links")),
      title: "",
      url: "",
      toggleLinkBox: false,
    });
  };

  render() {
    return (
      <div id="quick-links">
        <div id="add-link" onClick={this.toggleBox}>
          + Add a new link
        </div>

        {this.state.toggleLinkBox && (
          <div id="add-link-box">
            <input
              type="text"
              name="title"
              placeholder="Enter the title"
              value={this.state.title}
              maxLength="50"
              autoComplete="off"
              onChange={this.inputHandler}
            ></input>
            <input
              type="text"
              name="url"
              placeholder="Enter the url"
              value={this.state.url}
              autoComplete="off"
              onChange={this.inputHandler}
            ></input>
            <div
              id="create-link"
              onClick={() => this.setLink(this.state.title)}
            >
              Create Link
            </div>
          </div>
        )}
        {this.state.links.map((link, index) => {
          const name = link.title;
          const url = link.url;
          return (
            <div key={index} className="link-box">
              <span
                className="link-title"
                onClick={() => {
                  window.open(url, "_blank");
                }}
              >
                {name}
              </span>
              <div className="icons" onClick={() => this.deleteLink(name)}>
                <svg
                  className="icons-2"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 16 16"
                  fill="#E74C3C"
                  xmlns="http://www.w3.org/2000/svg"
                  
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
