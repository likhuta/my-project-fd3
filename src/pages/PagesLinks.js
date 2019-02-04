import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/category" className="PageLink" activeClassName="ActivePageLink">category</NavLink>
        <NavLink to="/contact" className="PageLink" activeClassName="ActivePageLink">contact</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
    