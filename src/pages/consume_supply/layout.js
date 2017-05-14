import React, {PropTypes} from 'react'
import './index.css'

const ConsumeSuppliesLayout = (props) => {
    return (
      <div className="sa-consume-supplies--container">
        <form className="sa-consume-supplies--form" onSubmit={(e) => props.clickSubmit(e)}>
          <select name="supplies" onChange={(e) => props.clickSelect(e)}>
            <option>Seleccione Suministro</option>
            {
              Object.keys(props.supplies)
              .map(key => <option key={key}
                id={props.supplies[key].supplyCode}>
                {props.supplies[key].supplyName}</option>)
            }
          </select>
          <p className="sa-supply-amount">Cantidad Disponible: {props.supplyAmount || ''}</p>
          <input type="text" placeholder="Nombre del operador"
            className="sa-consume-supplies--input" name="operatorName"/>
          <input type="submit" value="Consumir" className="sa-btn" />
        </form>
      </div>
    )
  }


ConsumeSuppliesLayout.propTypes={
  supplies: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
    ]).isRequired
};

export default ConsumeSuppliesLayout
