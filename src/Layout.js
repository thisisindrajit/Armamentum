import React, { Component } from "react";
import "./layout.css";
// import TOPOLOGY from "vanta/dist/vanta.topology.min";
import Welcome from "./Body/Welcome/Welcome";
import logo from "./logo.png";

//Have uninstalled Vanta package since it took a lot of processing to render the background, making the website slow
class Layout extends Component {
  constructor() {
    super();
    this.state = {
      time: "",
    };
    //this.vantaRef = React.createRef();
  }

  tick = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  };

  componentDidMount() {
    // this.vantaEffect = TOPOLOGY({
    //   el: this.vantaRef.current,
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.0,
    //   minWidth: 200.0,
    //   scale: 1.0,
    //   scaleMobile: 1.0,
    //   color: 0xffc0,
    //   backgroundColor: 0x0,
    // });

    this.tick();
  }

  componentDidUpdate() {
    setInterval(this.tick, 1000);
  }

  // componentWillUnmount() {
  //   if (this.vantaEffect) this.vantaEffect.destroy();
  // }

  render() {
    return (
      <div id="bg">
        {/* logo and title */}
        <div id="titleandlogo">
          <img src={logo} alt="logo" id="logo"></img>
          <span id="title">ARMAMENTUM</span>
          <div id="time">
            <h2>{this.state.time}</h2>
          </div>
        </div>

        {/*body*/}
        <Welcome />
      </div>
    );
  }
}

export default Layout;
