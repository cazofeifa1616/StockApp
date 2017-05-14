// import fetch from 'isomorphic-fetch'
import constants from '../action-types'
// import * as httpActions from '../http'

/**
 *
 * An example action creator
 * @param {object} payload - the payload the reducer should receive
 * @returns {object} - an action
 *
 */

function localLoginSuccess (push, session) {
  push('/')
  return {
    type: constants.SUCCESS_LOCAL_LOGIN,
    session
  }
}

function localLogoutSuccess (push) {
  push('/login')
  return {
    type: constants.SUCCESS_LOCAL_LOGOUT
  }
}

/*
function failureLocalLogin (errorMessage) {
  return {
    type: constants.FAILURE_LOCAL_LOGIN
  }
}
*/

/**
 *
 * An example asynchonous action to for API calls
 * @param {object} params - parameters for the API calls
 * @returns {Promise} - a result Promise
 *
 */

// export function asynchronousExample (params) {
//   return (dispatch, getState) => {
//     return dispatch(httpActions.getResponse('static/json/airports.json'))
//     .then(result => {
//       dispatch(synchronousExample({result}))
//     })
//   }
// }

export function requestLocalLogout (userJwt, push) {
  return dispatch => {
    dispatch(localLogoutSuccess(push))
  }
}

export function requestLocalLogin (credentials, push) {
  return dispatch => {
    dispatch(localLoginSuccess(push, {
      jwt: {},
      isSignedIn: true,
      isAdmin: true
    }))
  }
  /*
  const request = new Request('http://localhost:3000/login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify({auth: credentials})
  })
  return dispatch => {
    return fetch(request)
    .then(response => { response.json() })
    .then(response => {
      if (!response.ok) {
        dispatch(failureLocalLogin(response.errorMessage))
      } else {
        // sessionStorage.setItem('jwt', response.jwt)
        dispatch(localLoginSuccess({
          jwt: response.jwt || {},
          isSignedIn: true
        }))
      }
    })
    .catch(error => {
      console.error('Error: ', error)
    })
  }
  */
}
