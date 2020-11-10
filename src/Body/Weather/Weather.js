import React, { PureComponent } from "react";
import "./weather.css";

export default class Weather extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
                  temp: {
                    value: undefined,
                  }
                },
      isLoading: true,
      url:"",
      enableLocation:false
    };
  }
  
  async componentDidMount() {
   
    let apikey = "wnyk8nvno3fgvSgIuM8Y9h490KONwYyW";

    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition((position) => {
      this.setState({url:
      "https://api.climacell.co/v3/weather/realtime?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&unit_system=si&fields=temp&apikey=" +
      apikey, enableLocation:true});
      });
    }
  }

  componentDidUpdate(){

    if(this.state.url !== "" && this.state.isLoading === true){

    fetch(this.state.url)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);

        if (data.message === "API rate limit exceeded") {
          this.setState({
            weather: {
              temp: {
                value: undefined,
              },
            },
            isLoading: false,
          });
        } else {
          this.setState({ weather: data, isLoading: false });
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.error("Error:" + err);
      });
    }
  }

  render() {
    return this.state.isLoading === false &&
      this.state.weather.temp.value !== undefined ? (
      <div id="weather">
        <div id="city">Current temperature in your location</div>
        <span id="temperature">
          {Math.round(this.state.weather.temp.value) + "°C"}
        </span>
      </div>
    ) : (
      <div id="weather">
        <span>{this.state.isLoading === true && this.state.enableLocation === true ? "Loading..." : this.state.enableLocation === false ? "Please provide location access!" : "Sorry! Some error occurred! Please try again!"}</span>
      </div>
    );
  }
}
