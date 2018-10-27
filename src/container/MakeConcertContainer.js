import React, { Component, Fragment } from 'react';

import FirstMakeConcert from '../components/MakeConcert/FirstMakeConcert';
import SecondmakeConcert from '../components/MakeConcert/SecondMakeConcert';
import Payment from '../components/common/Payment';
import { cav } from 'klaytn/caver';
import { getWallet } from 'utils/wallet'
import './TotalContainer.css';

class MakeConcertContainer extends Component {
    constructor() {
        super()
        // ** 1. Create contract instance **
        // ex:) new cav.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
        // You can call contract method through this instance.
        // Now you can access the instance by `this.exampleContract` variable.
        this.Contract = DEPLOYED_ABI
          && DEPLOYED_ADDRESS
          && new cav.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
        this.state = {
            count: '',
            index: 0,
            isSetting: false,
            isLoding: false,
            orgName: '',
            orgEmail: '',
            orgDesc: '',
            concertName: '',
            artistName: '',
            startYY: 2018,
            startMM: 10,
            startDD: 28,
            endYY: 2018,
            endMM: 10,
            endDD: 28,
            youtubeUri: '',
            location: '',
            file: '',
            specificInfo: '',
            //
            personalAgree: false,
            ticketList: [],
            ticketName: '',
            description: '',
            amount: '',
            price: '',
            transferable: false
        }
    }

    render() {
        return (
            <Fragment>
                <p className="make--concert--title">Make Concert!</p>
                {this.indexingPage()}
            </Fragment>
        );
    }

    sendTranstion() {
        const { transferable, ticketList } = this.state;
        const {history} = this.props;
        history.push('/');
        let ticketName = [];
        let ticketPrice = [];
        let ticketDescription  = [];
        let ticketAmount = [];
        for (let index = 0; index < ticketList.length; index++) {
            ticketName[index] = ticketList[index].ticketName;
            ticketPrice[index] = ticketList[index].ticketPrice;
            ticketDescription[index] = ticketList[index].ticketDescription;
            ticketAmount[index] = ticketList[index].ticketAmount;
        }
        const walletInstance = getWallet()
        if (!walletInstance) return
        this.Contract.methods.createConcert(
            transferable,
            ticketList.length,
            ticketName,
            ticketPrice,
            ticketDescription,
            ticketAmount
        ).send({
            from: walletInstance.address,
            gas: cav.utils.toPeb('1', 'KLAY'),
          })
            .once('transactionHash', console.log)
            .once('receipt', () => {
              this.getCount()
            })
            .once('error', console.log)
    }

    changeOrgName = (e) => {
        this.setState({
            orgName: e.target.value
        });
    }

    changeOrgEmail = (e) => {
        this.setState({
            orgEmail: e.target.value
        });
    }

    changeOrgDesc = (e) => {
        this.setState({
            orgDesc: e.target.value
        });
    }

    changeConcertName = (e) => {
        this.setState({
            concertName: e.target.value
        });
    }

    changeArtistName = (e) => {
        this.setState({
            artistName: e.target.value
        });
    }

    changeStartYY = (e) => {
        this.setState({
            startYY: e.target.value
        });
    }

    changeStartMM = (e) => {
        this.setState({
            startMM: e.target.value
        });
    }

    changeStartDD = (e) => {
        this.setState({
            startDD: e.target.value
        });
    }

    changeEndYY = (e) => {
        this.setState({
            endYY: e.target.value
        });
    }

    changeEndMM = (e) => {
        this.setState({
            endMM: e.target.value
        });
    }

    changeEndDD = (e) => {
        this.setState({
            endDD: e.target.value
        });
    }

    changeYoutubeUri = (e) => {
        this.setState({
            youtubeUri: e.target.value
        });
    }

    changeLocation = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    changeFile = (e) => {
        this.setState({
            file: e.target.value
        });
    }

    changeSpecificInfo = (e) => {
        this.setState({
            specificInfo: e.target.value
        });
    }

    changePersonalAgree = (e) => {
        this.setState({
            personalAgree: e.target.value
        })
    }

    indexingPage = () => {
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
        if(this.state.index === 0) {
            return <FirstMakeConcert incIndex={this.incIndex} changeOrgName={this.changeOrgName} changeOrgEmail={this.changeOrgEmail} changeOrgDesc={this.changeOrgDesc} changeConcertName={this.changeConcertName} changeTransferable={this.changeTransferable} changeArtistName={this.changeArtistName} changeStartYY={this.changeStartYY} changeStartMM={this.changeStartMM} changeStartDD={this.changeStartDD} changeEndYY={this.changeEndYY} changeEndMM={this.changeEndMM} changeEndDD={this.changeEndDD} changeYoutubeUri={this.changeYoutubeUri} changeLocation={this.changeLocation} changeFile={this.changeFile} changeSpecificInfo={this.changeSpecificInfo} changePersonalAgree={this.changePersonalAgree} state={this.state}/>
        }
        else if(this.state.index === 1) {
            return <SecondmakeConcert state={this.state} changeName={this.changeName} changeDescription={this.changeDescription} changeAmount={this.changeAmount} changePrice={this.changePrice}  handleSave={this.handleSave} ticketsList={ticketsList} incIndex={this.incIndex}/>
        }
        else if(this.state.index === 2) {
            return <Payment sendTranstion={this.sendTranstion.bind(this)}/>
        }
    }

    incIndex = () => {
        this.setState({
            index : this.state.index + 1
        })
    }

    decIndex = () => {
        this.setState({
            index : this.state.index - 1
        })
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
}

export default MakeConcertContainer;