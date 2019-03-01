import React from 'react'
import {connect} from 'react-redux';
import './ActiveProduct.css';


let ActiveProduct=(props)=>{
  console.log(props)

  let activeProduct=props.arrProductStore.category[props.productInfo.name].products
  .filter(item=>item.id===+props.productInfo.id)[0];
 // console.log(props.productInfo.name)
 // console.log(props.allCategory.category[props.productInfo.name].products)
 // console.log(props.dataFromFirebase.dataFromFirebase.category[props.productInfo.name].products.filter(item=>item.id===+props.productInfo.id)[0])

  return(
    <div className='ActiveProduct'>
          <div >
          Name: {activeProduct.name} <br/>
          Price: {activeProduct.price} <br/>
          Size: {activeProduct.size} <br/>
          Is have: {activeProduct.isHave+''}
    </div>

    <div>
        <input type='button' value='Добавить' />
        <input type='number' min='0' max='100' step='1' placeholder='шт' />
    </div>

    </div>


  )
}

export default  ActiveProduct


