import React from 'react';
import './CardProduct.css';
import ActiveProduct from './ActiveProduct'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';



class CardProduct extends React.Component{

 

  render(){
  // console.log('CardProduct_conteiner', this.props)
    return (
      <div className='CardProduct'>

        <ActiveProduct productInfo={this.props.match.params} arrProductStore={this.props.dataShop.dataShop} className='show_product' />
       
        

      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
  chooseUser:state.chooseUser,
   // checkCategoryName:state.checkCategoryName
   dataShop:state.dataShop

  }
}
export default connect(mapStateToProps)(CardProduct)



