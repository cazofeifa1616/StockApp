import React, { Component, PropTypes } from 'react'
import NewAssetLayout from './layout'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as categoriesActions from '../../actions/categories-assets'
import * as assetsActions from '../../actions/assets'
import App from '../../components/app'

class NewAssetPage extends Component {

  constructor(props) {
    super(props)
    this.handleCategoryAssetSubmit = this.handleCategoryAssetSubmit.bind(this)
    this.handleAssetSubmit = this.handleAssetSubmit.bind(this)
    this.handleAddAssetInputChange = this.handleAddAssetInputChange.bind(this)
    this.handleAssetImageChange = this.handleAssetImageChange.bind(this)
    this.triggerAddAssetInputStateChange = this.triggerAddAssetInputStateChange.bind(this)
    this.handleAssetCategoryFormChange = this.handleAssetCategoryFormChange.bind(this)
    this.state = {
      assetCategory: '',
      assetDescription: '',
      assetName: '',
      assetPrice: '',
      assetCode: '',
      assetLocation: '',
      assetState: '',
      assetCategoryImage: '',
      assetImagePreviewUrl: '',
      addAssetIsEmpty: true,
      addCategoryAssetIsEmpty: true
    }
  }

  componentWillMount() {
    this.props.categoriesActions.requestAssetsCategories()
  }

  render() {
    let {assetImagePreviewUrl} = this.state
    let $assetImagePreview = null
    if(assetImagePreviewUrl) {
      $assetImagePreview = (<img src={assetImagePreviewUrl} alt=''/>)
    }
    else {
      $assetImagePreview = (<div className="previewText">Selecciona una imágen para previsualizarla</div>)
    }
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}
        isAdmin={this.props.isAdmin} alerts={this.props.alerts}>
        <NewAssetLayout categoriesAssets={this.props.categoriesAssets}
          handleCategoryAssetSubmit={this.handleCategoryAssetSubmit}
          handleAssetSubmit={this.handleAssetSubmit}
          addAssetIsEmpty={this.state.addAssetIsEmpty}
          handleAddAssetInputChange={this.handleAddAssetInputChange}
          addCategoryAssetIsEmpty={this.state.addCategoryAssetIsEmpty}
          handleAssetCategoryFormChange={this.handleAssetCategoryFormChange}
          validateAssetInput={this.validateAssetInput}
          handleAssetImageChange={this.handleAssetImageChange}
          imageAssetPreviewInfo={$assetImagePreview}/>
      </App>
    )
  }

  handleCategoryAssetSubmit (event) {
    event.preventDefault()
    const categoryName = event.target.assetCategory.value
    const assetCategoryImage = this.state.assetImagePreviewUrl
    const newCategory = {
      categoryName,
      assetCategoryImage
    }
    this.props.categoriesActions.addAssetsCategory(newCategory)
    this.setState({
      assetCategoryImage: '',
      assetImagePreviewUrl: ''
    })
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

  handleAssetCategoryFormChange (event) {
    switch (event.target.name) {
      case 'assetCategory':
        this.setState({assetCategory: event.target.value},
          function(){return this.triggerCategoryFormChange(this.state)})
        break
      default:
        break
    }
  }


  handleAddAssetInputChange(event) {
    switch (event.target.name) {
      case 'assetDescription':
        //console.log("description")
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

  handleAssetImageChange (event) {
    event.preventDefault()
    let reader = new FileReader()
    let file = event.target.files[0]
    reader.onloadend = () => {
      this.setState({
        assetCategoryImage: file,
        assetImagePreviewUrl: reader.result},
        function(){return this.triggerCategoryFormChange(this.state)})
    }
    reader.readAsDataURL(file)
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

  triggerCategoryFormChange(state) {
    //console.log(state.assetCategory);
    //console.log(state.assetCategoryImage);
    if(state.assetCategory !== '' && state.assetCategoryImage !== ''
        && state.addCategoryAssetIsEmpty){
      this.setState({addCategoryAssetIsEmpty: !state.addCategoryAssetIsEmpty})
    }
    else if((state.assetCategory === '' || state.assetCategoryImage === '')
      && !state.addCategoryAssetIsEmpty){
        this.setState({addCategoryAssetIsEmpty: !this.state.addCategoryAssetIsEmpty})
      }
  }

  validateAssetInput(event) {
    event.persist()
    const theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if(event.target.name === 'assetPrice') {
      regex = /[0-9]/;
    }
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
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
    alerts: state.alerts || {},
    categoriesAssets: state.categoriesAssets,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    isAdmin: state.login.session !== undefined ? state.login.session.isAdmin : false
  }
}

NewAssetPage.propTypes = {
  assets: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAssetPage)
