import React, {PropTypes} from 'react'
import './index.css'
import '../../css/style.css'

const AddAssetCategoryBox = (props) => {
    return(
      <div className="sa-add-asset-category-box">
        <form  className="sa-add-asset-category-box-form"
        onSubmit={(e) => props.handleCategoryAssetSubmit(e)}
        onChange={(e) => props.handleAssetCategoryFormChange(e)}>
          <h3>Nueva Categoría</h3>
          <input name="assetCategory" placeholder="Nombre de la categoría"></input>
          <input className="sa-inputfile" type="file" name="uploadImage"
            onChange={(e) => props.handleAssetImageChange(e)} />
          <div className="sa-image-preview">{props.imageAssetPreviewInfo}</div>
         <input className={!props.addCategoryAssetIsEmpty ? "sa-btn" : "sa-btn--disable"}
            disabled={props.addCategoryAssetIsEmpty} type="submit" value="Agregar Categoría"/>
        </form>
      </div>
    )
}

AddAssetCategoryBox.propTypes = {
  handleCategoryAssetSubmit: PropTypes.func.isRequired,
  handleAssetCategoryFormChange: PropTypes.func.isRequired,
  handleAssetImageChange: PropTypes.func.isRequired,
  addCategoryAssetIsEmpty: PropTypes.bool.isRequired
}

export default AddAssetCategoryBox
