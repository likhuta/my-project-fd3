import React from 'react'
import {connect} from 'react-redux';
import './ActiveProduct.css';


let ActiveProduct=(props)=>{
  console.log(props)

  let activeProduct=props.allCategory.category[props.productInfo.name].products.filter(item=>item.id===+props.productInfo.id)[0];
  console.log(activeProduct)

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
    allCategory:state.category,
    checkCategoryName:state.checkCategoryName,
    activeProductId:state.activeProductId,

  }
}

export default connect(mapStateToProps) (ActiveProduct)


