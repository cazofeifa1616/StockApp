import React, {Component, PropTypes} from 'react'
import './index.css'

class Asset extends Component {
  render() {
    const {assetCode} = this.props.details
    const {assetName} = this.props.details
    const {assetDescription} = this.props.details
    const {assetPrice} = this.props.details
    const {assetDateOfAdmission} = this.props.details;
    const {assetExpirationDate} = this.props.details;
    const {assetLocation} = this.props.details;
    const {assetState} = this.props.details;
    //const { categoryCode } = this.props.details
    return(
      <tr className="sa-flexbox-row">
        <td className="sa-flexbox-col">{assetCode}</td>
        <td className="sa-flexbox-col">{assetName}</td>
        <td className="sa-flexbox-col">{assetDescription}</td>
        <td className="sa-flexbox-col">{assetPrice}</td>
        <td className="sa-flexbox-col">{assetDateOfAdmission}</td>
        <td className="sa-flexbox-col">{assetExpirationDate}</td>
        <td className="sa-flexbox-col">{assetLocation}</td>
        <td className="sa-flexbox-col">{assetState}</td>
      </tr>
    )
  }
}

Asset.propTypes = {

  assetCode: PropTypes.number,
  assetName: PropTypes.string,
  assetDescription: PropTypes.string,
  assetPrice: PropTypes.number, 
  assetDateOfAdmission: PropTypes.instanceOf(Date),
  assetExpirationDate: PropTypes.instanceOf(Date),
  assetLocation: PropTypes.string,
  assetState: PropTypes.number,
  categoryCode: PropTypes.number
}

export default Asset