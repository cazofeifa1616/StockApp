//import fetch from 'isomorphic-fetch'
import sampleDataAssets from '../../static/json/sample-data-assets'

class CategoryAssetsApi {
  static getAllAssetsCategories() {
    return sampleDataAssets
    /*
    return fetch(categoriesData)
      .then(response => {
        return response.json()
      }).catch(error => {
        return error
      })
      */
  }

  static addAssetsCategory(category) {
    var newNameCategory = 'Category '+Date.now()
    sampleDataAssets[newNameCategory] =
    {categoryCode: Date.now(),
    categoryImage: category.categoryImage,
    categoryName: category.categoryName}
    return sampleDataAssets
  }
}

export default CategoryAssetsApi
