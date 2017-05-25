import React, {PropTypes} from 'react'
import Category from '../../components/category'
import './layout.css'

const SearchSupplyLayout = ({categories}) => {
  return (
    <div>
      <div className="sa-flexbox-grid-container">
        {
          Object
          .keys(categories)
          .map(key => <Category key={key} categoryDetails={categories[key]} link={'supplies'}/>)
        }
      </div>
    </div>

  )

}

SearchSupplyLayout.propTypes = {
  categories: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

export default SearchSupplyLayout
