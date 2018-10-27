import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import Example from 'components/Example';
import MainContainer from './container/MainContainer';
import LoginContainer from './container/LoginContainer';
import DetailPostContainer from './container/DetailPostContainer';
import ConcertsContainer from './container/ConcertsContainer';


const renderRoutes = RootComponent => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <RootComponent>
          <Route path="/" component={MainContainer} exact/>
          <Route path="/login" component={LoginContainer} exact/>
          <Route path="/detail/:post" component={DetailPostContainer} exact/>
          <Route path="/concerts" component={ConcertsContainer} exact />
        </RootComponent>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default renderRoutes
