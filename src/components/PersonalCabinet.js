import React from 'react';
import './PersonalCabinet.css';
import { NavLink } from 'react-router-dom';


class PersonalCabinet extends React.Component{

  render(){
    return (
      <div className='PersonalCabinet'>
        

        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
           <input type='button' value='To main page' />
        </NavLink>

        <div className='imgProfile'>
<h3> IMG</h3>
        </div>
        <div className='imgProfile'>
<h3> PRODUCT</h3>
        </div>
        
      </div>
    )
  }

}

export default PersonalCabinet