import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ConsumeSuppliesLayout from './layout'
import * as SuppliesActions from '../../actions/supplies'
import App from '../../components/app'

class ConsumeSuppliesPage extends Component {
  componentWillMount() {
    this.props.actions.requestAllSupplies()
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}
        isAdmin={this.props.isAdmin}>
        <ConsumeSuppliesLayout supplies={this.props.supplies}/>
      </App>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.info(state)
  return {
    supplies: state.supplies,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    isAdmin: state.login.session !== undefined ? state.login.session.isAdmin : false
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SuppliesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumeSuppliesPage)
