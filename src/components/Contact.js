import React from 'react';
import './Contact.css';
import { NavLink } from 'react-router-dom';


class Contact extends React.Component{

  render(){
    return (
      <div className='Contact_conteiner'>
        This contact block
        <br/>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
           To main page
        </NavLink>
      </div>
    )
  }

}

export default Contact