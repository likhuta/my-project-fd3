import React from 'react';
import './Category.css';
import { NavLink } from 'react-router-dom';


class Category extends React.Component{

  render(){
    console.log(this.props)
    return (
      <div className='Category_conteiner'>
        This catalog of choose category
        <br/>
        <input type='button' value='show more info' /> <br/>
        <span>
          Name product: {this.props.storeInfo.categories.category1.name}
        </span> <br/>
        <span>
          Count:  {this.props.storeInfo.categories.category1.price}
        </span>
        <br/>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
           To main page
        </NavLink>
      </div>
    )
  }

}

export default Category