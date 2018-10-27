import React, { Component } from 'react';

import UserInfo from './userInfo';
import TransferPropose from '../components/Transfer/TransferPropose'
import TransferTicket from '../components/Transfer/TransferTicket';

class TransferProposeContainer extends Component {
    state = {
        ticketList: [{concertName: 'Concert Name', ticketName: 'Ticket Name', description: 'Description blah blah blah blah', requestStatus: 'paper**'},{concertName: 'Concert Name', ticketName: 'Ticket Name', description: 'Description blah blah blah blah', requestStatus: 'denied'},{concertName: 'Concert Name', ticketName: 'Ticket Name', description: 'Description blah blah blah blah', requestStatus: 'pending'}]
    }

    render() {
        const { ticketList } = this.state;
        const tickets = ticketList.map(data => <TransferTicket page="Propose" concertName={data.concertName} ticketName={data.ticketName} description={data.description} requestStatus={data.requestStatus}/>)
        return (
            <UserInfo title="Transfer History">
                <div className="transfer--history">
                    <TransferPropose tickets=
                    {tickets}/>
                </div>
            </UserInfo>
        );
    }
}

export default TransferProposeContainer;