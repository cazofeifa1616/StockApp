import React from 'react'
//import Asset from '../../components/asset'
//import SearchSupplyBox from '../../components/search-asset-box'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
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

const AssetsLayout = (props) => {
  //const getAssets = assets || {}
  console.log("assets")
  console.log(props.assets)
  const myAssets = []
  Object
  .keys(props.assets)
  .map(key => myAssets.push({
    assetCode: props.assets[key].assetCode,
    assetName: props.assets[key].assetName,
    assetDescription: props.assets[key].assetDescription,
    assetDateOfAdmission: props.assets[key].assetDateOfAdmission,
    assetExpirationDate: props.assets[key].assetExpirationDate,
    assetLocation: props.assets[key].assetLocation,
    assetState: props.assets[key].assetState
  }))

    return (
      <div className="sa-asset-container">

        <h3 >Lista de activos</h3>
        <BootstrapTable data={myAssets} striped={true} hover={true}>
          <TableHeaderColumn width='36' dataField="assetCode" isKey={true} dataSort={true} caretRender={ getCaret } defaultASC>Código</TableHeaderColumn>
          <TableHeaderColumn width='100' dataField="assetName" dataSort={true} caretRender={ getCaret }>Nombre</TableHeaderColumn>
          <TableHeaderColumn width='100' dataField="assetDescription" dataSort={true} caretRender={ getCaret }>Descripción</TableHeaderColumn>
          <TableHeaderColumn width='36' dataField="assetDateOfAdmission" dataSort={true} caretRender={ getCaret }>Fecha de ingreso</TableHeaderColumn>
          <TableHeaderColumn width='36' dataField="assetExpirationDate" dataSort={true} caretRender={ getCaret }>Fecha de expiración</TableHeaderColumn>
          <TableHeaderColumn width='36' dataField="assetLocation" dataSort={true} caretRender={ getCaret }>Localización</TableHeaderColumn>
          <TableHeaderColumn width='36' dataField="assetState" dataSort={true} caretRender={ getCaret }>Estado</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
}



export default AssetsLayout
