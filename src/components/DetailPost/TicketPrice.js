import React from 'react';

import './TicketPrice.css';

const TicketPrice = ({ticketLists}) => {
    const ticketsList = ticketLists.map(data => {

        return <div className="detail--concert--price--ticket" key={data.ticketName}>
            <div className="detail--concert--price--left">
                <span>{data.ticketName}</span>
                <span>KLY {data.ticketPrice}</span>
            </div>
            <span className={'detail--concert--price--right' + data.ticketAmount === 0 ? ' solded': ''}>{data.ticketAmount === 0 ? 'Sold out': data.ticketAmount + ' left'}</span>
        </div>
    })
    return (
        <div className="detail--concert--price--wrapper">
            <p className="detail--concert--price--title">Ticket Price</p>
            
            {ticketsList}
            {/* <div className="detail--concert--price--ticket">
                <div className="detail--concert--price--left"><span>Class B Ticket</span><span>KLY 15</span></div>
                <span className="detail--concert--price--right">25 left</span>
            </div>
            <div className="detail--concert--price--ticket solded">
                <div className="detail--concert--price--left"><span>Class C Ticket</span><span>KLY 10</span></div>
                <span className="detail--concert--price--right">Sold out</span>
            </div> */}
            <div className="detail--concert--transfer">
                <span>No tickets left?</span>
                <span>how about find a contract?</span>
            </div>
        </div>
    );
};

export default TicketPrice;