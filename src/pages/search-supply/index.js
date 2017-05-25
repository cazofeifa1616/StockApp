import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SearchSupplyLayout from './layout'
import App from '../../components/app'
import * as suppliesCategories from '../../actions/categories'
import * as suppliesActions from '../../actions/supplies'

class SearchSupplyPage extends Component {

  componentWillMount () {
    this.props.actions.requestCategories()
    this.props.actionsSupplies.requestAlerts()
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}
        isAdmin={this.props.isAdmin} alerts={this.props.alerts}>
        <SearchSupplyLayout categories={this.props.categories}/>
      </App>
    )
  }
}

SearchSupplyPage.propTypes = {
  categories: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

function mapStateToProps(state, ownProps) {
  return {
    alerts: state.alerts || {},
    categories: state.categories,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    isAdmin: state.login.session !== undefined ? state.login.session.isAdmin : false
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(suppliesCategories, dispatch),
    actionsSupplies: bindActionCreators(suppliesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSupplyPage)
