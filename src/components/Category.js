import React from 'react';
import './Category.css';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';


class Category extends React.Component{

  render(){
    console.log(this.props)
    return (
      <div className='Category_conteiner'>
        This catalog of choose category
        <br/>
        <NavLink to="/category/ffhfhgffgj" className="PageLink" activeClassName="ActivePageLink">
        <input type='button' value='show more info' /> <br/>

       </NavLink>

        <span>
          Name product:  {this.props.showCategory.categories[this.props.checkCategory].name}
        </span> <br/>
        <span>
          Count:  {this.props.showCategory.categories[this.props.checkCategory].price}
        </span>
        <br/>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
           To main page
        </NavLink>
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    // весь раздел Redux state под именем counters будет доступен
    // данному компоненту как this.props.counters
    showCategory: state.showCategory,
    checkCategory: state.checkCategory,

  };
};
export default connect (mapStateToProps)(Category)

