import React from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import KakaoLogin from 'react-kakao-login';
import { connect } from 'react-redux';
import { getName } from 'actions/user';

import './Login.css';

class Login extends React.Component {
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
        console.log(accessToken);
        axios.post('https://kapi.kakao.com/v2/user/me',null,{
            headers : {
                'Authorization': `Bearer ${accessToken}`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': '*'
            }
        }).then((res) => {
            this.props.getName(res.data.properties.nickname);
        })
        const expires = new Date();
        expires.setDate(Date.now() + response.response.expires_in);
        cookie.save('accessToken', accessToken, { expires });
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