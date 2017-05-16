import React, {PropTypes} from 'react'
import './index.css'
import AddAssetCategoryBox from '../../components/add-category-asset-box'
import AddAssetBox from '../../components/add-asset-box'

const NewAssetLayout = function(props) {
    return (
      <div>
       <AddAssetCategoryBox handleCategoryAssetSubmit={props.handleCategoryAssetSubmit}
         handleAssetImageChange={props.handleAssetImageChange}
         imageAssetPreviewInfo={props.imageAssetPreviewInfo}
         addCategoryAssetIsEmpty={props.addCategoryAssetIsEmpty}
         handleAssetCategoryFormChange={props.handleAssetCategoryFormChange}/>
       <AddAssetBox categoriesAssets={props.categoriesAssets}
         handleAssetSubmit={props.handleAssetSubmit}
         addAssetIsEmpty={props.addAssetIsEmpty}
         handleAddAssetInputChange={props.handleAddAssetInputChange}
         validateAssetInput={props.validateAssetInput} />
      </div>
    )
}

NewAssetLayout.propTypes = {
  handleCategoryAssetSubmit: PropTypes.func.isRequired,
  handleAssetSubmit: PropTypes.func.isRequired,
  handleAddAssetInputChange: PropTypes.func.isRequired,
  addAssetIsEmpty: PropTypes.bool.isRequired,
  addCategoryAssetIsEmpty: PropTypes.bool.isRequired,
  validateAssetInput: PropTypes.func.isRequired,
  handleAssetImageChange: PropTypes.func.isRequired
}

export default NewAssetLayout
