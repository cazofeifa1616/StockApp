import constants from '../../actions/action-types';

const reportsReducer = function (state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_REPORTS_TOTAL_VALUE:
      return action.reports;
    case constants.RECEIVE_REPORTS_INVENTARY_AMOUNT:
      return action.reports;
    case constants.RECEIVE_REPORTS_SUPPLY_CONSUPTION:
      return action.reports;
    case constants.RECEIVE_REPORTS_ASSETS_STATE:
      return action.reports;
    case constants.RECEIVE_REPORTS_LOG:
      return action.reports;
    case constants.RECEIVE_REPORTS_SUPPLIES_PER_LAB:
      return action.reports;
    default:
      return state;
  }
};

export default reportsReducer;
