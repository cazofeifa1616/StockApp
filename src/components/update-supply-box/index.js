import React, {PropTypes} from 'react'
import './index.css'
//import DatePicker from 'react-datepicker'
//import 'react-datepicker/dist/react-datepicker.css'

const UpdateSupplyBox = (props) => {
  return(
    <div className="sa-update-supply-box">
      <form className="sa-update-supply-box-form"
        onSubmit={(e) => props.handleUpdateSupply(e)}
        onChange={(e) => props.handleInputChange(e)}>
        <select name="supplies">
          {
            Object.keys(props.supplies)
            .map(key => <option key={key}
              id={props.supplies[key].supplyCode}>
              {props.supplies[key].supplyName}</option>)
          }
        </select>
        <textarea name="description" rows="10" cols="30"
          placeholder="Descripción" />
        Fecha de expiración del suministro:
        <input type="date" name="dateOut" />
        <input type="text" name="price" placeholder="Precio"
          onKeyPress={(e) => props.validateInput(e)}/>
        <input name="amount" placeholder="Cantidad"
          onKeyPress={(e) => props.validateInput(e)} />
        <input className={!props.isEmpty ? "sa-btn" : "sa-btn--disable"}
          disabled={props.isEmpty} type="submit" value="Agregar" />
      </form>
    </div>
  )
}

UpdateSupplyBox.propTypes = {
  handleUpdateSupply: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  validateInput: PropTypes.func.isRequired
}

export default UpdateSupplyBox
