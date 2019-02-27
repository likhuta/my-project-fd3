import React from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';

import BlockNews from './BlockNews'
import {checkCategory} from '../store/action/allCategory' 
import {getAxiosInfo} from '../store/action/shopInfo'

import axios from 'axios'


  

class Main extends React.Component{

 async sendToFirebase(){
  /*

  try{
   
    // получить инф. о продуктах
  //  const response = await axios.get('https://shopapp-upliner.firebaseio.com/shopApp/category.json')
    //    const response = await axios.get('https://shopapp-upliner.firebaseio.com/shopApp/blockNews.json')
    // все одним разом
          const response = await axios.get('https://shopapp-upliner.firebaseio.com/shopApp.json')
          console.log(response.data)
       // const category;
       //   const blockNews=[];
          let dataFromFirebaseArr=Object.keys(response.data) // [category, blockNews]
          dataFromFirebaseArr.forEach((item,index)=>{
            // ключ большой криптограф
           let keyIdFirebaseForCategory= Object.keys(response.data[item])  // JNJ54fd4vfcjdh
         //  console.log(response.data[item][keyIdFirebaseForCategory])
           if(item==='category'){
            const  category =response.data[item][keyIdFirebaseForCategory];
            console.log(category)

           }
           else if (item==='blockNews') {
        blockNews =response.data[item][keyIdFirebaseForCategory];
        console.log(blockNews)
           }
          })
     // let dataFromFirebase=response.data[Object.keys(response.data)[0]];

  }
  catch(e){
    console.log(e)
  }
 */
  /*
     console.log('axios ')
    try {

    //  загрузить инф. о продуктах
  //    const response =await  axios.post('https://shopapp-upliner.firebaseio.com/shopApp/category.json', initState)
    //  загрузить инф.  blockNews
      //      const response =await  axios.post('https://shopapp-upliner.firebaseio.com/shopApp/blockNews.json', blockNews)
      console.log(response.data)
    }
    catch (e){
      console.log(e)
    }
*/
  }

  render(){
    

 
    let blockNewsArr=this.props.dataShop.blockNews.map( item=> <BlockNews key={item.id}
     text={item.text} id={item.id}  className={item.className} background={item.background}
     category={item.category}  onClick={this.props.checkCategoryName} />)

 //  this.sendToFirebase();

  console.log('Main -',this.props)
    return (
      <div className='Main_conteiner'>
          <NavLink to="/personalCabinet"  activeClassName="ActivePageLink">
            <input  type='button' value='personal  cabinet'/>  
          </NavLink>

          <NavLink to="/contact"  activeClassName="ActivePageLink">
            <input  type='button' value='contact'/> 
          </NavLink>

          <div className='Main__FlexContainer'>
            <div className='Main__FlexContainer__News'>
              {blockNewsArr}
          </div>  </div> <hr/> <br/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  chooseUser:state.chooseUser,
  dataShop:state.dataShop

  }
}


const mapDispatchToProps = (dispatch) => {

  return {
    checkCategoryName: (param)=>dispatch(checkCategory(param)),
    getAxiosInfo:()=>dispatch(getAxiosInfo())

  }
}

export default connect (mapStateToProps,mapDispatchToProps )(Main)
