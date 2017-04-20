import React, {PropTypes} from 'react'
import Category from '../../components/category'
import './layout.css'

const SearchAssetLayout = ({categoriesAssets}) => {
  //console.log(categoriesAssets);
  return (
    <div>
      <div className="sa-flexbox-grid-container">
        {
          Object
          .keys(categoriesAssets)
          .map(key => <Category key={key} categoryDetails={categoriesAssets[key]} link={'assets'}/>)
        }
      </div>
    </div>

  )

}

SearchAssetLayout.propTypes = {

  categoriesAssets: PropTypes.object.isRequired
}

export default SearchAssetLayout