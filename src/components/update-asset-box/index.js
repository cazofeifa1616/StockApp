import React, {PropTypes} from 'react'
import './index.css'

const UpdateAssetBox = (props) => {
    return(
      <div className="sa-update-asset-box">
        <form className="sa-update-asset-box-form"
          onSubmit={(e) => props.handleUpdateAsset(e)}
          onChange={(e) => props.handleUpdateInputChange(e)}>
          <select name="assets">
            {
            Object.keys(props.assets)
            .map(key => <option key={key}
              id={props.assets[key].assetCode} >
              {props.assets[key].assetName} - {props.assets[key].assetDescription}</option>)
          }
          </select>
          <input type="text" name="assetCode" placeholder="Código"></input>
          <input type="text" name="assetName" placeholder="Nombre"></input>
          <textarea name="assetDescription" rows="10" cols="30" placeholder="Descripción"></textarea>
          <input type="text" name="assetPrice" placeholder="Precio"></input>
          <label >Fecha de expiración</label>
          <input type="date" name="assetExpirationDate" placeholder="Fecha de caducidad"></input>
          <input type="text" name="assetLocation" placeholder="Localización"></input>
          <input type="text" name="assetState" placeholder="Estado"></input>
         
          <input className={!props.updateIsEmpty ? "sa-btn" : "sa-btn--disable"}
          disabled={props.updateIsEmpty} type="submit" value="Actualizar" />
        </form>
      </div>
    )
  
}

UpdateAssetBox.propTypes = {
  handleUpdateAsset: PropTypes.func.isRequired,
  handleUpdateInputChange: PropTypes.func.isRequired,
  updateIsEmpty: PropTypes.bool.isRequired
}


export default UpdateAssetBox