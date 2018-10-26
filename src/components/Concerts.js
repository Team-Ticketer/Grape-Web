import React from 'react';

import Header from "./Header";

import './Concerts.css';

const Concerts = () => {
    return (
        <div className="concerts--wrapper">
            <Header />
            <div className="concerts--search--wrapper">
                <div className="concerts--search--form">

                </div>
                <div className="concerts--search--btn--wrapper">
                    <img src={`/images/search.png`} alt="search" className="concerts--search--btn"/>
                </div>
            </div>
        </div>
    );
};

export default Concerts;