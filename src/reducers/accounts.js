import {ADD_ACCOUNT} from '../constants/ActionTypes'
import InitialData from '../constants/InitialData';

export default function accounts (state = InitialData, action) {
  switch (action.type) {
    case ADD_ACCOUNT:
      return [
        {
          name: 'New Account',
          marketValue: Math.random() * 100000,
          cash: Math.random() * 400000,
          legend: '#' + (Math.random().toString(16) + "000000").substring(2,8)
        },
        ...state
      ]
    default:
      return state
  }
}
