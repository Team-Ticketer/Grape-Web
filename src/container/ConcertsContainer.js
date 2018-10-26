import React, { Component,Fragment } from 'react';

import Concerts from "../component/Concerts";


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