import {bindActionCreators} from 'redux'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReportsLayout from './layout';
import * as reportActions from '../../actions/reports';
import App from '../../components/app';

class ReportsPage extends Component {

  constructor(props){
    super(props);
    this.handleConsuptionReportSubmit = this.handleConsuptionReportSubmit.bind(this);
    this.state = {
        errorMsg: ''
    }
  }


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

    else if (this.props.params.reportType === ':EstadoActivos'){
      //console.log(this.props.reportActions)
      this.props.actions.requestReportsAssetsState(); //mapDispatchToProps
    }

    else if (this.props.params.reportType === ':Bitacora'){
      //console.log(this.props.reportActions)
      this.props.actions.requestReportsLog(); //mapDispatchToProps
    }

    else if (this.props.params.reportType === ':SuministroLaboratorio'){
      //console.log(this.props.reportActions)
      this.props.actions.requestReportsSuppliesPerLab();
    }

    else{
      console.log("Ningún action se disparó")
    }
  }

  componentWillReceiveProps(nextProps){
      if (this.props.params.reportType !== nextProps.params.reportType){
        if (nextProps.params.reportType === ':ValorTotal'){
          //console.log(this.props.reportActions)
          this.props.actions.requestReportsTotalValue(); //mapDispatchToProps
        }
        else if (nextProps.params.reportType === ':CantidadInventario'){
          //console.log(this.props.reportActions)
          this.props.actions.requestReportsInventaryAmount(); //mapDispatchToProps
        }

        else if (nextProps.params.reportType === ':EstadoActivos'){
          //console.log(this.props.reportActions)
          this.props.actions.requestReportsAssetsState(); //mapDispatchToProps
        }

        else if (nextProps.params.reportType === ':Bitacora'){
          //console.log(this.props.reportActions)
          this.props.actions.requestReportsLog(); //mapDispatchToProps
        }
        else if (nextProps.params.reportType === ':SuministroLaboratorio'){
          //console.log(this.props.reportActions)
          this.props.actions.requestReportsSuppliesPerLab();
        }
        else{
          console.log("Ningún prop ha cambiado")
        }
      }
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}
        isAdmin={this.props.isAdmin} alerts={this.props.alerts}>
        <ReportsLayout reportType={this.props.params.reportType} reports={this.props.reports}
        handleConsuptionReportSubmit={this.handleConsuptionReportSubmit}
        errorMsg={this.state.errorMsg}/>
      </App>
    );
  }

  handleConsuptionReportSubmit(event){
    event.preventDefault();
    const fechaInicio = event.target.fechaInicio.value;
    const fechaFin = event.target.fechaFin.value;
    const ConsumoSuministro = {
      fechaInicio,
      fechaFin
    }

    if (fechaInicio <= fechaFin && fechaInicio !== '' && fechaFin !== '') {
      this.props.actions.requestReportsSupplyConsuption(ConsumoSuministro);
      this.setState({errorMsg: ''})
    }
    else{
      this.setState({errorMsg: 'Error al ingresar las fechas'})
    }

  }
}


function mapStateToProps(state, ownProps) {
  return {
    alerts: state.alerts || {},
    reports: state.reports,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    isAdmin: state.login.session !== undefined ? state.login.session.isAdmin : undefined,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reportActions, dispatch) //import
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReportsPage);
