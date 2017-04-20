import React, {PropTypes} from 'react'
import './index.css'
import UpdateSupplyBox from '../../components/update-supply-box'

const UpdateSupplyLayout = (props) => {
    return (
      <div>
       <UpdateSupplyBox supplies={props.supplies}
         handleUpdateSupply={props.handleUpdateSupply}
         isEmpty={props.isEmpty}
         handleInputChange={props.handleInputChange}
         validateInput={props.validateInput}/>
      </div>
    )
}

UpdateSupplyLayout.propTypes = {
  handleUpdateSupply: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  validateInput: PropTypes.func.isRequired
}

export default UpdateSupplyLayout
