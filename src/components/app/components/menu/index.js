import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import './index.css'

const Menu = props => {
  return(
    <div>
      {
        props.isSignedIn && props.isAdmin
        ?
        <nav className="sa-menu-navigation">
          <ul>
            <li>
              <p>Suministros</p>
              <Link className="sa-menu-link" to='/search-supply'>Buscar Suministro</Link>
              <Link className="sa-menu-link">Consumo de Suministro</Link>
              <Link className="sa-menu-link" to='/update-supply'>Entrada de Suministro</Link>
              <Link className="sa-menu-link" to='/new-supply'>Nuevo Suministro</Link>
            </li>
            <li>
              <p>Activos</p>
              <Link className="sa-menu-link" to='/search-asset'>Buscar Activo</Link>
              <Link className="sa-menu-link" to='/update-asset'>Entrada de Activos</Link>
              <Link className="sa-menu-link" to='/new-asset'>Nuevo Activo</Link>
            </li>
            <li>
              <p>Reportes</p>
              <Link className="sa-menu-link" to='/report/:ValorTotal'>Valor total Suministros</Link>
              <Link className="sa-menu-link" to='/report/:CantidadInventario'>Cantidad inventario</Link>
              <Link className="sa-menu-link" to='/report/:ConsumoSuministro'>Consumo de suministros</Link>
              <Link className="sa-menu-link" to='/report/:EstadoActivos'>Estado de los activos</Link>
              <Link className="sa-menu-link" to='/report/:Bitacora'>Bitácora interna</Link>
              <Link className="sa-menu-link" to='/report/:SuministroLaboratorio'>Suministro por laboratorio</Link>
            </li>
          </ul>
        </nav>
        : false
      }
    </div>
  )
}

Menu.propTypes = {
  isSignedIn: PropTypes.bool,
  isAdmin: PropTypes.bool
}

export default Menu
