import React from 'react';
import Alert from '../../components/alert';
import './index.css';

const AlertsLayout = (props)=> {
  console.log("Alerts")
  console.log(props.alerts)
    return (
      <div className="sa-alert-container">

        <h3 >Alertas</h3>
        <div className="sa-flexbox-table">
          <div className="thead">
            <div className="sa-flexbox-row">
              <div className="sa-flexbox-thead">Código</div>
              <div className="sa-flexbox-thead">Nombre</div>
              <div className="sa-flexbox-thead">Descripción</div>
              <div className="sa-flexbox-thead">Cantidad</div>
            </div>
          </div>
          <div className="tbody" >
            {
              Object
              .keys(props.alerts)
              .map(key => <Alert key={key} details={props.alerts[key]}/>)
            }
          </div>
        </div>
      </div>
    )
}

export default AlertsLayout
