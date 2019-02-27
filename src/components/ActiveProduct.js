import React from 'react'
import {connect} from 'react-redux';
import './ActiveProduct.css';


let ActiveProduct=(props)=>{
  console.log(props)

  let activeProduct=props.dataShop.dataShop.category[props.productInfo.name].products
  .filter(item=>item.id===+props.productInfo.id)[0];
 // console.log(props.productInfo.name)
 // console.log(props.allCategory.category[props.productInfo.name].products)
 // console.log(props.dataFromFirebase.dataFromFirebase.category[props.productInfo.name].products.filter(item=>item.id===+props.productInfo.id)[0])

  return(
    <div className='ActiveProduct_conteiner'>
    Name: {activeProduct.name} <br/>
    Price: {activeProduct.price} <br/>
    Size: {activeProduct.size} <br/>
    Is have: {activeProduct.isHave+''}
   


    </div>

  )
}
function mapStateToProps(state) {
  return {
    chooseUser:state.chooseUser,
   // checkCategoryName:state.checkCategoryName,
   //activeProductId:state.activeProductId,
   dataShop:state.dataShop

  }
}

export default connect(mapStateToProps) (ActiveProduct)


