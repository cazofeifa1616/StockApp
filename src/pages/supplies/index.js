import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SuppliesLayout from './layout'
import * as suppliesActions from '../../actions/supplies'
import App from '../../components/app'

class SuppliesPage extends Component {
  constructor(props) {
    super(props)
    this.getCaret = this.getCaret.bind(this)
  }
  componentWillMount() {
    this.props.actions.requestSuppliesPerCategory(this.props.params.categoryId)
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
        <SuppliesLayout supplies={this.props.supplies}
          getCaret={this.getCaret}/>
      </App>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    alerts: state.alerts || {},
    supplies: state.supplies,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    isAdmin: state.login.session !== undefined ? state.login.session.isAdmin : false
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(suppliesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuppliesPage)
