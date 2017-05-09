import React, { Component } from 'react'
import NewSupplyLayout from './layout'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as categoriesActions from '../../actions/categories'
import * as suppliesActions from '../../actions/supplies'
import App from '../../components/app'

class NewSupplyPage extends Component {

  constructor(props) {
    super(props)
    this.handleCategorySubmit = this.handleCategorySubmit.bind(this)
    this.handleSupplySubmit = this.handleSupplySubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.triggerInputStateChange = this.triggerInputStateChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleCategoryFormChange = this.handleCategoryFormChange.bind(this)
    this.state = {
      supplyDescription: '',
      supplyAmount: '',
      supplyPrice: '',
      supplyCode: '',
      supplyName: '',
      categoryName: '',
      categoryImage: '',
      imagePreviewUrl: '',
      isEmpty: true,
      isCategoryEmpty: true}
  }

  componenteWillMount() {
    this.props.categoriesActions.requestCategories()
  }

  render () {
    let {imagePreviewUrl} = this.state
    let $imagePreview = null
    if(imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt=''/>)
    }
    else {
      $imagePreview = (<div className="previewText">Selecciona una imágen para previsualizarla</div>)
    }
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}>
        <NewSupplyLayout className="sa-new-supply-layout" categories={this.props.categories}
          handleCategorySubmit={this.handleCategorySubmit}
          handleSupplySubmit={this.handleSupplySubmit}
          isEmpty={this.state.isEmpty}
          isCategoryEmpty={this.state.isCategoryEmpty}
          handleInputChange={this.handleInputChange}
          handleCategoryFormChange={this.handleCategoryFormChange}
          validateInput={this.validateInput}
          handleImageChange={this.handleImageChange}
          imagePreviewInfo={$imagePreview}/>
      </App>
    )
  }

  handleImageChange (event) {
    event.preventDefault()
    let reader = new FileReader()
    let file = event.target.files[0]
    reader.onloadend = () => {
      this.setState({
        categoryImage: file,
        imagePreviewUrl: reader.result},
        function(){return this.triggerCategoryFormChange(this.state)})
    }
    reader.readAsDataURL(file)
  }

  handleCategorySubmit (event) {
    event.preventDefault()
    const categoryName = event.target.categoryName.value
    const categoryImage = this.state.imagePreviewUrl
    const newCategory = {
      categoryName,
      categoryImage
    }
    console.log("Entro a agregar")
    this.props.categoriesActions.addCategory(newCategory)
    this.setState({
      categoryImage: '',
      imagePreviewUrl: ''
    })
    event.target.reset()
  }

  handleSupplySubmit (event) {
    event.preventDefault()
    const supplyName = event.target.name.value
    const supplyCode = event.target.code.value
    const supplyPrice = event.target.price.value
    const supplyDescription = event.target.description.value
    const categoryCode = Number(
    event.target.categoriesSelect[event.target.categoriesSelect.selectedIndex].id)
    const supplyAmount = event.target.amount.value
    const supplyDateOut = event.target.dateOut.value
    const newSupply = {
      supplyName,
      supplyCode,
      supplyPrice,
      supplyDescription,
      categoryCode,
      supplyAmount,
      supplyDateOut
    }
    this.props.suppliesActions.addSupply(newSupply)
    event.target.reset()
  }

  handleCategoryFormChange (event) {
    switch (event.target.name) {
      case 'categoryName':
        this.setState({categoryName: event.target.value},
          function(){return this.triggerCategoryFormChange(this.state)})
        break
      default:
        break
    }
  }

  handleInputChange(event) {
    switch (event.target.name) {
      case 'description':
        this.setState({supplyDescription: event.target.value},
          function(){return this.triggerInputStateChange(this.state)})
        break
      case 'amount':
        this.setState({supplyAmount: event.target.value},
          function(){return this.triggerInputStateChange(this.state)})
        break
      case 'price':
        this.setState({supplyPrice: event.target.value},
          function(){return this.triggerInputStateChange(this.state)})
        break
      case 'code':
        this.setState({supplyCode: event.target.value},
          function(){return this.triggerInputStateChange(this.state)})
          break
      case 'name':
        this.setState({supplyName: event.target.value},
          function(){return this.triggerInputStateChange(this.state)})
          break
      default:
        break
    }
  }

  triggerCategoryFormChange(state) {
    if(state.categoryName !== '' && state.categoryImage !== ''
        && state.isCategoryEmpty){
      this.setState({isCategoryEmpty: !state.isCategoryEmpty})
    }
    else if((state.categoryName === '' || state.categoryImage === '')
      && !state.isCategoryEmpty){
        this.setState({isCategoryEmpty: !this.state.isCategoryEmpty})
      }
  }

  triggerInputStateChange(state) {
    if(state.supplyDescription !== '' && state.supplyPrice !== '' &&
        state.supplyAmount !== '' && state.supplyCode !== ''
        && state.supplyName !== '' && state.isEmpty) {
          this.setState({isEmpty: !state.isEmpty})
    }
    else if((state.supplyDescription === '' || state.supplyAmount === '' ||
              state.supplyPrice === '' || state.supplyCode === ''
              || state.supplyName === '')
                && !this.state.isEmpty) {
                this.setState({isEmpty: !this.state.isEmpty})
    }
  }

  validateInput(event) {
    event.persist()
    const theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if(event.target.name === 'amount') {
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
    suppliesActions: bindActionCreators(suppliesActions, dispatch)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSupplyPage)
