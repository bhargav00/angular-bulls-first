import {ADD_ACCOUNT} from '../constants/ActionTypes'
import InitialData from '../constants/InitialData';

export default function accounts (state = InitialData, action) {
  switch (action.type) {
    case ADD_ACCOUNT:
      return [
        ...state,
        {
          name: 'New Account',
          marketValue: 100,
          cash: 100,
          legend: 'cyan'
        }
      ]
    default:
      return state
  }
}
