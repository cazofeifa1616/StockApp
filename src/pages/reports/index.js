import {bindActionCreators} from 'redux'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReportsLayout from './layout';
import * as reportActions from '../../actions/reports';
import App from '../../components/app';

class ReportsPage extends Component {
  componentWillMount() {
    //console.log(this.props.params.reportType )
    if (this.props.params.reportType === ':ValorTotal'){
      //console.log(this.props.reportActions)
      this.props.actions.requestReportsTotalValue(); //mapDispatchToProps
    }
    else if (this.props.params.reportType === ':CantidadInventario'){
      //console.log(this.props.reportActions)
      this.props.actions.requestReportsInventaryAmount(); //mapDispatchToProps
    }

    else if (this.props.params.reportType === ':ConsumoSuministro'){
      //console.log(this.props.reportActions)
      this.props.actions.requestReportsSupplyConsuption(); //mapDispatchToProps
    }

    else if (this.props.params.reportType === ':EstadoActivos'){
      //console.log(this.props.reportActions)
      this.props.actions.requestReportsAssetsState(); //mapDispatchToProps
    }

    else if (this.props.params.reportType === ':Bitacora'){
      //console.log(this.props.reportActions)
      this.props.actions.requestReportsLog(); //mapDispatchToProps
    }
    else{
      this.props.actions.requestReportsSuppliesPerLab();
    }

  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}>
        <ReportsLayout reportType={this.props.params.reportType} reports={this.props.reports}/>
      </App>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //console.log(state.reports)
  return {
    reports: state.reports,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    userJwt: state.login.session !== undefined ? state.login.session.userJwt : undefined,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reportActions, dispatch) //import
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReportsPage);
