import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Category from '../components/Category';
let storeInfo= require('../storeInfo.json');


class PageCategory extends React.Component {

  
  render(){
    return(
      <Category  storeInfo={storeInfo} />
    )
  }

}


export default PageCategory

