import React, { PureComponent } from "react";
import "./weather.css";

export default class Weather extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        weather:{},
        isLoading:true
    };
  }

  componentDidMount() {
    //for coimbatore

    let apikey = "wnyk8nvno3fgvSgIuM8Y9h490KONwYyW";

    let url = "https://api.climacell.co/v3/weather/realtime?lat=11.0168&lon=76.9558&unit_system=si&fields=temp&apikey=" + apikey;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          this.setState({weather:data, isLoading:false});
      })
      .catch((err) => console.error("Error:" + err));
  }

  render() {
    return this.state.isLoading === false ? <div id="weather"> 
      <span id="temperature">{Math.round(this.state.weather.temp.value) + "°C"}</span>
      <div id="city">Coimbatore, Tamil Nadu</div>
      </div>: <div></div>
  }
}
