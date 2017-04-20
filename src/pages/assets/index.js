import React, {Component} from 'react'
import {connect} from 'react-redux'
import AssetsLayout from './layout'
import {requestAssetsPerCategory} from '../../actions/assets'

class AssetsPage extends Component {
  componentWillMount() {
    this.props.dispatch(requestAssetsPerCategory(this.props.params.categoryId))
  }

  render () {
    return (
      <AssetsLayout assets={this.props.assets}/>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    assets: state.assets
  }
}

export default connect(mapStateToProps)(AssetsPage)