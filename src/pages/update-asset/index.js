import React, { Component, PropTypes } from 'react'
import UpdateAssetLayout from './layout'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as assetsActions from '../../actions/assets' //es como cmd cd.. y cd
import App from '../../components/app'

class UpdateAssetPage extends Component {
  constructor (props) {
    super(props)
    this.handleUpdateAsset = this.handleUpdateAsset.bind(this)
    this.handleUpdateInputChange = this.handleUpdateInputChange.bind(this)
    this.triggerUpdateInputStateChange = this.triggerUpdateInputStateChange.bind(this)
    this.state = {
      assetDescription: '',
      assetName: '',
      assetPrice: '',
      assetCode: '',
      assetLocation: '',
      assetState: '',
      updateIsEmpty: true}
  }

  componentWillMount() {
    this.props.actions.requestAllAssets()
  }

  handleUpdateAsset (event) {
    //console.log("Entré a handle")
    event.preventDefault() //evita que la página se recargue
    /*
    Campos del form (en el componente)
    FALTAN LAS FECHAS
    */

    //console.log("des "+ event.target.assetDescription.value);
    const assetCode = event.target.assets[event.target.assets.selectedIndex].id //caso del select en el form
    const assetDescription = event.target.assetDescription.value
    const assetPrice = event.target.assetPrice.value
    const assetName = event.target.assetName.value
    //const assetDateOfAdmission = event.target.assetDateOfAdmission.value
    const assetExpirationDate = event.target.assetExpirationDate.value
    const assetLocation = event.target.assetLocation.value
    const assetState = event.target.assetState.value
    //const assetCategoryCode = event.target.assetCategoryCode.value
    event.target.reset() //limpia campos del form

    const updatedAsset = {
      assetCode,
      assetDescription,
      assetPrice,
      assetName,
      //assetDateOfAdmission,
      assetExpirationDate,
      assetLocation,
      assetState,
      //assetCategoryCode
    }
        this.props.actions.updateAsset(updatedAsset)
  }

  handleUpdateInputChange(event) {
    switch (event.target.name) {
      case 'assetDescription':
        console.log("description")
        this.setState({assetDescription: event.target.value},
          function(){return this.triggerUpdateInputStateChange(this.state)})
        break
      case 'assetName':
        this.setState({assetName: event.target.value},
          function(){return this.triggerUpdateInputStateChange(this.state)})
        break
      case 'assetCode':
        this.setState({assetCode: event.target.value},
          function(){return this.triggerUpdateInputStateChange(this.state)})
        break
      case 'assetPrice':
        this.setState({assetPrice: event.target.value},
          function(){return this.triggerUpdateInputStateChange(this.state)})
        break
      case 'assetLocation':
        this.setState({assetLocation: event.target.value},
          function(){return this.triggerUpdateInputStateChange(this.state)})
        break
      case 'assetState':
        this.setState({assetState: event.target.value},
          function(){return this.triggerUpdateInputStateChange(this.state)})
        break
      default:
        break
    }
  }

  triggerUpdateInputStateChange(state) {
    if(state.assetDescription !== '' && state.assetPrice !== '' &&
        state.assetName !== '' && state.updateIsEmpty &&
        state.assetLocation !== '' && state.assetCode !== '' &&
        state.assetState !== '')
        {
          this.setState({updateIsEmpty: !state.updateIsEmpty})
    }
    else if((this.state.assetDescription === '' || this.state.assetName === '' ||
              this.state.assetPrice === '' || this.state.assetLocation === '' ||
              this.state.assetState === '' || this.state.assetCode === '')
               && !this.state.updateIsEmpty) {
                this.setState({updateIsEmpty: !this.state.updateIsEmpty})
    }
  }

  render () {
    return (
      <App isSignedIn={this.props.isSignedIn} push={this.props.router.push}
        isAdmin={this.props.isAdmin} alerts={this.props.alerts}>
        <UpdateAssetLayout
        assets={this.props.assets}
        handleUpdateAsset={ this.handleUpdateAsset }
        updateIsEmpty={this.state.updateIsEmpty}
        handleUpdateInputChange={this.handleUpdateInputChange}/>
      </App>
    )
  }
}

/*
Ejecución de los actions
*/

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assetsActions, dispatch) //objeto de los actions
  }
}

function mapStateToProps(state, ownProps) {
  return {
    alerts: state.alerts || {},
    assets: state.assets,
    isSignedIn: state.login.session !== undefined ? state.login.session.isSignedIn : false,
    isAdmin: state.login.session !== undefined ? state.login.session.isAdmin : false
  }
}

UpdateAssetPage.propTypes = {
  supplies: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAssetPage)
