import React from 'react';
import './CardProduct.css';
import ActiveProduct from './ActiveProduct'
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';


class CardProduct extends React.Component{

  // передать  или найти нужный элемент/продукт
  findProductForDetailInfo(){
    const categoryName=this.props.match.params.name;
    const productId=parseInt(this.props.match.params.id);
    const storeCategory=this.props.dataShop.dataShop.category[categoryName];
    const activeProduct=storeCategory.products.filter(item=>item.id===productId)[0];
    const descriptionProduct=activeProduct.description;
    const fullName=activeProduct.fullName;
    return  {descriptionProduct,fullName }
  }

 

  render(){
   console.log('CardProduct----', this.props)
    console.log();
let {descriptionProduct,fullName } =this.findProductForDetailInfo()
   
    return (
      <div className='CardProduct'>

      {
          (this.props.stateApp.isLogin)
          ?
          <NavLink to="/personalCabinet"  activeClassName="ActivePageLink">
            <input  type='button' value='К списку товаров' />  
            {/* {`${this.props.stateApp.activeUser.login} cabinet `} */}
          </NavLink>
          :null
        }

          <h2>
         { fullName}
          </h2>
        <ActiveProduct descriptionProduct={descriptionProduct}
        className='show_product' />
       
     
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
  chooseUser:state.chooseUser,
  dataShop:state.dataShop,
  stateApp:state.stateApp


  }
}
export default connect(mapStateToProps)(CardProduct)



