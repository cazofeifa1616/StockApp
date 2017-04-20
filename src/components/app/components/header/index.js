import React, { Component } from 'react'
import './index.css'

class Header extends Component {

  render() {
    return(
      <header className="sa-header">
        <div className="sa-header--red"/>
        <h1 className="sa-header--tittle">Control de Inventarios</h1>
      </header>
    )
  }
}

export default Header
