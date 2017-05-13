import React, {Component} from 'react'
import {connect} from 'react-redux'
import AssetsLayout from './layout'
import {requestAssetsPerCategory} from '../../actions/assets'
import App from '../../components/app'


class AssetsPage extends Component {
  componentWillMount() {
    this.props.dispatch(requestAssetsPerCategory(this.props.params.categoryId))
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}
        isAdmin={this.props.isAdmin}>
        <AssetsLayout assets={this.props.assets}/>
      </App>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    assets: state.assets,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    isAdmin: state.login.session !== undefined ? state.login.session.isAdmin : false,
    userJwt: state.login.session !== undefined ? state.login.session.userJwt : undefined
  }
}

export default connect(mapStateToProps)(AssetsPage)
