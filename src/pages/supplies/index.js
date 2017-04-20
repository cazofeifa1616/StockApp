import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SuppliesLayout from './layout'
import * as suppliesActions from '../../actions/supplies'

class SuppliesPage extends Component {
  componentWillMount() {
    this.props.actions.requestSuppliesPerCategory(this.props.params.categoryId)
  }

  render () {
    return (
      <SuppliesLayout supplies={this.props.supplies}/>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    supplies: state.supplies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(suppliesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuppliesPage)
