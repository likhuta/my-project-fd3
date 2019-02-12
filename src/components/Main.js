import React from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { setCategory  } from '../action'

import {testMy} from  '../action'
//  let aaa=testMy();

class Main extends React.Component{




  render(){
    return (
      <div className='Main_conteiner'>
     

        This is main page!
        <br/>

        <NavLink to="/categories" className="PageLink" activeClassName="ActivePageLink">
           <input  type='button' value='choose category 1' onClick={()=> this.props.test('CATEGORY_1')} />  <br/>       

        </NavLink>

        <NavLink to="/categories" className="PageLink" activeClassName="ActivePageLink">
           <input  type='button' value='choose category 2' onClick={ ()=> this.props.test('CATEGORY_2')} />  <br/>       

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

const mapDispatchToProps = (dispatch) => {

  return {
  test: (category) => {
    console.log('from mapDispatchToProps' + category)

 dispatch(setCategory(category))
  }
  }
  }

export default connect (null, mapDispatchToProps)(Main)
