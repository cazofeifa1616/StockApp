import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import AssetsLayout from './layout'
import * as assetsActions from '../../actions/assets'
import App from '../../components/app'


class AssetsPage extends Component {
  constructor(props){
    super(props)
    this.getCaret = this.getCaret.bind(this)
  }
  componentWillMount() {
    this.props.actions.requestAssetsPerCategory(this.props.params.categoryId)
  }

  getCaret(direction) {
    if (direction === 'asc') {
      return (
        <span> up</span>
      );
    }
    if (direction === 'desc') {
      return (
        <span> down</span>
      );
    }
    return (
      <span> up/down</span>
    )
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}
        isAdmin={this.props.isAdmin} alerts={this.props.alerts}>
        <AssetsLayout assets={this.props.assets}/>
      </App>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    alerts: state.alerts || {},
    assets: state.assets,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    isAdmin: state.login.session !== undefined ? state.login.session.isAdmin : false
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assetsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetsPage)
