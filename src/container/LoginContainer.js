import React, { Component, Fragment } from 'react';
import Header from '../components/common/Header';
import Login from '../components/Login/Login';

class LoginContainer extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Login />
            </Fragment>
        );
    }
}

export default LoginContainer;