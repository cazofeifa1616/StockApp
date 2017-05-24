import React from 'react'
// import Supply from '../../components/supply'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
// import 'react-bootstrap-table.min.css'
//import SearchSupplyBox from '../../components/search-supply-box'
import './index.css'

function getCaret(direction) {
  if (direction === 'asc') {
    return (
      <span>▲</span>
    );
  }
  if (direction === 'desc') {
    return (
      <span>▼</span>
    );
  }
  return (
    <span>▲</span>
  );
}

//<SearchSupplyBox className="sa-search-supply-box"/>
const SuppliesLayout = (supplies) => {
  const getSupplies = supplies.supplies || {}
  const mySupplies = []
  Object
  .keys(getSupplies)
  .map(key => mySupplies.push({
    supplyCode: getSupplies[key].supplyCode,
    supplyName: getSupplies[key].supplyName,
    supplyDescription: getSupplies[key].supplyDescription,
    supplyAmount: getSupplies[key].supplyAmount,
    supplyPrice: getSupplies[key].supplyPrice
  }))

    return (
      <div className="sa-supply-container">
        <h3 >Lista de suministros</h3>
          <BootstrapTable data={mySupplies} striped={true} hover={true}>
            <TableHeaderColumn width='36' dataField="supplyCode" isKey={true} dataSort={true} caretRender={ getCaret } defaultASC>Code</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField="supplyName" dataSort={true} caretRender={ getCaret }>Name</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField="supplyDescription" dataSort={true} caretRender={ getCaret }>Description</TableHeaderColumn>
            <TableHeaderColumn width='36' dataField="supplyAmount" dataSort={true} caretRender={ getCaret }>Amount</TableHeaderColumn>
            <TableHeaderColumn width='36' dataField="supplyPrice" dataSort={true} caretRender={ getCaret }>Price</TableHeaderColumn>
          </BootstrapTable>

      </div>
    )
}

export default SuppliesLayout
