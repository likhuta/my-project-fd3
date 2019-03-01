import React from 'react';
import './Header.css';
import FindBar from './FindBar'
import { NavLink } from 'react-router-dom';
import HeaderCategory from './HeaderCategory'



let totalCategories=[
  {name:'Электроника', id: 1, category:'electronics'}, 
  {name:'Компьютеры', id: 2, category:'computers' },
  {name:'Стройка и ремонт', id: 3, category:'build', },
  {name:'Дом и сад', id: 4, category:'house_gaden',}, 
  {name:'Авто', id: 5, category:'car',},
  {name:'Спорт', id: 6, category:'sport'}, 

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
          <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
             <input type='button' value=' Upliner'  colot='yellow'/> 
          </NavLink>      
          
            <FindBar/>
     
        <br/>
        <HeaderCategory categories={totalCategories} />

      </div>
    )
  }

}

export default Header