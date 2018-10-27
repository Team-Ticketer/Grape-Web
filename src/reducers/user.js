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
      const name = action.payload.name;
      return {
        ...state,
        name,
      }
    default:
      return state
  }
}

export default walletReducer
