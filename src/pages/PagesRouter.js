import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import MainPage from '../components/MainPage';
import Category from '../components/Category';
import Contact from '../components/Contact';
import PersonalCabinet from '../components/PersonalCabinet';




class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={MainPage} />
        <Route path="/category" component={Category} />
        <Route path="/contact" component={Contact} />
        <Route path="/personalCabinet" component={PersonalCabinet} />

        
      </div>
    );
    
  }

}
    
export default PagesRouter;
    