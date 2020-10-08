import React from "react";
import "./layout.css";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import Welcome from "./Body/Welcome/Welcome";
import logo from "./logo.png";

class Layout extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = TOPOLOGY({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xe3ff,
      backgroundColor: 0x0,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <div ref={this.vantaRef} id="bg">
        {/*logo and title*/}
        <div id="titleandlogo">
          <img src={logo} alt="logo" id="logo"></img>
          <span id="title">ARMAMENTUM</span>
        </div>

        {/*body*/}
        <Welcome />
      </div>
    );
  }
}

export default Layout;
