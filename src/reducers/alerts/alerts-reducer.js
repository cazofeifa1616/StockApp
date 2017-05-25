import constants from '../../actions/action-types'

const alertsReducer = function(state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_ALL_ALERTS:
      return action.alerts
    default:
      return state
    }
}

export default alertsReducer
