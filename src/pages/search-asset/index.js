import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SearchAssetLayout from './layout'
import * as assetsActions from '../../actions/categories-assets'

class SearchAssetPage extends Component {
  componentWillMount() {

    this.props.actions.requestAssetsCategories()
  }

  render () {
    return (
      <SearchAssetLayout categoriesAssets={this.props.categoriesAssets}/>
    )
  }

}

SearchAssetPage.propTypes = {
  categoriesAssets: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	//console.log(state.categoriesAssets);
  return {
    categoriesAssets: state.categoriesAssets
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assetsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAssetPage)