import React from 'react';
import Report from '../../components/report';
import './index.css';

const ReportsLayout = (props)=> {
    return (
      <div className="sa-report-container">
      <h3>Reporte </h3>
        {
          props.reportType === ":ConsumoSuministro"
          ?
          <form className=".sa-report-date"
            onSubmit={(e) => props.handleConsuptionReportSubmit(e)}>
            <label>Fecha de inicio</label>
            <input type="date" name="fechaInicio" placeholder="Fecha de inicio"></input>
            <label>Fecha final</label>
            <input type="date" name="fechaFin" placeholder="Fecha final"></input>
            <input className="sa-btn" type="submit" value="Generar reporte" />
            <label className='sa-label'>{props.errorMsg}</label>
          </form>
          : false
        }
        <div className="sa-flexbox-table">
          <div className='thead'>
            <div>
              <div>
              {
                <div>
                {
                  props.reportType === ':ValorTotal'
                  ?

                  <div className="sa-flexbox-thead">Valor Total</div>

                  : props.reportType === ':CantidadInventario'
                  ?
                  <div className="sa-flexbox-row">
                    <div className="sa-flexbox-thead">Código</div>
                    <div className="sa-flexbox-thead">Descripción</div>
                    <div className="sa-flexbox-thead">Nombre</div>
                    <div className="sa-flexbox-thead">Cantidad</div>
                  </div>

                  : props.reportType === ':ConsumoSuministro'
                  ?
                  <div className="sa-flexbox-row">
                    <div className="sa-flexbox-thead">Código</div>
                    <div className="sa-flexbox-thead">Descripción</div>
                    <div className="sa-flexbox-thead">Nombre</div>
                    <div className="sa-flexbox-thead">Cantidad</div>
                  </div>

                  : props.reportType === ':EstadoActivos'
                  ?
                  <div className="sa-flexbox-row">
                    <div className="sa-flexbox-thead">Código</div>
                    <div className="sa-flexbox-thead">Descripción</div>
                    <div className="sa-flexbox-thead">Nombre</div>
                    <div className="sa-flexbox-thead">Estado</div>
                    <div className="sa-flexbox-thead">Localización</div>
                  </div>
                  : props.reportType === ':Bitacora'
                  ?
                  <div className="sa-flexbox-row">
                    <div className="sa-flexbox-thead">Accion</div>
                    <div className="sa-flexbox-thead">Fecha</div>
                  </div>
                  : props.reportType === ':SuministroLaboratorio'
                  ?
                  <div className="sa-flexbox-row">
                    <div className="sa-flexbox-thead">Código</div>
                    <div className="sa-flexbox-thead">Descripción</div>
                    <div className="sa-flexbox-thead">Nombre</div>
                    <div className="sa-flexbox-thead">Cantidad</div>
                    <div className="sa-flexbox-thead">Localización</div>
                  </div>
                  :false
                }
                </div>
              }
              </div>
            </div>
          </div>
          <div className="tbody">
            {
              Object
              .keys(props.reports)
              .map(key => <Report key={key} details={props.reports[key]} reportType={props.reportType}/>)
            }
          </div>
        </div>
      </div>
    );
  };

export default ReportsLayout;
