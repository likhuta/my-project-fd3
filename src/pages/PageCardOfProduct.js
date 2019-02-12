import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import CardOfProduct from '../components/CardOfProduct';




class PageCardOfProduct extends React.Component {


  render(){
    return(
      <CardOfProduct clientId= {this.props.match.params.id}  />
    )
  }

}


export default PageCardOfProduct

