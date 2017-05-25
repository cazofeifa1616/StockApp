import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import AlertsLayout from './layout'
import * as alertsActions from '../../actions/alerts'
import App from '../../components/app'


class AlertsPage extends Component {
  componentWillMount() {
    this.props.actions.showAllAlerts()
  }

  render () {
    //console.log("page alerts")
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}
        isAdmin={this.props.isAdmin}>
        <AlertsLayout alerts={this.props.alerts}/>
      </App>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    alerts: state.alerts,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    isAdmin: state.login.session !== undefined ? state.login.session.isAdmin : false
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(alertsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertsPage)
