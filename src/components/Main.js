import React from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';

import BlockNews from './BlockNews'
import {checkCategory} from '../store/action/allCategory' 

let blockNews=[
  {text:'Buy  electronics',
    background:'magenta',
    category:'electronics',
    className:'Main__FlexContainer__News',
    id:1
  },
  {text:'Buy  computers',
  background:'blue',
  category:'computers',
  className:'Main__FlexContainer__News',
  id:2
  },

  {text:'Buy  builder',
  background:'aqua',
  category:'build',
  className:'Main__FlexContainer__News',
  id:3
  },
]


class Main extends React.Component{
  render(){
    let blockNewsArr=blockNews.map( item=> <BlockNews key={item.id}
     text={item.text} id={item.id}  className={item.className} background={item.background}
     category={item.category}  onClick={this.props.checkCategoryName} />)

 // console.log('Main -',this.props)
    return (
      <div className='Main_conteiner'>

        <NavLink to="/personalCabinet" className="PageLink" activeClassName="ActivePageLink">
          <input  type='button' value='personal  cabinet'/>  
        </NavLink>

        <NavLink to="/contact" className="PageLink" activeClassName="ActivePageLink">
         <input  type='button' value='contact'/> 
        </NavLink>

        <div className='Main__FlexContainer'>

      <div className='Main__FlexContainer__News'>
     {blockNewsArr}
      </div>
        </div>
      </div>
    )
  }
}





const mapDispatchToProps = (dispatch) => {

  return {
    checkCategoryName: (param)=>{ 
      console.log('dispatch  from MAIN')
      return dispatch(checkCategory(param) )}

  }
  
  }

export default connect (null,mapDispatchToProps )(Main)
