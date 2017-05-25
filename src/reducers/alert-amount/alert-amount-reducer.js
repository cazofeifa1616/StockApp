import constants from '../../actions/action-types'

const alertsAmountReducer = function(state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_AMOUNT_ALERTS:
      return action.amountAlerts

    default:
      return state
    }
}

export default alertsAmountReducer
