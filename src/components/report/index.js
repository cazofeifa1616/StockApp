import React, { Component } from 'react';
import './index.css';

class Report extends Component {

  render () {
    /*
		Valor total
		*/
    const { supplyTotalPrice } = this.props.details;

    /*
		Cantidad Inventario
		*/
    const { code } = this.props.details;
    const { description } = this.props.details;
    const { name } = this.props.details;
    const { amount } = this.props.details;

    /*
		Estado activos
		*/
    const { assetCode } = this.props.details;
    const { assetDescription } = this.props.details;
    const { assetName } = this.props.details;
    const { assetState } = this.props.details;
    const { assetLocation } = this.props.details;

    /*
    Consumo de SuministroLaboratorio
    */

    const { consuptionSupplyCode } = this.props.details;
    const { consuptionSupplyDescription } = this.props.details;
    const { consuptionSupplyName } = this.props.details;
    const { consuptionSupplyAmount } = this.props.details;

    /*
		Bitacora
		*/
    const { action } = this.props.details;
    const { actionDate } = this.props.details;

    /*
	 SuministroLaboratorio
	 */
    const { supplyCode } = this.props.details;
    const { supplyDescription } = this.props.details;
    const { supplyName } = this.props.details;
    const { supplyAmount } = this.props.details;
    const { supplyLocation } = this.props.details;


    return (
    <div>
    {
        this.props.reportType === ':ValorTotal'
    ?
    <div className="sa-flexbox-col">{ supplyTotalPrice }</div>

    : this.props.reportType === ':CantidadInventario'
    ?
    <div className="sa-flexbox-row">
  	  <div className="sa-flexbox-col">{code}</div>
  	  <div className="sa-flexbox-col">{description}</div>
  	  <div className="sa-flexbox-col">{name}</div>
  	  <div className="sa-flexbox-col">{amount}</div>
    </div>

    : this.props.reportType === ':ConsumoSuministro'
    ?
    <div className="sa-flexbox-row">
  	  <div className="sa-flexbox-col">{consuptionSupplyCode}</div>
  	  <div className="sa-flexbox-col">{consuptionSupplyDescription}</div>
  	  <div className="sa-flexbox-col">{consuptionSupplyName}</div>
  	  <div className="sa-flexbox-col">{consuptionSupplyAmount}</div>
    </div>

    : this.props.reportType === ':EstadoActivos'
    ?
    <div className="sa-flexbox-row">
  		<div className="sa-flexbox-col">{assetCode}</div>
  	  <div className="sa-flexbox-col">{assetDescription}</div>
  	  <div className="sa-flexbox-col">{assetName}</div>
  	  <div className="sa-flexbox-col">{assetState}</div>
  	  <div className="sa-flexbox-col">{assetLocation}</div>
    </div>
    : this.props.reportType === ':Bitacora'
    ?
    <div className="sa-flexbox-row">
  	  <div className="sa-flexbox-col">{action}</div>
      <div className="sa-flexbox-col">{actionDate}</div>
    </div>
    : this.props.reportType === ':SuministroLaboratorio'
    ?
    <div className="sa-flexbox-row">
      <div className="sa-flexbox-col">{supplyCode}</div>
      <div className="sa-flexbox-col">{supplyDescription}</div>
      <div className="sa-flexbox-col">{supplyName}</div>
      <div className="sa-flexbox-col">{supplyAmount}</div>
      <div className="sa-flexbox-col">{supplyLocation}</div>
	  </div>
    : false
    }
    </div>
  );
  }
}
export default Report;
