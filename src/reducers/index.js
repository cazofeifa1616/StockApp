import {combineReducers} from 'redux'
import categories from './categories/categories-reducer'
import supplies from './supplies/supplies-reducer'
import assets from './assets/assets-reducer'
import categoriesAssets from './categories-assets/categories-assets-reducer'
import reports from './reports/reports-reducer'
import login from './login'
import supplyAmounts from './supplies_amounts'
import alerts from './alerts'

const rootReducers = combineReducers({
  categories,
  supplies,
  assets,
  categoriesAssets,
  login,
  reports,
  supplyAmounts,
  alerts
})

export default rootReducers
