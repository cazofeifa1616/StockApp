import React, {PropTypes} from 'react'
import './index.css'
import '../../css/style.css'

const AddCategoryBox = (props) => {
  return(
    <div className="sa-add-category-box">
      <form className="sa-add-category-box-form"
         onSubmit={(e) => props.handleCategorySubmit(e)}
         onChange={(e) => props.handleCategoryFormChange(e)}>
        <h3>Nueva Categoría</h3>
        <input name="categoryName" placeholder="Nombre de la categoría" />
        <input className="sa-inputfile" type="file" name="uploadImage"
          onChange={(e) => props.handleImageChange(e)} />
        <div className="sa-image-preview">{props.imagePreviewInfo}</div>
          <input className={!props.isCategoryEmpty ? "sa-btn" : "sa-btn--disable"}
            disabled={props.isCategoryEmpty} type="submit" value="Agregar Categoría" />
      </form>
    </div>

  )
}

AddCategoryBox.propTypes = {
  handleCategorySubmit: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  isCategoryEmpty: PropTypes.bool.isRequired,
  handleCategoryFormChange: PropTypes.func.isRequired
}

export default AddCategoryBox
