import React, { PureComponent } from "react";
import "./weather.css";

export default class Weather extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      isLoading: true,
      url: "",
      enableLocation: false,
      error: false
    };
  }

  async componentDidMount() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.setState({url:"https://armamentum.herokuapp.com/weather/" + position.coords.latitude + "&" + position.coords.longitude, enableLocation:true});
        // });
        this.setState({ url: "http://localhost:5000/weather/" + position.coords.latitude + "&" + position.coords.longitude, enableLocation: true });
      });
    }
  }

  componentDidUpdate() {

    if (this.state.url !== "" && this.state.isLoading === true) {

      fetch(this.state.url)
        .then((res) => res.json())
        .then((res) => {
          //console.log(res);

          // if (data.message === "API rate limit exceeded") {

          //   this.setState({
          //     weather: {
          //       temp: {
          //         value: undefined,
          //       },
          //     },
          //     isLoading: false,
          //   });
          // }

          if (res.data.timelines) {
            this.setState({ weather: res.data, isLoading: false });
          } else {
            this.setState({ isLoading: false, error: true });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({ isLoading: false, error: true });
        });
    }
  }

  render() {
    return this.state.isLoading === false &&
      this.state.weather !== null ? (
      <div id="weather">
        <div id="city">Current temperature in your location</div>
        <span id="temperature">
          {Math.round(this.state.weather.timelines[0].intervals[0].values.temperature) + "°C"}
        </span>
      </div>
    ) : (
      <div id="weather">
        <span>{this.state.error === false ? (this.state.isLoading === true && this.state.enableLocation === true ? "Loading..." : "Please provide location access!") : "Sorry! Some error occurred! Please try again!"}</span>
      </div>
    );
  }
}
