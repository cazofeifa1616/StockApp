import React, {PropTypes, Component} from 'react'
import {Link} from 'react-router'
import './index.css'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSuppliesTabOpen: false,
      isAssetsTabOpen: false,
      isReportsTabOpen: false
    }
    this.clickSuppliesTab = this.clickSuppliesTab.bind(this)
    this.clickAssetsTab = this.clickAssetsTab.bind(this)
    this.clickReportsTab = this.clickReportsTab.bind(this)
  }

  clickSuppliesTab () {
    this.setState({
      isSuppliesTabOpen: !this.state.isSuppliesTabOpen,
      isAssetsTabOpen: false,
      isReportsTabOpen: false
    })
  }

  clickReportsTab () {
    this.setState({
      isReportsTabOpen: !this.state.isReportsTabOpen,
      isSuppliesTabOpen: false,
      isAssetsTabOpen: false
    })
  }

  clickAssetsTab () {
    this.setState({
      isAssetsTabOpen: !this.state.isAssetsTabOpen,
      isSuppliesTabOpen: false,
      isReportsTabOpen: false
    })
  }

  render () {
    return(
      <div>
        {
          this.props.isSignedIn && this.props.isAdmin
          ?
          <nav className="sa-menu-navigation">
            <ul className="sa-menu--list">
              <li onClick={(e) => this.clickSuppliesTab(e)}
                className={!this.state.isSuppliesTabOpen
                  ? "sa-menu-list--item" : "sa-menu-list-item--open"}>

                <p className={!this.state.isSuppliesTabOpen
                  ? "sa-menu-list-item--name" : "sa-menu-list-item-name--open"}>
                  Suministros</p>

                <Link className={!this.state.isSuppliesTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/search-supply'>Buscar Suministro</Link>

                <Link className={!this.state.isSuppliesTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/update-supply'>Entrada de Suministro</Link>

                <Link className={!this.state.isSuppliesTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/new-supply'>Nuevo Suministro</Link>
              </li>

              <li onClick={(e) => this.clickAssetsTab(e)}
                className={!this.state.isAssetsTabOpen
                  ? "sa-menu-list--item" : "sa-menu-list-item--open"}>

                <p className={!this.state.isAssetsTabOpen
                  ? "sa-menu-list-item--name" : "sa-menu-list-item-name--open"}>
                  Activos</p>

                <Link className={!this.state.isAssetsTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/search-asset'>Buscar Activo</Link>

                <Link className={!this.state.isAssetsTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/update-asset'>Entrada de Activos</Link>

                <Link className={!this.state.isAssetsTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/new-asset'>Nuevo Activo</Link>
              </li>

              <li onClick={(e) => this.clickReportsTab(e)}
                className={!this.state.isReportsTabOpen
                  ? "sa-menu-list--item" : "sa-menu-list-item--open"}>

                <p className={!this.state.isReportsTabOpen
                  ? "sa-menu-list-item--name" : "sa-menu-list-item-name--open"}>
                  Reportes</p>

                <Link className={!this.state.isReportsTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/report/:ValorTotal'>Valor total Suministros</Link>

                <Link className={!this.state.isReportsTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/report/:CantidadInventario'>Cantidad inventario</Link>

                <Link className={!this.state.isReportsTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/report/:ConsumoSuministro'>Consumo de suministros</Link>

                <Link className={!this.state.isReportsTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/report/:EstadoActivos'>Estado de los activos</Link>

                <Link className={!this.state.isReportsTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/report/:Bitacora'>Bitácora interna</Link>

                <Link className={!this.state.isReportsTabOpen
                  ? "sa-menu-link" : "sa-menu-link--open"}
                  to='/report/:SuministroLaboratorio'>Suministro por laboratorio</Link>
              </li>
            </ul>
          </nav>
          : false
        }
      </div>
    )
  }
}

Menu.propTypes = {
  isSignedIn: PropTypes.bool,
  isAdmin: PropTypes.bool
}

export default Menu
