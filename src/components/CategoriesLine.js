import React from 'react';
import './CategoriesLine.css';
import { NavLink } from 'react-router-dom';

let CategoriesLine =(props)=>{
  return(
    <div className='CategoriesLine'> {props.name}
       <img src={ require ('../img/png/' + props.id+'.png')}   alt='png'/> 
       </div>
  )
}

export default CategoriesLine