// import fetch from 'isomorphic-fetch'
import constants from '../action-types'
import LoginApi from '../../api/login'
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

function localLoginFailure (errorMessage) {
  return {
    type: constants.FAILURE_LOCAL_LOGIN,
    errorMessage
  }
}

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

export function requestLocalLogin (username, password, push) {
  return dispatch => {
    const result = LoginApi.getUser(username, password)
    console.log(result)
    if (result === 0) {
      dispatch(localLoginFailure('Credenciales incorrectas'))
    } else if (result === 1) {
      dispatch(localLoginSuccess(push, {
        isSignedIn: true,
        isAdmin: false,
        userJwt: {}
      }))
    } else {
      dispatch(localLoginSuccess(push, {
        isSignedIn: true,
        isAdmin: true,
        userJwt: {}
      }))
    }
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
