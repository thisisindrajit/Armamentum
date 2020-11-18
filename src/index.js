import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

ReactDOM.render(
  <Auth0Provider
    domain="dev-crg4pmj4.us.auth0.com"
    clientId="KPXUmwO2B80UKf3AQIJqcUvCFrZ0pomS"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
