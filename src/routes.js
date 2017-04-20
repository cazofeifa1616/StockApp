import React from 'react'
import {Route, IndexRoute} from 'react-router'
import SuppliesPage from './pages/supplies'
import NotFound from './pages/not_found'
import SearchSupplyPage from './pages/search-supply'
import NewSupplyPage from './pages/new-supply'
import UpdateSupplyPage from './pages/update-supply'
import AssetsPage from './pages/assets'
import SearchAssetPage from './pages/search-asset'
import NewAssetPage from './pages/new-asset'
import UpdateAssetPage from './pages/update-asset'
import App from './components/app'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchSupplyPage} />
    <Route path="/search-supply" component={SearchSupplyPage} />
    <Route path="/supplies/:categoryId" component={SuppliesPage} />
    <Route path="/update-supply" component={UpdateSupplyPage} />
    <Route path="/new-supply" component={NewSupplyPage} />
    <Route path="/search-asset" component={SearchAssetPage} />
    <Route path="/assets/:categoryId" component={AssetsPage} />
    <Route path="/update-asset" component={UpdateAssetPage} />
    <Route path="/new-asset" component={NewAssetPage} />
    <Route path="*" component={NotFound} />
  </Route>
)
