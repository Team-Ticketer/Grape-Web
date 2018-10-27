import {
  GET_NAME,
} from 'actions/actionTypes'

import { cav } from 'klaytn/caver'

const initialState = {
  name: null
}

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAME:
    console.log(action.payload)
      return {
        ...state,
        name: action.payload,
      }
    default:
      return state
  }
}

export default walletReducer
