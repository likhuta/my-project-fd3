import React from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom';
import HeaderCategory from './HeaderCategory'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



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
      <div className='Header'>
      
          <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
             <div className='banner_title_shop'>
               Upliner
                </div> 
          </NavLink>    

          
          <div className='HeaderCategory'>
          <HeaderCategory  categories={totalCategories} />

            </div>  

      </div>
    )
  }

}

export default Header