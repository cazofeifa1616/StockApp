import React, {PropTypes} from 'react'
import './index.css'
import '../../css/style.css'

const AddSupplyBox = (props) => {
  return(
    <div  className="sa-add-supply-box">
      <h3>Nuevo Suministro</h3>
      <form className="sa-add-supply-box-form"
        onSubmit={(e) => props.handleSupplySubmit(e)}
        onChange={(e) => props.handleInputChange(e)}>
        <input type="text" name="code" placeholder="Código" />
        <input type="text" name="name" placeholder="Nombre" />
        <input type="text" name="price" placeholder="Precio"
          onKeyPress={(e) => props.validateInput(e)} />
        <input type="text" name="amount" placeholder="Cantidad"
            onKeyPress={(e) => props.validateInput(e)} />
        <textarea name="description" rows="10" cols="30" placeholder="Descripción" />
        Fecha de expiración del suministro
        <input type="date" name="dateOut" />
        <select name="categoriesSelect">
          {
            Object.keys(props.categories)
            .map(key => <option key={key}
              id={props.categories[key].categoryCode}>
              {props.categories[key].categoryName}</option>)
          }
        </select>
        <input className={!props.isEmpty ? "sa-btn" : "sa-btn--disable"}
          disabled={props.isEmpty} type="submit" value="Agregar" />
      </form>
    </div>
  )
}

AddSupplyBox.propTypes = {
  handleSupplySubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  validateInput: PropTypes.func.isRequired
}

export default AddSupplyBox
