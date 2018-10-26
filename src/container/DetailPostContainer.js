import React, { Component, Fragment } from 'react';

import Header from '../components/common/Header';
import DetailPost from '../components/DetailPost/DetailPost';

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