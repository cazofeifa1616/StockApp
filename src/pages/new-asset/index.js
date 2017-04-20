import React, { Component, PropTypes } from 'react'
import NewAssetLayout from './layout'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as categoriesActions from '../../actions/categories-assets'
import * as assetsActions from '../../actions/assets'

class NewAssetPage extends Component {

  constructor(props) {
    super(props)
    this.handleCategoryAssetSubmit = this.handleCategoryAssetSubmit.bind(this)
    this.handleAssetSubmit = this.handleAssetSubmit.bind(this)
    this.handleAddAssetInputChange = this.handleAddAssetInputChange.bind(this)
    this.triggerAddAssetInputStateChange = this.triggerAddAssetInputStateChange.bind(this)
    this.handleAddCategoryAssetInputChange = this.handleAddCategoryAssetInputChange.bind(this)
    this.triggerAddCategoryAssetInputStateChange = this.triggerAddCategoryAssetInputStateChange.bind(this)
    this.state = {
      assetCategory: '',
      assetDescription: '',
      assetName: '',
      assetPrice: '',
      assetCode: '',
      assetLocation: '',
      assetState: '',
      addAssetIsEmpty: true,
      addCategoryAssetIsEmpty: true
    }
  }

  componenteWillMount() {
    this.props.categoriesActions.requestAssetsCategories()
  }

  handleCategoryAssetSubmit (event) {
    event.preventDefault()
    const categoryName = event.target.categoryName.value
    const categoryImage = 'this is the image'
    const newCategory = {
      categoryName,
      categoryImage
    }
    this.props.categoriesActions.addAssetsCategory(newCategory)
    event.target.reset()
  }

  handleAssetSubmit (event) {
    //console.log(event.target.assetName.value)
    event.preventDefault()
    const assetName = event.target.assetName.value
    const assetCode = event.target.assetCode.value
    const assetPrice = event.target.assetPrice.value
    const assetDescription = event.target.assetDescription.value
    const assetExpirationDate = event.target.assetExpirationDate.value
    const assetState = event.target.assetState.value
    const assetLocation = event.target.assetLocation.value
    const categoryCode = Number(
    event.target.categoriesAssets[event.target.categoriesAssets.selectedIndex].id)
    //console.log(categoryCode)
    const newAsset = { 
      assetName,
      assetCode,
      assetPrice,
      assetDescription,
      assetExpirationDate,
      assetLocation,
      assetState,
      categoryCode
    }
    this.props.assetsActions.addAsset(newAsset)
    event.target.reset()
  }


handleAddAssetInputChange(event) {
    switch (event.target.name) {
      case 'assetDescription':
        console.log("description")
        this.setState({assetDescription: event.target.value},
          function(){return this.triggerAddAssetInputStateChange(this.state)})
        break
      case 'assetName':
        this.setState({assetName: event.target.value},
          function(){return this.triggerAddAssetInputStateChange(this.state)})
        break
      case 'assetCode':
        this.setState({assetCode: event.target.value},
          function(){return this.triggerAddAssetInputStateChange(this.state)})
        break
      case 'assetPrice':
        this.setState({assetPrice: event.target.value},
          function(){return this.triggerAddAssetInputStateChange(this.state)})
        break
      case 'assetLocation':
        this.setState({assetLocation: event.target.value},
          function(){return this.triggerAddAssetInputStateChange(this.state)})
        break
      case 'assetState':
        this.setState({assetState: event.target.value},
          function(){return this.triggerAddAssetInputStateChange(this.state)})
        break
      default:
        break
    }
  }

  handleAddCategoryAssetInputChange(event) {
    switch (event.target.name) {
      case 'categoryName':
        this.setState({assetCategory: event.target.value},
          function(){return this.triggerAddCategoryAssetInputStateChange(this.state)})
        break
      default:
        break
    }
  }

  triggerAddAssetInputStateChange(state) {
    if(state.assetDescription !== '' && state.assetPrice !== '' &&
        state.assetName !== '' && state.addAssetIsEmpty &&
        state.assetLocation !== '' && state.assetCode !== '' &&
        state.assetState !== '')
        {
          this.setState({addAssetIsEmpty: !state.addAssetIsEmpty})
    }
    else if((this.state.assetDescription === '' || this.state.assetName === '' ||
              this.state.assetPrice === '' || this.state.assetLocation === '' ||
              this.state.assetState === '' || this.state.assetCode === '')
               && !this.state.addAssetIsEmpty) {
                this.setState({addAssetIsEmpty: !this.state.addAssetIsEmpty})
    }
  }

  triggerAddCategoryAssetInputStateChange(state) {
    if(state.assetCategory !== '' && state.addCategoryAssetIsEmpty) {
          this.setState({addCategoryAssetIsEmpty: !state.addCategoryAssetIsEmpty})
    }
    else if((this.state.assetCategory === '') && !this.state.addAssetSupplyIsEmpty) {
                this.setState({addCategoryAssetIsEmpty: !this.state.addCategoryAssetIsEmpty})
    }
  }

  render () {
    return (
      <NewAssetLayout categoriesAssets={this.props.categoriesAssets}
        handleCategoryAssetSubmit={this.handleCategoryAssetSubmit}
        handleAssetSubmit={this.handleAssetSubmit}
        addAssetIsEmpty={this.state.addAssetIsEmpty}
        handleAddAssetInputChange={this.handleAddAssetInputChange}
        addCategoryAssetIsEmpty={this.state.addCategoryAssetIsEmpty}
        handleAddCategoryAssetInputChange={this.handleAddCategoryAssetInputChange}/>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    categoriesActions: bindActionCreators(categoriesActions, dispatch),
    assetsActions: bindActionCreators(assetsActions, dispatch)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    categoriesAssets: state.categoriesAssets
  }
}

NewAssetPage.propTypes = {
  supplies: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAssetPage)