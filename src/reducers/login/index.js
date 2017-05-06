import constants from '../../actions/action-types'

const login = function (state = {session: undefined}, action) {
  switch (action.type) {
    case constants.SUCCESS_LOCAL_LOGIN:
      return {
        ...state,
        session: action.session
      }
    case constants.SUCCESS_LOCAL_LOGOUT:
      return {
        ...state,
        session: undefined
      }
    default:
      return state
  }
}

export default login
