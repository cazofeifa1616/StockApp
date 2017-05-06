import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SearchSupplyLayout from './layout'
import App from '../../components/app'
import * as suppliesCategories from '../../actions/categories'

class SearchSupplyPage extends Component {

  componentWillMount () {
    this.props.actions.requestCategories()
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}>
        <SearchSupplyLayout categories={this.props.categories}/>
      </App>
    )
  }
}

SearchSupplyPage.propTypes = {
  categories: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(suppliesCategories, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSupplyPage)
