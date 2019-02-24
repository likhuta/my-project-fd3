import React, {Component} from 'react'
import {connect} from 'react-redux';

class Layout extends Component {


  render() {
    return (
          <main>
          { this.props.children }
        </main>
      
    )
  }
}


export default Layout