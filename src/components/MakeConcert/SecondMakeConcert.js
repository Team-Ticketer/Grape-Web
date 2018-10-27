import React from 'react';

import './SecondMakeConcert.scss';

const SecondMakeConcert = ({state, changeName, changeDescription, changeAmount, changePrice, changeTransferable, handleSave, ticketsList, incIndex}) => {
    return (
        <div className="second--wrapper">
            <div className="second--wrapper--inner">
                <p className="second--title">New Ticket</p>
                <div className="second--ticket--list">
                    {ticketsList}
                </div>
                <div className="second--form--wrapper">
                    <div className="second--form">
                        <span className="second--form--left--letter">
                            Ticket Name
                        </span>
                        <input type="text" value={state.ticketName} onChange={changeName} className="second--form--input"placeholder="Ticket Name"/>
                    </div>
                    <div className="second--form">
                        <span className="second--form--left--letter">
                            Description
                        </span>
                        <input type="text" value={state.description} onChange={changeDescription} className="second--form--input"placeholder="Description"/>
                    </div>
                    <div className="second--form">
                        <span className="second--form--left--letter">
                            Ticket amount
                        </span>
                        <input type="number" value={state.amount} onChange={changeAmount} className="second--form--input"placeholder="0"/>
                    </div>
                    <div className="second--form">
                        <span className="second--form--price">
                            <span className="second--form--left--letter">Ticket Price</span>
                            <span className="second--form--price--form">
                                <input type="number" className="second--form--price--input" value={state.price} placeholder="Price" onChange={changePrice}/> KLY
                            </span>
                        </span>
                    </div>
                    <div className="second--form">
                        <span></span>
                        <input type="button" value="Save" className="second--form--submit" onClick={handleSave}/>
                    </div>
                </div>
                <div className="second--inc--wrapper">
                    <button onClick={incIndex} className="second--inc--button">Next: Payment</button>
                </div>
            </div>
        </div>
    );
};

export default SecondMakeConcert;