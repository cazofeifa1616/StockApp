import constants from '../action-types'
import suppliesApi from '../../api/supplies'
// import * as httpActions from '../http'

/**
 *
 * An example action creator
 * @param {object} payload - the payload the reducer should receive
 * @returns {object} - an action
 *
 */

export function receiveSupplies (supplies) {
  return {
    type: constants.RECEIVE_SUPPLIES,
    supplies
  }
}

export function receiveSupplyAmount (amount) {
  return {
    type: constants.RECEIVE_SUPPLY_AMOUNT,
    amount
  }
}

export function updateSupplySuccess (updatedSupply) {
  return {
    type: constants.UPDATE_SUPPLY_SUCCESS,
    updatedSupply
  }
}

export function addSupplySuccess (newSupply) {
  return {
    type: constants.ADD_SUPPLY,
    newSupply
  }
}

function receiveAlerts (alerts) {
  return {
    type: constants.RECEIVE_ALERTS,
    alerts
  }
}

/**
 *
 * An example asynchonous action to for API calls
 * @param {object} params - parameters for the API calls
 * @returns {Promise} - a result Promise
 *
 */

export function requestAlerts () {
  return receiveAlerts(suppliesApi.getAlertsFromSupplies())
}

 export function requestAllSupplies() {
   return receiveSupplies(suppliesApi.getAllSupplies())
   /*
    return (dispatch) => {
      return suppliesApi.getAllSupplies()
      .then(result => {
        dispatch(receiveSupplies({result}))
      }).catch(error => {
        throw(error)
      })
   }
   */
 }

 export function requestSupplyAmount (supplyCode) {
   const receive = suppliesApi.getSupplyAmount(supplyCode)
   return receiveSupplyAmount(receive[0])
   /*
    return (dispatch) => {
      return suppliesApi.getSupplyAmount(supplyCode)
      .then(result => {
        dispatch(receiveSupplyAmount({result}))
      }).catch(error => {
        throw(error)
      })
   }
   */
 }

 export function updateSupplyAmount (supplyCode) {
   return receiveSupplyAmount(suppliesApi.updateAmount(supplyCode))
 }

export function requestSuppliesPerCategory (categoryId) {
  return receiveSupplies(suppliesApi.getSuppliesPerCategory(categoryId))
  /*
   return (dispatch) => {
     return suppliesApi.getSuppliesPerCategory()
     .then(result => {
       dispatch(receiveSupplies({result}))
     }).catch(error => {
       throw(error)
     })
  }
  */
}

export function updateSupply(supply) {
  return updateSupplySuccess(suppliesApi.updateSupply(supply))
  /*
  return (dispatch) => {
    return suppliesApi.updateSupply(supply)
    .then(result => {
      dispatch(updateSupplySuccess(result))
    }).catch(error => {
      throw(error)
    })
  }
  */
}

export function addSupply(supply) {
  return addSupplySuccess(suppliesApi.addSupply(supply))
  /*
  return (dispatch) => {
    return suppliesApi.addSupply(supply)
    .then(result => {
      dispatch(addSupplySuccess(result))
    }).catch(error => {
      throw(error)
    })
  }
  */
}
