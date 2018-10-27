import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Transfer.scss';

class TransferPropose extends Component {
    render() {
        const {tickets} = this.props;
        return (
            <div className="transfer__wrapper">
                <div className="transfer__nav">
                    <Link to="/transfer/request" className="transfer__nav__item ">Transfer request</Link>
                    <Link to="/transfer/propose" className="transfer__nav__item transfer--clicked">Transfer propose</Link>
                </div>
                <div>{tickets}</div>
            </div>
        );
    }
}

export default TransferPropose;