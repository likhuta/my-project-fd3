import React from 'react';
import './HeaderCategory.css';

class HeaderCategory extends React.Component{
   result=this.props.categories.map( item=> {
    return(
      <div className='HeaderCategory_Line' key={item.id} > {item.name}
          <img src={ require ('../img/png/' + item.id+'.png')}   alt='png'/> 
      </div>
    )
  })
  render(){

    return (
      <div className='HeaderCategory_conteiner'>
       {this.result}
      </div>
    )
  }

}

export default HeaderCategory
