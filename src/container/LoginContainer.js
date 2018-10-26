import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

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