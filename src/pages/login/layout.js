import React, {PropTypes} from 'react'
import './index.css'
import {Link} from 'react-router'

const LoginLayout = props => {
  return (
    <div className="zp-login-form-wrapper">
      <form className="zp-login-form" onSubmit={(e) => props.clickLoginButton(e)}>
        <h1 className="zp-sign-in--tittle">Sign In</h1>
        <input type="text" name="username" placeholder="Username" className="zp-text-input" />
        <input type="password" name="password" placeholder="Password" className="zp-text-input" />
        <input type="submit" className="zp-submit-input" value="Sign In" />
        <div className="zp-sub-form">
          <label className="zp-label-checkbox">
            <input type="checkbox" name="remember" value="remember"
              className="zp-check-input" /> Remember Me
          </label>
          <Link className="zp-link" to="forgot-password">Forgot Password?</Link>
        </div>
        <h3 className="zp-tittle-login-error">{props.isLoginInputEmpty ? props.errorEmptyInputMessage : ''}</h3>
      </form>
    </div>

  )
}

LoginLayout.propTypes = {
  clickFacebookButton: PropTypes.func.isRequired,
  clickLoginButton: PropTypes.func.isRequired,
  isLoginInputEmpty: PropTypes.bool.isRequired,
  errorEmptyInputMessage: PropTypes.string.isRequired
}

export default LoginLayout
