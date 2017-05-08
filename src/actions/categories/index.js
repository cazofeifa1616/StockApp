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

  //--------------------------------------------------------
  //Conexión a base de datos
  /*
  console.log('entra request')
  return (dispatch) => {
    return categoriesApi.getAllCategories()
    .then(result => {
      console.log('Trajo request')
      console.log(result)
      dispatch(receiveCategories({result}))
      console.log('Salio request')
    }).catch(error => {
      console.log('Error')
      throw(error)
    })
  }
  */
  //--------------------------------------------------------
}

export function addCategory (category) {
  return addCategorySuccess(categoriesApi.addCategory(category))
  /*
  //--------------------------------------------------------
  //Conexión a base de datos  
   return (dispatch) => {
     return categoriesApi.addCategory(category)
     .then(result => {
      console.log('Trajo request 2')
      console.log(result)
       dispatch(addCategorySuccess({result}))
     }).catch(error => {
       throw(error)
     })
  }
  */
  //--------------------------------------------------------
}
