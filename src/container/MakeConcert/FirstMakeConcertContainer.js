import React, { Component, Fragment } from 'react';

import FirstMakeConcert from '../../components/MakeConcert/FirstMakeConcert';

class FirstmakeConcertContainer extends Component {


    render() {
        return (
            <Fragment>
                <FirstMakeConcert incIndex={this.props.incIndex}/>
            </Fragment>
        );
    }
}

export default FirstmakeConcertContainer;