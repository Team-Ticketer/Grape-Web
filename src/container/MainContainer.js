import React, { Component } from 'react';
import Header from '../component/Header';
import Main from '../component/Main';
import DiscoverContainer from './DiscoverContainer';
import Footer from '../component/Footer';

import './MainContainer.css';

class MainContainer extends Component {

    render() {
        return (
            <div className="main-container">
                <Header />
                <Main />
                <DiscoverContainer />
                <Footer />
            </div>
        );
    }
}

export default MainContainer;