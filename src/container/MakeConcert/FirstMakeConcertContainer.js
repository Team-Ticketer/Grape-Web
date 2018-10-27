import React, { Component, Fragment } from 'react';

import FirstMakeConcert from '../../components/MakeConcert/FirstMakeConcert';

class FirstmakeConcertContainer extends Component {

    state ={
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
        personalAgree: false
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

    render() {
        return (
            <Fragment>
                <FirstMakeConcert incIndex={this.props.incIndex} changeOrgName={this.changeOrgName} changeOrgEmail={this.changeOrgEmail} changeOrgDesc={this.changeOrgDesc} changeConcertName={this.changeConcertName} changeArtistName={this.changeArtistName} changeStartYY={this.changeStartYY} changeStartMM={this.changeStartMM} changeStartDD={this.changeStartDD} changeEndYY={this.changeEndYY} changeEndMM={this.changeEndMM} changeEndDD={this.changeEndDD} changeYoutubeUri={this.changeYoutubeUri} changeLocation={this.changeLocation} changeFile={this.changeFile} changeSpecificInfo={this.changeSpecificInfo} changePersonalAgree={this.changePersonalAgree} state={this.state}/>
            </Fragment>
        );
    }
}

export default FirstmakeConcertContainer;