import React, {PropTypes} from 'react'
import './index.css'

const ConsumeSuppliesLayout = (supplies) => {
    return (
      <div className="sa-consume-supplies--container">
        hola
      </div>
    )
}

ConsumeSuppliesLayout.propTypes={
  supplies: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
    ]).isRequired
};

export default ConsumeSuppliesLayout
