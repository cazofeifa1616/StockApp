import constants from '../action-types'
import categoriesApi from '../../api/categories'
// import * as httpActions from '../http'

/**
 *
 * An example action creator
 * @param {object} payload - the payload the reducer should receive
 * @returns {object} - an action
 *
 */

export function receiveCategories (categories) {
  return {
    type: constants.RECEIVE_CATEGORIES,
    categories
  }
}

export function addCategorySuccess (categories) {
  return {
    type: constants.ADD_CATEGORY,
    categories
  }
}

/**
 *
 * An example asynchonous action to for API calls
 * @param {object} params - parameters for the API calls
 * @returns {Promise} - a result Promise
 *
 */

export function requestCategories () {
  return receiveCategories(categoriesApi.getAllCategories())
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

export function addCategory (category) {
  return addCategorySuccess(categoriesApi.addCategory(category))
  /*
   return (dispatch) => {
     return categoriesApi.addCategory(category)
     .then(result => {
       dispatch(addCategorySuccess({result}))
     }).catch(error => {
       throw(error)
     })
  }
  */
}
