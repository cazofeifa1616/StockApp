import constants from '../action-types';
import reportsApi from '../../api/reports';

export function receiveReportsTotalValue(reports) {
  return {
    type: constants.RECEIVE_REPORTS_TOTAL_VALUE,
    reports,
  };
}

export function receiveReportsInventaryAmount(reports) {
  console.log(reports)
  return {

    type: constants.RECEIVE_REPORTS_INVENTARY_AMOUNT,
    reports,
  };
}

export function receiveReportsSupplyConsuption(reports) {
  return {
    type: constants.RECEIVE_REPORTS_SUPPLY_CONSUPTION,
    reports,
  };
}

export function receiveReportsAssetsState(reports) {
  return {
    type: constants.RECEIVE_REPORTS_ASSETS_STATE,
    reports,
  };
}

export function receiveReportsLog(reports) {
  return {
    type: constants.RECEIVE_REPORTS_LOG,
    reports,
  };
}

export function receiveReportsSuppliesPerLab(reports) {
  return {
    type: constants.RECEIVE_REPORTS_SUPPLIES_PER_LAB,
    reports,
  };
}

export function requestReportsTotalValue() {
  return receiveReportsTotalValue(reportsApi.getReportTotalSupply());
}

export function requestReportsInventaryAmount() {
  return receiveReportsInventaryAmount(reportsApi.getReportAmountInventary());
}

export function requestReportsSupplyConsuption() {
  return receiveReportsSupplyConsuption(reportsApi.getReportSupplyConsuption());
}

export function requestReportsAssetsState() {
  return receiveReportsAssetsState(reportsApi.getReportAssetState());
}

export function requestReportsLog() {
  return receiveReportsLog(reportsApi.getReportLog());
}

export function requestReportsSuppliesPerLab() {
  return receiveReportsSuppliesPerLab(reportsApi.getReportSupplyPerLab());
}
