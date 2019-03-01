import React from 'react'
import  './ListProduct.css'
import { NavLink } from 'react-router-dom';


 let ListProduct=(props)=>{
 // console.log('ListProduct', props)
  return(
    <div className='ListProduct'>
    
      <NavLink to={"/product/"+props.checkCategoryName+'/'+props.item.id} 
           onClick={()=>props.onActiveProductId(props.item.id)}  >
            name: {props.item.name}; price:{props.item.price} 
            <div className='img_product'>
              IMG
              </div>
     </NavLink>

     {/* <div>
        <input type='button' value='Добавить' />
        <input type='number' min='0' max='100' step='1' placeholder='шт' />
     </div> */}

    </div>
      

  )
}
export default  ListProduct