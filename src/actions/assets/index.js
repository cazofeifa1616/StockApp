import constants from '../action-types'
import assetsApi from '../../api/assets'
import sampleAssets from '../../static/json/sample-assets' 
// import * as httpActions from '../http'

/**
 *
 * An example action creator
 * @param {object} payload - the payload the reducer should receive
 * @returns {object} - an action
 *
 */

export function receiveAssets (assets) {
  return {
    type: constants.RECEIVE_ASSETS,
    assets
  }
}

/**
 *
 * An example asynchonous action to for API calls
 * @param {object} params - parameters for the API calls
 * @returns {Promise} - a result Promise   
 *
 */

 export function updateAssetSuccess (updatedAsset) {
  
  return {
    type: constants.UPDATE_ASSET_SUCCESS,
    updatedAsset
  }
}

export function addAssetSuccess (newAsset) {
  return {
    type: constants.ADD_ASSET,
    newAsset
  }
}


export function requestAssetsPerCategory (categoryId) {
  var assets = []
  Object.keys(sampleAssets).filter(key => sampleAssets[key].categoryCode === +categoryId)
  .map(key => assets.push(sampleAssets[key]))
  return receiveAssets(assets)
}

export function requestAllAssets() {
   return receiveAssets(assetsApi.getAllAssets())
}
  /*
  console.log('entra request')
   return (dispatch) => {
     return categoriesApi.getAllCategories()
     .then(result => {
       dispatch(receiveCategories({result}))
     }).catch(error => {
       throw(error)
     })
  }
  */

  export function updateAsset(asset) {
  return updateAssetSuccess(assetsApi.updateAsset(asset))
}

export function addAsset(asset) {
  return addAssetSuccess(assetsApi.addAsset(asset))
}