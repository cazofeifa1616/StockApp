import React, {PropTypes}  from 'react'
import './index.css'
import '../../css/style.css'

const AddAssetBox = (props) => {
    return(
      <div  className="sa-add-asset-box">
        <h3>Nuevo Activo</h3>
        <form className="sa-add-asset-box-form"
          onSubmit={(e) => props.handleAssetSubmit(e)}
          onChange={(e) => props.handleAddAssetInputChange(e)}>
          <input type="text" name="assetCode" placeholder="Código"></input>
          <input type="text" name="assetName" placeholder="Número de máquina"></input>
          <textarea name="assetDescription" rows="10" cols="30" placeholder="Descripción"></textarea>
          <input type="text" name="assetPrice" placeholder="Precio"></input>
          <label >Fecha de expiración</label>
          <input type="date" name="assetExpirationDate" placeholder="Fecha de expiración"></input>
          <input type="text" name="assetLocation" placeholder="Localización"></input>
          <input type="text" name="assetState" placeholder="Estado"></input>
          <select name="categoriesAssets">
          {
            Object.keys(props.categoriesAssets)
            .map(key => <option key={key}
              id={props.categoriesAssets[key].categoryCode}>
              {props.categoriesAssets[key].categoryName}</option>)
          }
          </select>
          <input className={!props.addAssetIsEmpty ? "sa-btn" : "sa-btn--disable"}
          disabled={props.addAssetIsEmpty} type="submit" value="Crear" />
        </form>
      </div>
    )
  
}

AddAssetBox.propTypes = {
  handleAssetSubmit: PropTypes.func.isRequired,
  handleAddAssetInputChange: PropTypes.func.isRequired,
  addAssetIsEmpty: PropTypes.bool.isRequired
}

export default AddAssetBox 