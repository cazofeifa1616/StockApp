 //import fetch from 'isomorphic-fetch'
import sampleSupplies from '../../static/json/sample-supplies'

class SuppliesApi {
  static getSuppliesPerCategory(categoryId) {
    return Object.keys(sampleSupplies)
    .filter(key => sampleSupplies[key].categoryCode === +categoryId)
    .map(key => sampleSupplies[key])
    /*
    return fetch()
      .then(response => {
        return response.json()
      }).catch(error => {
        return error
      })
      */
  }

  static updateSupplyAmount (supplyCode) {
    Object.keys(sampleSupplies)
    .filter(key => sampleSupplies[key].supplyCode === +supplyCode)
    .map(key => sampleSupplies[key].supplyAmount--)
    return sampleSupplies
  }

  static getAllSupplies() {
    return sampleSupplies
    /*
    return fetch()
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
    */
  }

  static getSupplyAmount (supplyCode) {
    return Object.keys(sampleSupplies)
    .filter(key => sampleSupplies[key].supplyCode === +supplyCode)
    .map(key => sampleSupplies[key].supplyAmount)
  }

  static updateSupply(supply) {
    Object.keys(sampleSupplies)
    .filter(key => sampleSupplies[key].supplyCode === +supply.supplyCode)
    .map(key => {sampleSupplies[key].supplyDescription = supply.supplyDescription
      sampleSupplies[key].supplyAmount = supply.supplyAmount
      sampleSupplies[key].supplyPrice = supply.supplyPrice
      return true})
    return sampleSupplies
    /*
    const request = new Request({
      method: 'PUT',
      headers: new Headers({
        'Content-Type' : 'application/json'
      }),
      body: JSON.strngify({supply: supply})
    })
    */
  }

  static addSupply(supply) {
    var newNameSupply = 'Supply '+Date.now()
    sampleSupplies[newNameSupply] =
    {supplyName: supply.supplyName,
    supplyCode: supply.supplyCode,
    supplyPrice: supply.supplyPrice,
    supplyDescription: supply.supplyDescription,
    categoryCode: supply.categoryCode}
    return sampleSupplies
  }
}

export default SuppliesApi
