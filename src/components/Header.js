import React from 'react';
import './Header.css';
import FindBar from './FindBar'
import LoginBar from './LoginBar'
import HeaderCategory from './HeaderCategory'



let totalCategories=[
  {name:'Электроника', id: 1},  {name:'Компьютеры', id: 2}, {name:'Стройка и ремонт', id: 3},
  {name:'Дом и сад', id: 4}, {name:'Авто', id: 5}, {name:'Спорт', id: 6}, 

]

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
        <br/>
        <HeaderCategory categories={totalCategories}/>

      </div>
    )
  }

}

export default Header