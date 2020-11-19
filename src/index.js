import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./Body/Login/Login";

ReactDOM.render(
  <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.href}
    >
    <Login />
    </Auth0Provider>,
  document.getElementById("root")
);
