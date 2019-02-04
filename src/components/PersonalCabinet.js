import React from 'react';
import './PersonalCabinet.css';
import { NavLink } from 'react-router-dom';


class PersonalCabinet extends React.Component{

  render(){
    return (
      <div className='PersonalCabinet_conteiner'>
        This ispersonal cabinet
        <input  type='button' value='Basket'/>  <br/>       
        <input  type='button' value='Personal info'/>  <br/>

        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
           To main page
        </NavLink>
      </div>
    )
  }

}

export default PersonalCabinet