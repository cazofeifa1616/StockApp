import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SuppliesLayout from './layout'
import * as suppliesActions from '../../actions/supplies'
import App from '../../components/app'

class SuppliesPage extends Component {
  componentWillMount() {
    this.props.actions.requestSuppliesPerCategory(this.props.params.categoryId)
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}>
        <SuppliesLayout supplies={this.props.supplies}/>
      </App>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    supplies: state.supplies,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(suppliesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuppliesPage)
