import constants from '../../actions/action-types'

const suppliesReducer = function(state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_SUPPLIES:
      return action.supplies
    case constants.UPDATE_SUPPLY_SUCCESS:
      return action.updatedSupply
    case constants.ADD_SUPPLY:
      return action.newSupply
    case constants.UPDATE_SUPPLY_AMOUNT_SUCCESS:
    return action.supplies
    default:
      return state
  }
}

export default suppliesReducer
