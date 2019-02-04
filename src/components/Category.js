import React from 'react';
import './Category.css';
import { NavLink } from 'react-router-dom';


class Category extends React.Component{

  render(){
    return (
      <div className='Category_conteiner'>
        This catalog of choose category
        <br/>
        <input type='button' value='show more info' /> <br/>
        
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
           To main page
        </NavLink>
      </div>
    )
  }

}

export default Category