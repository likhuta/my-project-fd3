import React from 'react';
import './LoginBar.css';
import { NavLink } from 'react-router-dom';


let LoginBar =(props)=>{
  return(
    <div className='LoginBar_conteiner'>
      <input type='button'  value='Вход' />
      <input type='button'  value='VK' />
      <input type='button'  value='G' />


    </div>
  )
}

export default LoginBar