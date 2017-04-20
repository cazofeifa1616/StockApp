import constants from '../../actions/action-types'

const assetsReducer = function(state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_ASSETS:
      return action.assets
    case constants.UPDATE_ASSET_SUCCESS:
      return action.updatedAsset
    case constants.ADD_ASSET:
      return action.newAsset
    default:
      return state
  }
}

export default assetsReducer