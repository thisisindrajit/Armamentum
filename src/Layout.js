// import React, { PureComponent } from "react";
// import TOPOLOGY from "vanta/dist/vanta.topology.min";
import React, { useState, useEffect } from "react";
import "./layout.css";
import Welcome from "./Body/Welcome/Welcome";
import logo from "./logo.png";
import Notes from "./Body/Notes/Notes";
import Quote from "./Body/Quote/Quote";
import Weather from "./Body/Weather/Weather";
import Pictures from "./Body/Pictures/Pictures";
//import Dictionary from "./Body/Dictionary/Dictionary";
import GDictionary from "./Body/GDictionary/GDictionary";
import NumberFacts from "./Body/NumberFacts/NumberFacts";
import QuickLinks from "./Body/QuickLinks/QuickLinks";
import NYT from "./Body/NYT/NYT";
import GuardianNews from "./Body/Guardian/Guardian";
import Logout from "./Body/Login/Logout";
import Loading from "./Body/Login/Loading";
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
  const [optionsboxopen, setoptionsboxopen] = useState(false);
  const [wallpaperloaded, setWallpaperLoaded] = useState(false);

  //setting wallpaper type for the first time
  if (!localStorage.hasOwnProperty("bg-type")) {
    localStorage.setItem("bg-type", "wallpaper");
  }

  const [wallpapertype, setwallpapertype] = useState(
    localStorage.getItem("bg-type")
  );

  useEffect(() => {
    if (wallpapertype === "wallpaper") {
      fetch("https://picsum.photos/1920/1080?random=6").then((data) => {
        document.body.style.backgroundImage =
          'linear-gradient(to top, rgba(23, 32, 42, 0.20), rgba(0, 0, 0, 0.80)), url("' +
          data.url +
          '")';
        setWallpaperLoaded(true);
      });
    } else {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "#050505";
    }
  }, [wallpapertype]);

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  const toggleoptionsbox = () => {
    const optionslist = document.getElementById("options-list");

    if (!optionsboxopen) {
      optionslist.style.animation =
        "slide-down 0.25s cubic-bezier(.08,.5,.66,1) forwards";
      optionslist.style.display = "block";
    } else {
      optionslist.style.display = "none";
    }

    setoptionsboxopen(!optionsboxopen);
  };

  const togglewallpaper = () => {
    if (wallpapertype === "wallpaper") {
      localStorage.setItem("bg-type", "none");
      setwallpapertype("none");
    } else {
      localStorage.setItem("bg-type", "wallpaper");
      setwallpapertype("wallpaper");
    }
  };

  useEffect(() => {
    setInterval(tick, 1000);
  });

  const { user } = useAuth0();

  // console.log(user);

  return wallpaperloaded || wallpapertype === "none" ? (
    <div id="bg">
      {/* logo and title */}
      <div id="titleandlogo">
        <img src={logo} alt="logo" id="logo"></img>
        <span id="title">ARMAMENTUM</span>
        <div id="time">
          <h2>{time}</h2>
        </div>
        <div id="options-box">
          <img
            src={user.picture}
            alt="profile_picture"
            onClick={toggleoptionsbox}
          ></img>
        </div>
      </div>
      <div id="holder">
        <div id="options-list">
          <div onClick={togglewallpaper}>
            {wallpapertype === "wallpaper"
              ? "No Wallpaper"
              : "Random Wallpaper"}
          </div>
          <div>
            <Logout />
          </div>
        </div>
      </div>

      {/*body*/}
      <div id="body">
        <Welcome />
        <Quote />
        <div id="widget-grid">
          <div id="left-1">
            <Weather />
            <QuickLinks />
            {/* <Dictionary /> */}
            <GDictionary />
            <GuardianNews />
            <Pictures />
          </div>
          <div id="right-1">
            <NumberFacts />
            <NYT />
            <Notes user={user} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Layout;
