import React, {PropTypes} from 'react'
import './index.css'
import AddCategoryBox from '../../components/add-category-box'
import AddSupplyBox from '../../components/add-supply-box'

const NewSupplyLayout = (props) => {
    return (
      <div>
       <AddCategoryBox handleCategorySubmit={props.handleCategorySubmit}
         handleImageChange={props.handleImageChange}
         imagePreviewInfo={props.imagePreviewInfo}
         isCategoryEmpty={props.isCategoryEmpty}
         handleCategoryFormChange={props.handleCategoryFormChange}/>
       <AddSupplyBox categories={props.categories}
         handleSupplySubmit={props.handleSupplySubmit}
         isEmpty={props.isEmpty}
         handleInputChange={props.handleInputChange}
         validateInput={props.validateInput} />
      </div>
    )
}

NewSupplyLayout.propTypes = {
  handleCategorySubmit: PropTypes.func.isRequired,
  handleSupplySubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  isCategoryEmpty: PropTypes.bool.isRequired,
  validateInput: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired
}

export default NewSupplyLayout
