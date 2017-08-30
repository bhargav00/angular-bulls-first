import expect from 'expect'
import * as types from '../../src/constants/ActionTypes'
import * as actions from '../../src/actions'

describe('bullsfirst actions', () => {
  it('addAccount should create ADD_ACCOUNT action', () => {
    expect(actions.addAccount()).toEqual({
      type: types.ADD_ACCOUNT
    })
  })
  })
