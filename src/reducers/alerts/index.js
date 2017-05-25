import constants from '../../actions/action-types'

const alertsReducer = function(state = {alerts: {}}, action) {
  switch (action.type) {
    case constants.RECEIVE_ALERTS:
      console.log(action.alerts)
      return action.alerts
    default:
      return state
    }
}

export default alertsReducer
