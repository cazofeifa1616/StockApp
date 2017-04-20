import constants from '../../actions/action-types'

const categoriesAssetsReducer = function(state = {}, action) {
  switch(action.type) {
    case constants.RECEIVE_ASSETS_CATEGORIES:
      return action.categoriesAssets
    case constants.ADD_CATEGORY_ASSETS:
      return action.categoriesAssets
    default:
      return state
  }
}

export default categoriesAssetsReducer