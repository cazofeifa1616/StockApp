import sampleReportTotalSupply from '../../static/json/sample-report-total-supply';
import sampleReportAmountInventary from '../../static/json/sample-report-amount-inventary';
import sampleReportSupplyConsuption from '../../static/json/sample-report-supply-consuption';
import sampleReportAssetState from '../../static/json/sample-report-asset-state';
import sampleReportLog from '../../static/json/sample-report-log';
import sampleReportSupplyPerLab from '../../static/json/sample-report-supply-per-lab';

class ReportsApi {
  static getReportTotalSupply() {
    return sampleReportTotalSupply;
  }

  static getReportAmountInventary() {
    return sampleReportAmountInventary;
  }

  static getReportSupplyConsuption() {
    return sampleReportSupplyConsuption;
  }

  static getReportAssetState() {
    return sampleReportAssetState;
  }

  static getReportLog() {
    return sampleReportLog;
  }

  static getReportSupplyPerLab() {
    return sampleReportSupplyPerLab;
  }

}

export default ReportsApi;
