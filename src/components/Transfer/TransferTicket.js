import React from 'react';

const TransferTicket = ({page, concertName, ticketName, description, requestStatus}) => {
    return (
        <div className="transfer__ticket">
            <div className="transfer__ticket--left">
                <span className="transfer__ticket--title">{concertName} - {ticketName}</span>
                <span className="transfer__ticket--desc">{description}</span>
            </div>
            <span className="transfer__status">
{page === 'Propose' && requestStatus !== "denied" && requestStatus !== "pending" ? `Transferred to ${requestStatus}`: page + ' ' + requestStatus}
            </span>
        </div>
    );
};

export default TransferTicket;