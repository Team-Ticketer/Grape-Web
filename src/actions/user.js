import {
  GET_NAME,
} from './actionTypes';

export const getName = (name) => ({
  type: GET_NAME,
  payload: name,
})