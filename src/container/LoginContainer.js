import React, { Component, Fragment } from 'react';
import Header from '../component/Header';
import Login from '../component/Login';

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