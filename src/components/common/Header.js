import React from 'react';
import { Link } from "react-router-dom";
import cookie from 'react-cookies';

import './Header.css';

class Header extends React.Component {
    state = {
        name: null,
        userModal: false,
    }
    componentDidMount() {
        if(localStorage.getItem('name') && cookie.load('accessToken')) {
            this.setState({name: localStorage.getItem('name')})
        } else {
            localStorage.clear('name');
            cookie.remove('accessToken');
        }
    }
    render() {
        return (
            <div className="header--wrapper">
                <Link to="/" className="header--logo">
                    GRAPE</Link>
                <span className="header--button--list">
                    {this.state.name === null ? <Link to="/login" className="header--button">Login</Link> : <span className="header--button">{this.state.name} 님</span>}
                </span>
            </div>
        );
    }
};

export default Header;