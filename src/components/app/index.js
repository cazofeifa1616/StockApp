import React, {Component} from 'react'
import './index.css'
import Header from './components/header'
import Menu from './components/menu'
import Footer from './components/footer'

class App extends Component {

  render() {
    const {props} = this
    return (
      <div className="sa-app-container">
        <Header {...props} />
        <Menu {...props}/>
        <main className="sa-main">
          {React.cloneElement(this.props.children, this.props)}
        </main>
        <Footer {...props}/>
      </div>
    )
  }
}

export default App
