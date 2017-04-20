import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import configureStore from './store/configureStore'
import {requestCategories} from './actions/categories'
import {requestAssetsCategories} from './actions/categories-assets'

const store = configureStore()

store.dispatch(requestCategories())
store.dispatch(requestAssetsCategories())

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.querySelector('#root'))
