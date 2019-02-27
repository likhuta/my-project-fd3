import {
  IS_LOGIN
} from '../action/actionTypes'

const initialState = {
isLogin:false,

}


export const getStateApp= (state=initialState, action)=> {
switch(action.type){
case IS_LOGIN: 
 return{
   ...state,
   isLogin:action.status,
 }
 

default:
 return state
}

}