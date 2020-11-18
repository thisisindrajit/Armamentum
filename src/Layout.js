// import React, { PureComponent } from "react";
import React, { useState, useEffect } from "react";
import "./layout.css";
// import TOPOLOGY from "vanta/dist/vanta.topology.min";
import Welcome from "./Body/Welcome/Welcome";
import logo from "./logo.png";
import Notes from "./Body/Notes/Notes";
import Quote from "./Body/Quote/Quote";
import Weather from "./Body/Weather/Weather";
import Pictures from "./Body/Pictures/Pictures";
import Dictionary from "./Body/Dictionary/Dictionary";
import NumberFacts from "./Body/NumberFacts/NumberFacts";
import { useAuth0 } from "@auth0/auth0-react";

//Have uninstalled Vanta package since it took a lot of processing to render the background, making the website slow
// class Layout extends PureComponent {
//   constructor() {
//     super();
//     this.state = {
//       time: "",
//     };
//     //this.vantaRef = React.createRef();
//   }

//   tick = () => {
//     this.setState({ time: new Date().toLocaleTimeString() });
//   };

//   componentDidMount() {
//     // this.vantaEffect = TOPOLOGY({
//     //   el: this.vantaRef.current,
//     //   mouseControls: true,
//     //   touchControls: true,
//     //   gyroControls: false,
//     //   minHeight: 200.0,
//     //   minWidth: 200.0,
//     //   scale: 1.0,
//     //   scaleMobile: 1.0,
//     //   color: 0xffc0,
//     //   backgroundColor: 0x0,
//     // });

//     this.tick();
//   }

//   componentDidUpdate() {
//     setInterval(this.tick, 1000);
//   }

//   // componentWillUnmount() {
//   //   if (this.vantaEffect) this.vantaEffect.destroy();
//   // }

//   render() {

//     const { isAuthenticated } = useAuth0();

//     return (
//       isAuthenticated && <div id="bg">
//         {/* logo and title */}
//         <div id="titleandlogo">
//           <img src={logo} alt="logo" id="logo"></img>
//           <span id="title">ARMAMENTUM</span>
//           <div id="time">
//             <h2>{this.state.time}</h2>
//           </div>
//         </div>

//         {/*body*/}
//         <div id="body">
//         <Welcome />
//         <Quote />
//         <div id="widget-grid">
//             <div id="left-1">
//             <Weather />
//             <Dictionary />
//             <Pictures />
//             </div>
//             <div id="right-1">
//             <NumberFacts />
//             <Notes />
//             </div>
//         </div>
//         </div>

//       </div>
//     );
//   }
// }

const Layout = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    setInterval(tick, 1000);
  });

  const { user,isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    props.history.push("/");
  }

  return (
      <div id="bg">
        {/* logo and title */}
        <div id="titleandlogo">
          <img src={logo} alt="logo" id="logo"></img>
          <span id="title">ARMAMENTUM</span>
          <div id="time">
            <h2>{time}</h2>
          </div>
        </div>

        {/*body*/}
        <div id="body">
          <Welcome />
          <Quote />
          <div id="widget-grid">
            <div id="left-1">
              <Weather />
              <Dictionary />
              <Pictures />
            </div>
            <div id="right-1">
              <NumberFacts />
              <Notes name={user.name}/>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Layout;
