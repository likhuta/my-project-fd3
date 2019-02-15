import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import FindBar from './FindBar'
import LoginBar from './LoginBar'


class Header extends React.Component{

  render(){
    return (
      <div className='Header_conteiner'>
        <input type='button' value='Каталог' />
        <input type='button' value='F.A.Q' />
        <input type='button' value='SMTH' />

        <span> $</span>
        <span> Погода</span>
        <span> Корзина</span>
        <br/>
        <span className='title_name'>Upliner</span>
        <FindBar/>
        <LoginBar/>
      </div>
    )
  }

}

export default Header