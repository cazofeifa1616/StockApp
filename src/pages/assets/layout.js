import React, {PropTypes} from 'react'
import Asset from '../../components/asset'
//import SearchSupplyBox from '../../components/search-asset-box'
import './index.css'


 //<SearchSupplyBox className="sa-search-asset-box"/>
const AssetsLayout = ({assets}) => {
    return (
      <div className="sa-asset-container">

        <h3 >Lista de activos</h3>
        <table className="sa-flexbox-table">
          <thead>
            <tr className="sa-flexbox-row">
              <th className="sa-flexbox-thead">Código</th>
              <th className="sa-flexbox-thead">Nombre</th>
              <th className="sa-flexbox-thead">Descripción</th>
              <th className="sa-flexbox-thead">Precio</th>
              <th className="sa-flexbox-thead">Fecha de ingreso</th>
              <th className="sa-flexbox-thead">Fecha de expiración</th>
              <th className="sa-flexbox-thead">Localización</th>
              <th className="sa-flexbox-thead">Estado</th>
            </tr>
          </thead>
          <tbody>
            {
              Object
              .keys(assets)
              .map(key => <Asset key={key} details={assets[key]}/>)
            }
          </tbody>
        </table>
      </div>
    )
}

AssetsLayout.propTypes={
  assets: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
    ]).isRequired
};



export default AssetsLayout
