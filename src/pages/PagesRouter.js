import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import PageMain from './PageMain';
import PageCategory from './PageCategory';
import PageContact from './PageContact';
import PagePersonalCabinet from './PagePersonalCabinet';




class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={PageMain  } />
        <Route path="/category" component={PageCategory} />
        <Route path="/contact" component={PageContact} />
        <Route path="/personalCabinet" component={PagePersonalCabinet} />

        
      </div>
    );
    
  }

}
    
export default PagesRouter;
    