import React from 'react';
import './PersonalCabinet.css';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import ListProduct from './ListProduct'
import {addProduct} from '../store/action/stateApp'

class PersonalCabinet extends React.Component{

  findProductInStore(){
    const bascketProduct=this.props.stateApp.activeUser.bascetProduct; // [0,1]

    return( bascketProduct.map((item,index)=>{
      const categoryName=item.categoryName;
      const productId=item.productId;
      const storeProduct=this.props.dataShop.dataShop.category
      const itemProduct=storeProduct[categoryName].products.filter(item=>item.id===productId  )[0]
        return (
           <ListProduct item={itemProduct} key={categoryName+''+productId} checkCategoryName={categoryName} 
                onActiveProductId={()=>console.log('PERSONAL CAB')}  /> 
        )
    })
    )
  }

  render(){
    console.log(this.props)
    let arrProduct=this.findProductInStore();

    return (
      <div className='PersonalCabinet'>
        

        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
           <input type='button' value='To main page' />
        </NavLink>
        <input type='button' value='Удалить товар'  onClick={()=>this.props.addProduct()} />
        

        <div className='blockProduct'>
             {arrProduct}
        </div>
        


      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    chooseUser:state.chooseUser,
   // checkCategoryName:state.checkCategoryName,
   stateApp:state.stateApp,
   dataShop:state.dataShop,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct:(category, idProduct)=>dispatch(addProduct(category, idProduct)) 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PersonalCabinet)