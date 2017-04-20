import constants from '../action-types'
import categoriesAssetsApi from '../../api/categories-assets'
// import * as httpActions from '../http'

/**
 *
 * An example action creator
 * @param {object} payload - the payload the reducer should receive
 * @returns {object} - an action
 *
 */

export function receiveAssetsCategories (categoriesAssets) {
  return {
    type: constants.RECEIVE_ASSETS_CATEGORIES,
    categoriesAssets
  }
}


export function addAssetsCategorySuccess (categoriesAssets) {
  return {
    type: constants.ADD_CATEGORY_ASSETS,
    categoriesAssets
  }
}

/**
 *
 * An example asynchonous action to for API calls
 * @param {object} params - parameters for the API calls
 * @returns {Promise} - a result Promise
 *
 */

export function requestAssetsCategories () {
  return receiveAssetsCategories(categoriesAssetsApi.getAllAssetsCategories())
  /*
   return (dispatch) => {
     return categoriesApi.getAllCategories()
     .then(result => {
       dispatch(receiveCategories({result}))
     }).catch(error => {
       throw(error)
     })
  }
  */
}

export function addAssetsCategory (categoryAssets) {
  return addAssetsCategorySuccess(categoriesAssetsApi.addAssetsCategory(categoryAssets))
}