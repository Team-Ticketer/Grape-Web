import React from 'react';
import KakaoLogin from 'react-kakao-login';

import './Login.css';

const Login = () => {
    return (
        <div className="login--wrapper">
            <img src={`/images/login-img.jpg`} alt="background IMG" className="login--background--img"/>
            <div className="login--square">
            </div>
            <div className="login--form--inner--box">
                <p className="login--form--title">Log In</p>
                <KakaoLogin
                    jsKey={'4525eb5cc1c17c0cd6484762677e877d'}
                    //onSuccess={success}
                    //onFailure={failure}
                    
                >
                <input type="button" value="Log In" className="login--form--button"/>
                </KakaoLogin>
            </div>
        </div>
    );
};

export default Login;