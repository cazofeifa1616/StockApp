import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ConsumeSuppliesLayout from './layout'
import * as SuppliesActions from '../../actions/supplies'
import App from '../../components/app'

class ConsumeSuppliesPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSupply: {}
    }
    this.clickSelect = this.clickSelect.bind(this)
    this.clickSubmit = this.clickSubmit.bind(this)
  }

  componentWillMount() {
    this.props.actions.requestAllSupplies()
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.supplies !== nextProps.supplies) {
      console.log('entra')
      return {
        supplies: nextProps.supplies
      }
    }
  }

  clickSubmit (event) {
    event.preventDefault()
    const operatorName = event.target.operatorName.value
    const supplyCode = event.target.supplies[event.target.supplies.selectedIndex].id
    if (operatorName !== '' && supplyCode !== '') {
      this.props.actions.updateSupplyAmount(supplyCode)
    }
  }

  clickSelect (event) {
    const supplyCode = event.target.selectedIndex
    this.props.actions.requestSupplyAmount(supplyCode)
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}
        isAdmin={this.props.isAdmin}>
        <ConsumeSuppliesLayout supplies={this.props.supplies}
          clickSelect={this.clickSelect} supplyAmount={this.props.supplyAmount}
          clickSubmit={this.clickSubmit} />
      </App>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    supplyAmount: state.suppliesAmounts !== undefined ? state.suppliesAmounts[0] : false,
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
