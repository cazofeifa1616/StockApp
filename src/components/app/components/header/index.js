import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import './index.css'
import * as loginActions from '../../../../actions/login'
import * as alertActions from '../../../../actions/alerts'
import {Link} from 'react-router'

class Header extends Component {

  constructor(props) {
    super(props)
    this.clickLogout = this.clickLogout.bind(this)
  }

  componentWillMount(){
    this.props.alertActions.getAmountAlerts()
  }

  clickLogout(e) {
    this.props.actions.requestLocalLogout(this.props.userJwt, this.props.push)
  }

  render() {
    //const amount = this.props.amountAlerts
    //console.log(amount)
    return(
      <header className="sa-header">
        <div className="sa-header--red"/>
        <h1 className="sa-header--tittle">Control de Inventarios</h1>
        {
          this.props.isSignedIn
          ?
          <div>
          <button className="sa-header-logout--button"
          onClick={(e) => this.clickLogout(e)}>Salir</button>

          this.props.amountAlerts
          ?
          <Link className="sa-link--alert" to="/alert">Alerta: Suministros acabándose</Link>
          : false
          </div>
          : false
        }

      </header>
    )
  }
}

function mapStateToProps (state) {
  //console.log(state.amountAlert)
    return {
      userJwt: state.login.session ? state.login.session.userJwt : undefined,
      amountAlerts: state.amountAlert.alert1 ? state.amountAlert.alert1.amount : {}
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
    alertActions: bindActionCreators(alertActions, dispatch)
  }
}



Header.propTypes = {
  isSignedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
