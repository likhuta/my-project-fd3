import React from 'react';
import './CardOfProduct.css';
import { NavLink } from 'react-router-dom';


class CardOfProduct extends React.Component{

  render(){
    return (
      <div className='CardOfProduct_conteiner'>
        This more info about product
        <br/>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
           To main page <br/>
        </NavLink>
        <br/>
        {this.props.clientId}

      </div>
    )
  }

}

export default CardOfProduct