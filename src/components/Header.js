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
      <div className='Header'>
      

        <br/>
          <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
             <div className='banner_title_shop'>
               {/* <span>U</span>  <span>p</span>  <span>l</span>  <i>i</i>  <i>n </i>   <i> e</i> <i> r</i> */}
               Upliner
                </div> 
          </NavLink>      
          
    
     
        <br/>
        <HeaderCategory categories={totalCategories} />

      </div>
    )
  }

}

export default Header