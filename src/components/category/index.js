import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import './index.css'

//Cambio para base de datos
//const Category = ({props}) => {
const Category = (props) => {

  return(
    <div>
      <Link className="sa-flexbox-row-grid-container"
        to={`/${props.link}/${props.categoryDetails.categoryCode}`}>
        <img className="sa-category-image" src={props.categoryDetails.categoryImage} alt={props.categoryDetails.descripcion}></img>
        <h3 className="categoryName">{props.categoryDetails.codigo}</h3>
      </Link>
    </div>
  )
}



Category.propTypes={
  categoryDetails: PropTypes.object.isRequired
}

export default Category
