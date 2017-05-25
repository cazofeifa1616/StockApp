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
  return (dispatch) => {
    return categoriesApi.getAllCategories()
    .then(result => {
      result.json()
      .then(result2 => {
        dispatch(receiveCategories(result2.recordset))
      })            
    }).catch(error => {
      throw(error)
    })
  }
  */
  //--------------------------------------------------------
}

export function addCategory (category) {
  console.log("Entro a agregar action")
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
