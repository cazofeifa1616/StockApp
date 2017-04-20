//import fetch from 'isomorphic-fetch'
import sampleData from '../../static/json/sample-data'

class CategoryApi {
  static getAllCategories() {
    return sampleData
    /*
    return fetch(categoriesData)
      .then(response => {
        return response.json()
      }).catch(error => {
        return error
      })
      */
  }

  static addCategory(category) {
    var newNameCategory = 'Category '+Date.now()
    sampleData[newNameCategory] =
    {categoryCode: Date.now(),
    categoryImage: category.categoryImage,
    categoryName: category.categoryName}
    return sampleData
  }

    /*
    return fetch(categoriesData)
      .then(response => {
        return response.json()
      }).catch(error => {
        return error
      })
      */
}

export default CategoryApi
