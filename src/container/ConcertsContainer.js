import React, { Component, Fragment } from 'react';

import Concerts from "../components/Concerts/Concerts";
import Header from '../components/common/Header';

class ConcertsContainers extends Component {
    render() {
        return (
            <Fragment>
                <Headers />
               <Concerts /> 
            </Fragment>
        );
    }
}

export default ConcertsContainers;