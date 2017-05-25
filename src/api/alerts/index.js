import sampleAlerts from '../../static/json/sample-alert'
import sampleAmountAlerts from '../../static/json/sample-amount-alert'

class AlertApi {
  static getAllAlerts() {
    console.log("api")
    return sampleAlerts
  }

  static getAmountAlerts(){
    return sampleAmountAlerts
  }
}

export default AlertApi
