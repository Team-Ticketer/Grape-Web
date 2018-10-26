import React, { Component } from 'react';
import './App.css';

import MainContainer from './container/MainContainer';
import LoginContainer from './container/LoginContainer';
import DetailPostContainer from './container/DetailPostContainer';
import ConcertsContainer from './container/ConcertsContainer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MainContainer} exact/>
            <Route path="/login" component={LoginContainer} exact/>
            <Route path="/detail/:post" component={DetailPostContainer} exact/>
            <Route path="/concerts" component={ConcertsContainer} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
