import React from 'react';
import LoginButton from './LoginButton';
import './login.css';
import logo from "../../logo_black.png";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from './Loading';

const Login = (props) => {

    const { isLoading, isAuthenticated } = useAuth0();

    if (isLoading) {
        return <Loading />
    }

    if (isAuthenticated) {
    props.history.push("/home");
    }

    return(
        <div id="login-box">
            <img id="logo" src={logo} alt="Armamentum_logo"></img>
            Welcome to Armamentum!
            <LoginButton />
        </div>
);
}

export default Login;