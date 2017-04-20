import React, {PropTypes} from 'react'
import './index.css'
import AddAssetCategoryBox from '../../components/add-category-asset-box'
import AddAssetBox from '../../components/add-asset-box'

const NewAssetLayout = function(props) {
    return (
      <div>
       <AddAssetCategoryBox handleCategoryAssetSubmit={props.handleCategoryAssetSubmit}
          addCategoryAssetIsEmpty={props.addCategoryAssetIsEmpty}
          handleAddCategoryAssetInputChange={props.handleAddCategoryAssetInputChange}/>
       <AddAssetBox categoriesAssets={props.categoriesAssets}
         handleAssetSubmit={props.handleAssetSubmit}
         addAssetIsEmpty={props.addAssetIsEmpty}
         handleAddAssetInputChange={props.handleAddAssetInputChange}/>
      </div>
    )
}

NewAssetLayout.propTypes = {
  handleCategoryAssetSubmit: PropTypes.func.isRequired,
  handleAssetSubmit: PropTypes.func.isRequired,
  handleAddAssetInputChange: PropTypes.func.isRequired,
  addAssetIsEmpty: PropTypes.bool.isRequired,
  handleAddCategoryAssetInputChange: PropTypes.func.isRequired,
  addCategoryAssetIsEmpty: PropTypes.bool.isRequired
}

export default NewAssetLayout