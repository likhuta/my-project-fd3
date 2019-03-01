import React from 'react';
import './Category.css';
import ListProduct from './ListProduct'
import {connect} from 'react-redux';
import {activeProductId} from '../store/action/allCategory' 
import SearchField from './SearchField'


class Category extends React.Component{
  state={
    checkCategoryName:this.props.match.params.name,
    // или брать из редакса? нужно ли это там?
  }

 arrAnswers=this.props.dataShop.dataShop.category[this.state.checkCategoryName].products.map((item, index)=> 
  <ListProduct item={item} key={index} 
   checkCategoryName={this.state.checkCategoryName} onActiveProductId={this.props.activeProductId}
  /> )


  render(){
   console.log('Category from', this.props)
   console.log('Category from STATE', this.state.checkCategoryName)

    return (
      <div className='Category'>
        <div className='filter_field'>
          <SearchField />
         

        </div>
        
      <div className='block_product'>
          {this.arrAnswers}
      </div>
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
    chooseUser:state.chooseUser,
   // checkCategoryName:state.checkCategoryName,
   dataShop:state.dataShop
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Category)

