import React from 'react';
import backImg from '../assets/login-img.jpg';

import './Login.css';

const Login = () => {
    return (
        <div className="login--wrapper">
            <img src={backImg} alt="background IMG" className="login--background--img"/>
            <div className="login--square">
            </div>
            <div className="login--form--inner--box">
                <p className="login--form--title">Log In</p>
                <input type="text" placeholder="ID" className="login--form--input"/>
                <input type="password" placeholder="Password" className="login--form--input"/>
                <input type="button" value="Log In" className="login--form--button"/>
                <p className="login--find--or--signup"><span>Forgot Password ?</span> | <span>Not Sing Up Yet ?</span></p>
            </div>
        </div>
    );
};

export default Login;