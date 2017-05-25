import React, {PropTypes} from 'react'
import './index.css'

const LoginLayout = props => {
  return (
    <div className="zp-login-form-wrapper">
      <form className="zp-login-form" onSubmit={(e) => props.clickLoginButton(e)}>
        <h1 className="zp-sign-in--tittle">Inicio de Sesión</h1>
        <input type="text" name="username" placeholder="Usuario" className="zp-text-input" />
        <input type="password" name="password" placeholder="Contraseña" className="zp-text-input" />
        <input type="submit" className="zp-submit-input" value="Sign In" />
        <h3 className="zp-tittle-login-error">{props.isLoginInputEmpty ? props.errorEmptyInputMessage : ''}</h3>
        <h3 className="zp-tittle-login-error">{props.failureLogin}</h3>
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
