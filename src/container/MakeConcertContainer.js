import React, { Component, Fragment } from 'react';

import FirstMakeConcertContainer from './MakeConcert/FirstMakeConcertContainer';
import SecondMakeConcertContainer from './MakeConcert/SecondMakeConcertContainer';
import Payment from '../components/common/Payment';

import './TotalContainer.css';

class MakeConcertContainer extends Component {
    state = {
        index: 0
    }

    indexingPage = () => {
        if(this.state.index === 0) {
            return <FirstMakeConcertContainer incIndex={this.incIndex}/>
        }
        else if(this.state.index === 1) {
            return <SecondMakeConcertContainer incIndex={this.incIndex}/>
        }
        else if(this.state.index === 2) {
            return <Payment />
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

    render() {
        return (
            <Fragment>
                <p className="make--concert--title">Make Concert!</p>

                {this.indexingPage()}
            </Fragment>
        );
    }
}

export default MakeConcertContainer;