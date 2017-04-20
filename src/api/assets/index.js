import sampleAssets from '../../static/json/sample-assets'

class AssetsApi {
  static getAssetsPerCategory(categoryId) {
    var assets = []
    Object.keys(sampleAssets)
    .filter(key => sampleAssets[key].categoryCode === +categoryId)
    .map(key => assets.push(sampleAssets[key]))
    return assets
    /*
    return fetch()
      .then(response => {
        return response.json()
      }).catch(error => {
        return error
      })
      */
  }

  static getAllAssets() {
    return sampleAssets
    /*
    return fetch()
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
    */
  }

  static updateAsset(asset) {
    Object.keys(sampleAssets)
    .filter(key => sampleAssets[key].assetCode === +asset.assetCode)
    .map(key => {sampleAssets[key].assetDescription = asset.assetDescription
      sampleAssets[key].assetName = asset.assetName
      sampleAssets[key].assetPrice = asset.assetPrice
      sampleAssets[key].assetDateOfAdmission = asset.assetDateOfAdmission
      sampleAssets[key].assetExpirationDate = asset.assetExpirationDate
      sampleAssets[key].assetLocation = asset.assetLocation
      sampleAssets[key].assetState = asset.assetState
      return true})
    console.log(sampleAssets);
    return sampleAssets
    /*
    const request = new Request({
      method: 'PUT',
      headers: new Headers({
        'Content-Type' : 'application/json'
      }),
      body: JSON.strngify({asset: asset})
    })
    */
  }

  static addAsset(asset) {
    //console.log("En el action")
    var currentTime = new Date();
    var currentDate = currentTime.getDate()+ '/' + (currentTime.getMonth()+1) + '/' + currentTime.getFullYear()
    var newNameAsset = 'Asset '+Date.now()
    sampleAssets[newNameAsset]=
    {assetName: asset.assetName,
    assetCode: asset.assetCode,
    assetPrice: asset.assetPrice,
    assetDateOfAdmission: currentDate,
    assetExpirationDate: asset.assetExpirationDate,
    assetDescription: asset.assetDescription,
    assetLocation: asset.assetLocation,
    assetState: asset.assetState,
    categoryCode: asset.categoryCode}
    return sampleAssets
  }

}

export default AssetsApi
