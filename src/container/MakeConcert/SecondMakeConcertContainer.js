import React, { Component, Fragment } from 'react';


import SecondmakeConcert from '../../components/MakeConcert/SecondMakeConcert';

class SecondMakeConcertContainer extends Component {

    state = {
        ticketList: [],
        ticketName: '',
        description: '',
        amount: '',
        price: '',
        transferable: false
    }

    changeName = (e) => {
        this.setState({
            ticketName: e.target.value
        })
    }

    changeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    changeAmount = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    changePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    changeTransferable = () => {
        this.setState({
            transferable: !this.state.transferable
        })
    }

    handleSave = (obj) => {
        this.setState({
            ticketList: this.state.ticketList.concat({
                ticketName: this.state.ticketName,
                description: this.state.description,
                amount: this.state.amount,
                price: this.state.price,
                transferable: this.state.transferable
            }),
            ticketName: '',
            description: '',
            amount: '',
            price: '',
            transferable: false
        })
    }

    render() {
        const ticketsList = this.state.ticketList.map(data => {
        return <div className="second--ticket--wrapper">
            <span className="second--ticket--left">
                <span className="second--ticket--name">{data.ticketName}</span>
                <br />
                <span className="second--ticket--description">{data.description}</span>
            </span>
            <span className="second--ticket--right">
                <span className="second--ticket--Klay"><span className="second--ticket--number">{data.price}</span>KLY</span>
                <span className="second--ticket--transfer">{data.transferable ? 'Transferable': 'Not Transferable'}</span>
            </span>
        </div>
        })

        return (
            <Fragment>
                <SecondmakeConcert state={this.state} changeName={this.changeName} changeDescription={this.changeDescription} changeAmount={this.changeAmount} changePrice={this.changePrice} changeTransferable={this.changeTransferable} handleSave={this.handleSave} ticketsList={ticketsList} incIndex={this.props.incIndex}/>
            </Fragment>
        );
    }
}

export default SecondMakeConcertContainer;