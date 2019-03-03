import {
  IS_LOGIN,
  ADD_USER,
  ACTIVE_USER

} from '../action/actionTypes'

const initialState = {
  // isLogin:false,
isLogin:false,
users:[
  {login:123, password:123,
     bascetProduct: [{categoryName:'computers', productId:21}]}
],
activeUser:{ },

  //  activeUser:{login:123, password:123,
  //   bascetProduct:[ {categoryName:'computers', productId:21}, {categoryName:'computers', productId:22} ]}
 

}


export const getStateApp= (state=initialState, action)=> {
switch(action.type){
case IS_LOGIN: 
 return{
   ...state,
   isLogin:action.status,
 }
 case ADD_USER: 
 return{
   ...state,
   users:[...state.users, {login:action.login, password:action.password,  bascetProduct: {categoryName:'computers', productId:22} } ]
  }
  case ACTIVE_USER: 
  return{
    ...state,
    activeUser: {login:action.userLogin, password:action.userPassword,
      bascetProduct: [{categoryName:'computers', productId:21}]},
  }
 
 
default:
 return state
}

}