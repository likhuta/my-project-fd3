import React from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';

import BlockNews from './BlockNews'
import {checkCategory} from '../store/action/allCategory' 
import {getAxiosInfo} from '../store/action/shopInfo'
 import {initState} from '../storeInfo'

import axios from 'axios'

let blockNews=[
  {text:'Buy  electronics',
    background:'magenta',
    category:'electronics',
    className:'Main__FlexContainer__News',
    id:1
  },
  {text:'Buy  computers',
  background:'blue',
  category:'computers',
  className:'Main__FlexContainer__News',
  id:2
  },

  {text:'Buy  builder',
  background:'aqua',
  category:'build',
  className:'Main__FlexContainer__News',
  id:3
  },
  {text:'Buy  house_gaden',
  background:'lightsalmon',
  category:'house_gaden',
  className:'Main__FlexContainer__News',
  id:4
  },
  {text:'Buy  car',
  background:'palegreen',
  category:'car',
  className:'Main__FlexContainer__News',
  id:5
  },

  {text:'Buy  sport',
  background:'darkviolet',
  category:'sport',
  className:'Main__FlexContainer__News',
  id:6
  },
]
  





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
     const response =await  axios.post('https://shopapp-upliner.firebaseio.com/shopApp/category.json', initState)
    //  загрузить инф.  blockNews
        //   const response =await  axios.post('https://shopapp-upliner.firebaseio.com/shopApp/blockNews.json', blockNews)
      console.log(response.data)
    }
    catch (e){
      console.log(e)
    }
*/
  }

  render(){
    
 // this.sendToFirebase();

 
    let blockNewsArr=this.props.dataShop.blockNews.map( item=> <BlockNews key={item.id}
     text={item.text} id={item.id}  className={item.className} background={item.background}
     category={item.category}  onClick={this.props.checkCategoryName} />)


  console.log('Main -',this.props)
    return (
      <div className='Main_conteiner'>
  

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
