import {
  FETCH_ALL_CATEGORY,
  CHECK_CATEGORY,
  CHOOSE_PRODUCT
} from '../action/actionTypes'




let initState={
  category:{
    electronics:{
      name:'electronics',
      id:1,
      products:[
        {
          id:11,
          name:'Product 11',
          price:150,
          size:'big',
          isHave:true,
        },
        {
          id:12,
          name:'Product 21',
          price:199,
          size:'small',
          isHave:false,
        },
      ]
    },
    
    computers:{
      name:'computers',

      id:2,
      products:[
        {
          id:21,
          name:'Product 21',
          price:150,
          size:'big',
          isHave:false,
        },
        {
          id:22,
          name:'Product 22',
          price:299,
          size:'large',
          isHave:true,
        },
    
      ]
    },

    build:{
      name:'build',

      id:3,
      products:[
        {
          id:31,
          name:'Product 31',
          price:150,
          size:'big',
          isHave:false,
        },
        {
          id:32,
          name:'Product 32',
          price:299,
          size:'large',
          isHave:true,
        },
        {
          id:33,
          name:'Product 33',
          price:299,
          size:'large',
          isHave:true,
        },
    
      ]
    }
    
  },
  activeProductId:'',
  checkCategoryName:''
}


export const getAllCategoryReducer= (state=initState, action)=> {
  switch(action.type){
    case FETCH_ALL_CATEGORY:
      return{
        ...state
      }
    default:
      return {...state}
  }
}

export const checkCategory =(state='', action) =>{
  switch(action.type){
    case CHECK_CATEGORY:
      return{
        ...state,
        checkCategoryName:action.name
      }
    default:
      return state
    
  }
}

export const activeProductId=(state='', action)=>{
  switch(action.type){
    case CHOOSE_PRODUCT:
      return{
        ...state,
        activeProductId:action.productId
      }
    default:
      return state
    
  }
}
