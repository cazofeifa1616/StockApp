import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LoginLayout from './layout'
import App from '../../components/app'
import * as loginActions from '../../actions/login'

class Login extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      isLoginInputEmpty: false,
      errorEmptyInputMessage: 'Username and password are required',
      userCredentials: {
        username: '',
        password: '',
        isRemembered: false
      }
    }
    this.clickFacebookButton = this.clickFacebookButton.bind(this)
    this.clickLoginButton = this.clickLoginButton.bind(this)
  }

  componentWillMount () {
  }
  componentWillReceiveProps (nextProps) {
  }

  clickFacebookButton () {
  }

  clickLoginButton (event) {
    event.preventDefault()
    const username = event.target.username
    const password = event.target.password
    if (username.value !== '' && password.value !== '') {
      this.setState({
        isLoginInputEmpty: false
      })
      this.props.actions.requestLocalLogin(username.value, password.value, this.props.router.push)
    } else {
      this.setState({isLoginInputEmpty: true})
    }
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}>
        <LoginLayout clickFacebookButton={this.clickFacebookButton}
          clickLoginButton={this.clickLoginButton}
          isLoginInputEmpty={this.state.isLoginInputEmpty}
          errorEmptyInputMessage={this.state.errorEmptyInputMessage}
          failureLogin={this.props.errorMessage} />
      </App>
    )
  }
}

function mapStateToProps (state) {
    return {
      userJwt: state.login.session ? state.login.session.userJwt : undefined,
      isSignedIn: typeof state.login.session === 'object' ? state.login.session.isSignedIn : false,
      errorMessage: typeof state.login.session === 'string' ? state.login.session : ''
    }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  userJwt: PropTypes.object,
  isSignedIn: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
