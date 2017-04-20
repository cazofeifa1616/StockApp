import React, {Component, PropTypes} from 'react'
import './index.css'

class Supply extends Component {
  render() {
    const {supplyCode} = this.props.details
    const {supplyName} = this.props.details
    const {supplyDescription} = this.props.details
    const {supplyPrice} = this.props.details
    const {supplyAmount} = this.props.details
    //const { categoryCode } = this.props.details
    return(
      <tr className="sa-flexbox-row">
        <td className="sa-flexbox-col">{supplyCode}</td>
        <td className="sa-flexbox-col">{supplyName}</td>
        <td className="sa-flexbox-col">{supplyDescription}</td>
        <td className="sa-flexbox-col">{supplyPrice}</td>
        <td className="sa-flexbox-col">{supplyAmount}</td>
      </tr>
    )
  }
}

Supply.propTypes = {
  supplyCode: PropTypes.number,
  supplyName: PropTypes.string,
  supplyDescription: PropTypes.string,
  supplyPrice: PropTypes.number,
  supplyAmount: PropTypes.number,
  categoryCode: PropTypes.number,
}

export default Supply
