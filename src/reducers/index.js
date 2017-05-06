import {combineReducers} from 'redux'
import categories from './categories/categories-reducer'
import supplies from './supplies/supplies-reducer'
import assets from './assets/assets-reducer'
import categoriesAssets from './categories-assets/categories-assets-reducer'
import login from './login'

const rootReducers = combineReducers({
  categories,
  supplies,
  assets,
  categoriesAssets,
  login
})

export default rootReducers
