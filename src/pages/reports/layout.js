import React from 'react';
import Report from '../../components/report';
import './index.css';

const ReportsLayout = ({ reports, reportType }) => {
  //console.log(reports);
    return (
      <div className="sa-report-container">

        <h3 >Reportes</h3>
        <div className="sa-flexbox-table">
          <div className='thead'>
            <div>
              <div>
              {
                <div>
                {
                  reportType === ':ValorTotal'
                  ?
                  <div className="sa-flexbox-thead">Valor Total</div>

                  : reportType === ':CantidadInventario'
                  ?
                  <div className="sa-flexbox-row">
                    <div className="sa-flexbox-thead">Código</div>
                    <div className="sa-flexbox-thead">Descripción</div>
                    <div className="sa-flexbox-thead">Nombre</div>
                    <div className="sa-flexbox-thead">Cantidad</div>
                    <div className="sa-flexbox-thead">Locaclización</div>
                  </div>
                  : reportType === ':EstadoActivos'
                  ?
                  <div className="sa-flexbox-row">
                    <div className="sa-flexbox-thead">Código</div>
                    <div className="sa-flexbox-thead">Descripción</div>
                    <div className="sa-flexbox-thead">Nombre</div>
                    <div className="sa-flexbox-thead">Estado</div>
                    <div className="sa-flexbox-thead">Locaclización</div>
                  </div>
                  : reportType === ':Bitacora'
                  ?
                  <div>
                    <div className="sa-flexbox-thead">Accion</div>
                    <div className="sa-flexbox-thead">Fecha</div>
                  </div>
                  : reportType === ':SuministroLaboratorio'
                  ?
                  <div>
                    <div className="sa-flexbox-thead">Código</div>
                    <div className="sa-flexbox-thead">Descripción</div>
                    <div className="sa-flexbox-thead">Nombre</div>
                    <div className="sa-flexbox-thead">Cantidad</div>
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
              .keys(reports)
              .map(key => <Report key={key} details={reports[key]} reportType={reportType}/>)
            }
          </div>
        </div>
      </div>
    );
  };

export default ReportsLayout;