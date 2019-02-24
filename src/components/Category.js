import React from 'react';
import './Category.css';
import { NavLink } from 'react-router-dom';
import ListProduct from './ListProduct'
import {connect} from 'react-redux';
import {activeProductId} from '../store/action/allCategory' 



class Category extends React.Component{
  state={
    checkCategoryName:this.props.match.params.name,
  }

 arrAnswers=this.props.allCategory.category[this.props.checkCategoryName.checkCategoryName].products.map((item, index)=> 
  <ListProduct item={item} key={index} 
   checkCategoryName={this.props.checkCategoryName} onActiveProductId={this.props.activeProductId}
  /> )
  render(){
   console.log('Category from', this.props)
    return (
      <div className='Category_conteiner'>

        <NavLink to="/product" className="PageLink" activeClassName="ActivePageLink">
           <input type='button' value='show more info' /> <br/>
        </NavLink>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
           To main page
        </NavLink>
      
        {this.arrAnswers}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {

  return {
    activeProductId: (productId)=>dispatch (activeProductId(productId)) 
   }
  }

function mapStateToProps(state) {
  return {
    allCategory:state.category,
    checkCategoryName:state.checkCategoryName,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Category)

