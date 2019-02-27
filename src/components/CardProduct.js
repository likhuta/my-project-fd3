import React from 'react';
import './CardProduct.css';
import ActiveProduct from './ActiveProduct'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';



class CardProduct extends React.Component{

 

  render(){
  // console.log('CardProduct_conteiner', this.props)
    return (
      <div className='CardProduct_conteiner'>
        <ActiveProduct productInfo={this.props.match.params} />
        <br/>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
           To main page <br/>
        </NavLink>
        <br/>
        

      </div>
    )
  }

}



function mapStateToProps(state) {
  return {
    chooseUser:state.chooseUser,
   // checkCategoryName:state.checkCategoryName

  }
}
export default connect(mapStateToProps)(CardProduct)



