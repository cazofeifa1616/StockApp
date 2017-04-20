import React, {PropTypes} from 'react'
import './index.css'
import UpdateAssetBox from '../../components/update-asset-box'

const UpdateAssetLayout = (props) => {
    return (
      <div>
       <UpdateAssetBox assets={props.assets}
         handleUpdateAsset={props.handleUpdateAsset}
         updateIsEmpty={props.updateIsEmpty}
         handleUpdateInputChange={props.handleUpdateInputChange}/>
      </div>
    )
}

UpdateAssetLayout.propTypes = {
  handleUpdateAsset: PropTypes.func.isRequired,
  handleUpdateInputChange: PropTypes.func.isRequired,
  updateIsEmpty: PropTypes.bool.isRequired
}

export default UpdateAssetLayout