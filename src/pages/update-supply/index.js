import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import UpdateSupplyLayout from './layout'
import * as suppliesActions from '../../actions/supplies'
import App from '../../components/app'

class UpdateSupplyPage extends Component {

  constructor(props) {
    super(props)
    this.handleUpdateSupply = this.handleUpdateSupply.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.triggerInputStateChange = this.triggerInputStateChange.bind(this)
    this.state = {
      supplyDescription: '',
      supplyAmount: '',
      supplyPrice: '',
      isEmpty: true}
  }

  componentWillMount() {
    this.props.actions.requestAllSupplies()
  }

  handleUpdateSupply(event) {
    event.preventDefault()
    const supplyCode = event.target.supplies[event.target.supplies.selectedIndex].id
    const supplyDescription = event.target.description.value
    const supplyPrice = event.target.price.value
    const supplyAmount = event.target.amount.value
    const supplyDateOut = event.target.dateOut.value
    event.target.reset()
    const updatedSupply = {
      supplyCode,
      supplyDescription,
      supplyPrice,
      supplyAmount,
      supplyDateOut
    }
    this.props.actions.updateSupply(updatedSupply)
  }

  handleInputChange(event) {
    switch (event.target.name) {
      case 'description':
        this.setState({supplyDescription: event.target.value},
          function(){return this.triggerInputStateChange(this.state)})
        break
      case 'amount':
        this.setState({supplyAmount: event.target.value},
          function(){return this.triggerInputStateChange(this.state)})
        break
      case 'price':
        this.setState({supplyPrice: event.target.value},
          function(){return this.triggerInputStateChange(this.state)})
        break
      default:
        break
    }
  }

  triggerInputStateChange(state) {
    if(state.supplyDescription !== '' && state.supplyPrice !== '' &&
        state.supplyAmount !== '' && state.isEmpty) {
          this.setState({isEmpty: !state.isEmpty})
    }
    else if((this.state.supplyDescription === '' || this.state.supplyAmount === '' ||
              this.state.supplyPrice === '') && !this.state.isEmpty) {
                this.setState({isEmpty: !this.state.isEmpty})
    }
  }

  validateInput(event) {
    event.persist()
    const theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if(event.target.name === 'amount') {
      regex = /[0-9]/;
    }
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}
        isAdmin={this.props.isAdmin} alerts={this.props.alerts}>
        <UpdateSupplyLayout supplies={this.props.supplies}
          handleUpdateSupply={this.handleUpdateSupply}
          isEmpty={this.state.isEmpty}
          handleInputChange={this.handleInputChange}
          validateInput={this.validateInput}/>
      </App>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(suppliesActions, dispatch)
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

UpdateSupplyPage.propTypes = {
  supplies: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSupplyPage)
