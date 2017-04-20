import React, {PropTypes} from 'react'
import './index.css'
import '../../css/style.css'

const AddAssetCategoryBox = (props) => {
    return(
      <form  className="sa-add-asset-category-box"
      onSubmit={(e) => props.handleCategoryAssetSubmit(e)}
      onChange={(e) => props.handleAddCategoryAssetInputChange(e)}>
        <h3>Nueva Categoría</h3>
        <input name="categoryName" placeholder="Nombre de la categoría"></input>
      <button className="sa-btn">Seleccionar Imagen</button>
       <input className={!props.addCategoryAssetIsEmpty ? "sa-btn" : "sa-btn--disable"}
          disabled={props.addCategoryAssetIsEmpty} type="submit" value="Agregar Categoría"/>
      </form>
    )
}

AddAssetCategoryBox.propTypes = {
  handleCategoryAssetSubmit: PropTypes.func.isRequired,
  handleAddCategoryAssetInputChange: PropTypes.func.isRequired
} 

export default AddAssetCategoryBox