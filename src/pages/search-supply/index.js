import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import SearchSupplyLayout from './layout'

class SearchSupplyPage extends Component {
  render () {
    return (
      <SearchSupplyLayout categories={this.props.categories}/>
    )
  }
}

SearchSupplyPage.propTypes = {
  categories: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(SearchSupplyPage)
