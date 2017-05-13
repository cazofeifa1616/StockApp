import React from 'react'
import {connect} from 'react-redux'

class SessionValidator extends React.Component {
  componentDidMount () {
    console.log(this.props.location.pathname)
    console.log(this.props.isSignedIn)
    if (!this.props.isSignedIn) {
      this.props.router.push('/login')
    }
    else {
      if (!this.props.isAdmin) {
        this.props.router.push('/consume_supply')
      }
    }
  }

  render () {
    if (this.props.isSignedIn) {
      return this.props.children
    } else {
      return null
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    isAdmin: state.login.session !== undefined ? state.login.session.isAdmin : false
  }
}

export default connect(mapStateToProps)(SessionValidator)
