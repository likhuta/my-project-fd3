import React from 'react';
import './MainPage.css';
import { NavLink } from 'react-router-dom';


class MainPage extends React.Component{

  render(){
    return (
      <div className='MainPage_conteiner'>
        This is main page
        <br/>

        <NavLink to="/category" className="PageLink" activeClassName="ActivePageLink">
           <input  type='button' value='choose category 1'/>  <br/>       

        </NavLink>

        <NavLink to="/category" className="PageLink" activeClassName="ActivePageLink">
           <input  type='button' value='choose category 2'/>  <br/>       

        </NavLink>


        <NavLink to="/personalCabinet" className="PageLink" activeClassName="ActivePageLink">
          <input  type='button' value='personal  cabinet'/>  <br/>

        </NavLink>


        <NavLink to="/contact" className="PageLink" activeClassName="ActivePageLink">
         <input  type='button' value='contact'/> <br/>

        </NavLink>






      </div>
    )
  }

}

export default MainPage