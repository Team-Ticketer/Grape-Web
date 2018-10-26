import React from 'react';

import './TicketPrice.css';

const TicketPrice = () => {
    return (
        <div className="detail--concert--price--wrapper">
                            <p className="detail--concert--price--title">Ticket Price</p>
                            <div className="detail--concert--price--ticket">
                                <div className="detail--concert--price--left"><span>Class A Ticket</span><span>KLY 20</span></div>
                                <span className="detail--concert--price--right">5 left</span>
                            </div>
                            <div className="detail--concert--price--ticket">
                                <div className="detail--concert--price--left"><span>Class B Ticket</span><span>KLY 15</span></div>
                                <span className="detail--concert--price--right">25 left</span>
                            </div>
                            <div className="detail--concert--price--ticket solded">
                                <div className="detail--concert--price--left"><span>Class C Ticket</span><span>KLY 10</span></div>
                                <span className="detail--concert--price--right">Sold out</span>
                            </div>
                            <input type="button" value="No Tickets Left ?" className="detail--concert--price--submit"/>
                        </div>
    );
};

export default TicketPrice;