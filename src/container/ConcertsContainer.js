import React, { Component,Fragment } from 'react';

import Concerts from "../components/Concerts";


class ConcertsContainers extends Component {
    render() {
        return (
            <Fragment>
               <Concerts /> 
            </Fragment>
        );
    }
}

export default ConcertsContainers;