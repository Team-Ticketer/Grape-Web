import React, { Component } from 'react';

import UserInfo from './userInfo';
import TransferRequest from '../components/Transfer/TransferRequest'
import TransferTicket from '../components/Transfer/TransferTicket';

class TransferRequestContainer extends Component {
    state = {
        ticketList: [{concertName: 'Concert Name', ticketName: 'Ticket Name', description: 'Description blah blah blah blah', requestStatus: 'accepted'},{concertName: 'Concert Name', ticketName: 'Ticket Name', description: 'Description blah blah blah blah', requestStatus: 'denied'},{concertName: 'Concert Name', ticketName: 'Ticket Name', description: 'Description blah blah blah blah', requestStatus: 'pending'}]
    }

    render() {
        const { ticketList } = this.state;
        const tickets = ticketList.map(data => <TransferTicket page="Request" concertName={data.concertName} ticketName={data.ticketName} description={data.description} requestStatus={data.requestStatus}/>)
        return (
            <UserInfo title="Transfer History">
                <div className="transfer--history">
                    <TransferRequest tickets=
                    {tickets}/>
                </div>
            </UserInfo>
        );
    }
}

export default TransferRequestContainer;