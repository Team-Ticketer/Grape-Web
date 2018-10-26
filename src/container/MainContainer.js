import React, { Component } from 'react';
import Header from '../components/common/Header';
import Main from '../components/Main/Main';
import Discover from '../components/Main/Discover';
import Footer from '../components/Main/Footer';

import './MainContainer.css';

class MainContainer extends Component {

    render() {
        return (
            <div className="main-container">
                <Header />
                <Main />
                <Discover />
                <Footer />
            </div>
        );
    }
}

export default MainContainer;