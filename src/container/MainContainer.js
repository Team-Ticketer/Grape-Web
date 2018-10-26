import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import DiscoverContainer from './DiscoverContainer';
import Footer from '../components/Footer';

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