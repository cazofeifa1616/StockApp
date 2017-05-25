//import fetch from 'isomorphic-fetch'
import sampleData from '../../static/json/sample-data'

class CategoryApi {
  static getAllCategories() {
    return sampleData

    //--------------------------------------------------------
    //Conexión a base de datos
    /*
    return fetch('http://localhost:3001/suministros')
    .then(response => {
      console.log(response)
      return response
    }).catch(error => {
      return error
    })
    */
    //--------------------------------------------------------
  }

  static addCategory(category) {    
    var newNameCategory = 'Category '+Date.now()
    sampleData[newNameCategory] =
    {categoryCode: Date.now(),
    categoryImage: category.categoryImage,
    categoryName: category.categoryName}
    return sampleData


    //--------------------------------------------------------
    //Conexión a base de datos
    /*
    var a = 'http://localhost:3001/agregaSuministro/';
    var b = 'Hola2'
    var url = new URL(a.concat(b))

    return fetch(url)
    .then(response => {
      return response.json()
    }).catch(error => {
      //console.log('No entró')
      return error
    })
    */
    //--------------------------------------------------------
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
