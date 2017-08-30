import expect from 'expect'
import accounts from '../../src/reducers/accounts'
import * as types from '../../src/constants/ActionTypes'
import InitialData from '../../src/constants/InitialData';

describe('bullsfirst reducer', () => {
  it('should handle initial state', () => {
    expect(
      accounts(undefined, {})
    ).toEqual(InitialData)
  })

  it('should handle ADD_ACCOUNT', () => {
    var resultData = InitialData.slice();
    resultData.push(
      {
        name: 'New Account',
        marketValue: 100,
        cash: 100,
        legend: 'cyan'
      }
    );
    expect(
      accounts(InitialData, {
          type: types.ADD_ACCOUNT
        })
    ).toEqual(resultData)
  })
})
