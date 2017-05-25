import React from 'react'
import {Route} from 'react-router'
import SuppliesPage from './pages/supplies'
import NotFound from './pages/not_found'
import SearchSupplyPage from './pages/search-supply'
import NewSupplyPage from './pages/new-supply'
import UpdateSupplyPage from './pages/update-supply'
import AssetsPage from './pages/assets'
import SearchAssetPage from './pages/search-asset'
import NewAssetPage from './pages/new-asset'
import UpdateAssetPage from './pages/update-asset'
import ConsumeSuppliesPage from './pages/consume_supply'
import Login from './pages/login'
import SessionValidator from './components/session_validator'
import Report from './pages/reports'
import AlertPage from './pages/alerts'

export default (
  <div>
    <Route path="/login" component={Login} />
    <Route component={SessionValidator}>
      <Route path="/" component={SearchSupplyPage} />
      <Route path="/search-supply" component={SearchSupplyPage} />
      <Route path="/supplies/:categoryId" component={SuppliesPage} />
      <Route path="/update-supply" component={UpdateSupplyPage} />
      <Route path="/new-supply" component={NewSupplyPage} />
      <Route path="/search-asset" component={SearchAssetPage} />
      <Route path="/assets/:categoryId" component={AssetsPage} />
      <Route path="/update-asset" component={UpdateAssetPage} />
      <Route path="/new-asset" component={NewAssetPage} />
      <Route path="/consume_supply" component={ConsumeSuppliesPage} />
      <Route path="/report/:reportType" component={Report} />
      <Route path="/alert" component={AlertPage}/>
    </Route>
    <Route path="*" component={NotFound} />
  </div>
)
