import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render () {
    return (
      <div>
        <p>This is not the page that you are looking for...</p>
        <Link to=" /">Return to Home</Link>
      </div>
    )
  }
}

export default Home
