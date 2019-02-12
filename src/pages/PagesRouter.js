import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import PageMain from './PageMain';
import PageCategory from './PageCategory';
import PageContact from './PageContact';
import PagePersonalCabinet from './PagePersonalCabinet';
import PageCardOfProduct from './PageCardOfProduct';




class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={PageMain  } />

        <Route path="/categories" component={PageCategory} />
        <Route path="/category/:id" component={PageCardOfProduct} />

        <Route path="/contact" component={PageContact} />
        <Route path="/personalCabinet" component={PagePersonalCabinet} />

        
      </div>
    );
    
  }

}
    
export default PagesRouter;
    