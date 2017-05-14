import constants from '../../actions/action-types'

const suppliesAmountsReducer = function(state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_SUPPLY_AMOUNT:
      return action.amount
    default:
      return state
  }
}

export default suppliesAmountsReducer
