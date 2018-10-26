import React, { Component, Fragment } from 'react';

import Header from '../components/Header';
import DetailPost from '../components/DetailPost';

class DetailPostContainer extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <DetailPost />
            </Fragment>
        );
    }
}

export default DetailPostContainer;