import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Body/Login/Login";
import { Auth0Provider } from "@auth0/auth0-react";
import Layout from "./Layout";

export default function Routes() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.href}
    >
      <Switch>
        <Route path="/Armamentum/" component={Login} />
        <Route path="/Armamentum/home" component={Layout} />
      </Switch>
    </Auth0Provider>
  );
}
