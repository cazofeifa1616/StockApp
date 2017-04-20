import React from 'react'
import Supply from '../../components/supply'
//import SearchSupplyBox from '../../components/search-supply-box'
import './index.css'


//<SearchSupplyBox className="sa-search-supply-box"/>
const SuppliesLayout = ({supplies}) => {
    return (
      <div className="sa-supply-container">

        <h3 >Lista de suministros</h3>
        <table className="sa-flexbox-table">
          <thead>
            <tr className="sa-flexbox-row">
              <th className="sa-flexbox-thead">Código</th>
              <th className="sa-flexbox-thead">Nombre</th>
              <th className="sa-flexbox-thead">Descripción</th>
              <th className="sa-flexbox-thead">Precio</th>
              <th className="sa-flexbox-thead">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {
              Object
              .keys(supplies)
              .map(key => <Supply key={key} details={supplies[key]}/>)
            }
          </tbody>
        </table>
      </div>
    )
}

export default SuppliesLayout
