import React from 'react';
import './HeaderCategory.css';
import { NavLink } from 'react-router-dom';
import FindBar from './FindBar'
import LoginBar from './LoginBar'
import CategoriesLine from './CategoriesLine'

class HeaderCategory extends React.Component{

  render(){
   // let imgCategory=[]
    let result=this.props.categories.map( item=> <CategoriesLine key={item.id} name={item.name} id={item.id} />)
    return (
      <div className='HeaderCategory_conteiner'>
       {result}
      </div>
    )
  }

}

export default HeaderCategory