import React, {Component, PropTypes} from 'react'
import './index.css'
import '../../css/style.css'

class SearchSupplyBox extends Component {

  render() {
    return(
      <div className="sa-search-supply-box">
        <h3>Búsqueda específica</h3>
        <input ref={(CodeInput) => {this.input = CodeInput}} placeholder="Código de producto"></input>
        <input ref={(Priceinput) => {this.input = Priceinput}} placeholder="Precio de producto"></input>
        <input ref={(DateInInput) => {this.input = DateInInput}} placeholder="Fecha de ingreso"></input>
        <input ref={(DateOutInput) => {this.input = DateOutInput}} placeholder="Fecha de caudcidad"></input>
        <button className="sa-btn">Filtrar</button>
        <hr/>
      </div>
    )
  }
}

SearchSupplyBox.propTypes = {
  categoryId: PropTypes.number
}

export default SearchSupplyBox
