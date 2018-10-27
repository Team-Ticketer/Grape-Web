import React from 'react';
import cookie from 'react-cookies';
import KakaoLogin from 'react-kakao-login';
import { connect } from 'react-redux';
import { getName } from 'actions/user';
import { Redirect } from 'react-router-dom'

import './Login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }
    render() {
        return (
            <div className="login--wrapper">
                <img src={`/images/login-img.jpg`} alt="background IMG" className="login--background--img"/>
                <div className="login--square">
                </div>
                <div className="login--form--inner--box">
                    <p className="login--form--title">Log In</p>
                    <KakaoLogin
                        jsKey={'4525eb5cc1c17c0cd6484762677e877d'}
                        onSuccess={this.success}
                        onFailure={this.failure}
                        render={(props) => <input type="button" value="Log In" onClick={() => {props.onClick();}} className="login--form--button"/>}
                    >
                    </KakaoLogin>
                </div>
            </div>
        );
    }
    success(response) {
        const accessToken = response.response.access_token;
        const expires = new Date();
        expires.setDate(Date.now() + response.response.expires_in);
        cookie.save('accessToken', accessToken, { expires });
        Kakao.API.request({
            url: '/v2/user/me',
            success: (result) => {
                localStorage.setItem('name', result.properties.nickname)
                return location.href = '/payment'
            }
        });
    }
    failure(error) {
        console.log(error);
    }
};

function mapDispatchToProps(dispatch) {
    return {
        getName: (name) => dispatch(getName(name)),
    }
}

export default connect(null, mapDispatchToProps)(Login);