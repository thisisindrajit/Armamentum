import React from 'react';
import LoginButton from './LoginButton';
import './login.css';
import logo from "../../logo_black.png";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from './Loading';
import Layout from '../../Layout';

const Login = (props) => {

    const { isLoading, isAuthenticated } = useAuth0();

    if (isLoading) {
        return <Loading />
    }

    if (isAuthenticated) {
        return <Layout />
    }

    return(
        <div id="login-box">
            <img id="logo" src={logo} alt="Armamentum_logo"></img>
            Welcome to Armamentum!
            <LoginButton />

            <span id="details">Armamentum is a custom new tab made by Indrajit. It's one of his dream personal projects. <a href="https://thisisindrajit.github.io/portfolio" target="_blank" rel="noopener noreferrer">Click here</a> to view his portfolio!</span>
        </div>
);
}

export default Login;