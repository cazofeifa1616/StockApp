import React, {Component, PropTypes} from 'react'
import './index.css'

class Alert extends Component {

  render() {
    //console.log("details")
    //console.log(this.props.details)
    const {supplyCode} = this.props.details
    const {supplyName} = this.props.details
    const {supplyDescription} = this.props.details
    const {supplyAmount} = this.props.details
    return(
      <div className="sa-flexbox-row">
        <div className="sa-flexbox-col">{supplyCode}</div>
        <div className="sa-flexbox-col">{supplyName}</div>
        <div className="sa-flexbox-col">{supplyDescription}</div>
        <div className="sa-flexbox-col">{supplyAmount}</div>
      </div>
    )
  }
}

Alert.propTypes = {

  supplyCode: PropTypes.number,
  supplyName: PropTypes.string,
  supplyDescription: PropTypes.string,
  supplyAmount: PropTypes.number,
}

export default Alert
