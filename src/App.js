import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import BlockNumber from 'components/BlockNumber'
import Auth from 'components/Auth'

import * as walletActions from 'actions/wallet'
import MainContainer from './container/MainContainer';
import LoginContainer from './container/LoginContainer';
import DetailPostContainer from './container/DetailPostContainer';
import ConcertsContainer from './container/ConcertsContainer';

import './App.scss'

class App extends Component {
  componentWillMount() {
    const { walletInstance, loadWallet } = this.props;
    const walletFromSession = sessionStorage.getItem('walletInstance')

    if (walletFromSession) {
      loadWallet(JSON.parse(walletFromSession))
    }
  }

  render() {
    return (
      <div className="App">
        <BlockNumber />
        <Auth />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MainContainer} exact/>
            <Route path="/login" component={LoginContainer} exact/>
            <Route path="/detail/:post" component={DetailPostContainer} exact/>
            <Route path="/concerts" component={ConcertsContainer} exact />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadWallet: (walletInstance) => dispatch(walletActions.loadWallet(walletInstance)),
})

export default connect(
  null,
  mapDispatchToProps,
)(App)
