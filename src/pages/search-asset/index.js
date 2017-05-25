import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SearchAssetLayout from './layout'
import * as assetsActions from '../../actions/categories-assets'
import App from '../../components/app'

class SearchAssetPage extends Component {
  componentWillMount() {

    this.props.actions.requestAssetsCategories()
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}
        isAdmin={this.props.isSignedIn} alerts={this.props.alerts}>
        <SearchAssetLayout categoriesAssets={this.props.categoriesAssets}/>
      </App>
    )
  }

}

SearchAssetPage.propTypes = {
  categoriesAssets: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	//console.log(state.categoriesAssets);
  return {
    alerts: state.alerts || {},
    categoriesAssets: state.categoriesAssets,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    isAdmin: state.login.session !== undefined ? state.login.session.isAdmin : false
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assetsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAssetPage)
