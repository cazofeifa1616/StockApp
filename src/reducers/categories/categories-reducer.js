import constants from '../../actions/action-types'

const categoriesReducer = function(state = {}, action) {
  switch(action.type) {
    case constants.RECEIVE_CATEGORIES:
      return action.categories
    case constants.ADD_CATEGORY:
      return action.categories
    default:
      return state
  }
}

export default categoriesReducer
