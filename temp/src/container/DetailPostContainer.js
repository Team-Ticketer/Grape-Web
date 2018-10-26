import React, { Component, Fragment } from 'react';

import Header from '../component/Header';
import DetailPost from '../component/DetailPost';

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