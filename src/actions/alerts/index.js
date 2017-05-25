import constants from '../action-types'
import alertsApi from '../../api/alerts'

export function receiveAlerts(alerts){
  return { type: constants.RECEIVE_ALL_ALERTS,
  alerts
  }
}

export function receiveAmountAlerts(amountAlerts){
  return { type: constants.RECEIVE_AMOUNT_ALERTS,
  amountAlerts
  }
}

export function showAllAlerts(){
  return receiveAlerts(alertsApi.getAllAlerts())
}

export function getAmountAlerts(){

  return receiveAmountAlerts(alertsApi.getAmountAlerts())
}
