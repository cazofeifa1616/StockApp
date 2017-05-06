import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import './index.css'
import * as loginActions from '../../../../actions/login'

class Header extends Component {

  constructor(props) {
    super(props)
    this.clickLogout = this.clickLogout.bind(this)
  }

  clickLogout(e) {
    this.props.actions.requestLocalLogout(this.props.userJwt, this.props.push)
  }

  render() {
    return(
      <header className="sa-header">
        <div className="sa-header--red"/>
        <h1 className="sa-header--tittle">Control de Inventarios</h1>
        {
          this.props.isSignedIn
          ? <button className="sa-header-logout--button"
          onClick={(e) => this.clickLogout(e)}>Salir</button>
          : false
        }
      </header>
    )
  }
}

function mapStateToProps (state) {
    return {
      userJwt: state.login.session ? state.login.session.userJwt : undefined
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  }
}

Header.propTypes = {
  isSignedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
