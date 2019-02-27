import {
  IS_LOGIN
} from './actionTypes'





export function isLogin (status) {
  console.log('IS_LOGIN')
  return{
    type:IS_LOGIN, status 
  }
}

