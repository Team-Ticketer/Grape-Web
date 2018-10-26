import React from 'react';
import './Main.css';


const Main = () => {
    let dt = new Date()
    return (
        <div className="main--wrapper">
            <img src={`/images/concert-idol.png`} alt="" className="main--background-img"/>
            <span className="main--title">> Let's Pick <span className="main--title--underbar">Grape</span>!</span>
            <div className="main--ticket--wrapper">
                <div className="main--ticket--input">
                    <p className="main--ticket--title">TICKETER
                    <span className="main--ticket--date">{dt.getFullYear() + '-' + ((dt.getMonth() + 1 > 10) ? dt.getMonth() + 1: dt.getMonth() + 1) + '-' + ((dt.getDate() > 10) ? dt.getDate(): dt.getDate())}</span>
                    </p>
                    <div className="main--ticket--name--wrapper">
                        <div className="main--ticket--name--empty"></div>
                        <div className="main--ticket--name--form">
                            <input type="text" id="main--ticket--name--input" placeholder="Concert Name"/>
                        </div>
                        <div className="main--ticket--name--empty"></div>
                    </div>
                    <div className="main--ticket--form--wrapper">
                        <div className="main--ticket--form--box">
                            <div className="main--ticket--form--box--inner">
                                <input type="text" className="main--ticket--form--input" placeholder="Artist Name"/>
                            </div>
                        </div>
                        <div className="main--ticket--form--box">
                            <div className="main--ticket--form--box--inner">
                                <input type="text" className="main--ticket--form--input" placeholder="Date"/>
                            </div>
                        </div>
                        <div className="main--ticket--form--box">
                            <div className="main--ticket--form--box--inner">
                                <input type="text" className="main--ticket--form--input" placeholder="Price"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main--ticket--submit">
                    <div className="main--ticket--submit--box">
                        <div className="main--ticket--submit--box--inner">
                            <div className="main--ticket--submit--empty"></div>
                            <div className="main--ticket--submit--button">
                                <img src={`/images/search.png`} alt="search button" className="main--ticket--submit--button--img"/>
                            </div>
                            <div className="main--ticket--submit--empty"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;