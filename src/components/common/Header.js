import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <div className="header--wrapper">
            <Link to="/" className="header--logo">
                GRAPE</Link>
            <span className="header--button--list">
                <Link to="/singUp" className="header--button">Sign up</Link>
                <Link to="/login" className="header--button">Login</Link>
            </span>
        </div>
    );
};

export default Header;