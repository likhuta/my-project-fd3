import React from 'react'
import  './ListProduct.css'
import { NavLink } from 'react-router-dom';


 let ListProduct=(props)=>{
 // console.log('ListProduct', props)
  return(
    <NavLink to={"/product/"+props.checkCategoryName+'/'+props.item.id} className='ListProduct'
     onClick={()=>props.onActiveProductId(props.item.id)}  >
      <div >
       name: {props.item.name}; price:{props.item.price} 

      </div>

    </NavLink>
  )
}
export default  ListProduct