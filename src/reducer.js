import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import wallet from 'reducers/wallet'
import user from 'reducers/user'

const reducer = combineReducers({
  routing: routerReducer,
  wallet,
  user
})

export default reducer
