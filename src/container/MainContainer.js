import React, { Component } from 'react';
import Main from '../components/Main/Main';
import Discover from '../components/Main/Discover';
import Footer from '../components/Main/Footer';

import './TotalContainer.css';

class MainContainer extends Component {

    state = {
        concertName: '',
        artistName: '',
        Date: '',
        location: ''
    }

    render() {
        return (
            <div className="main--container">
                <Main />
                <Discover />
                <Footer />
            </div>
        );
    }
}

export default MainContainer;