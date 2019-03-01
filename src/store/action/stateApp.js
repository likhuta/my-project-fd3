import {
  IS_LOGIN,
  ADD_USER,
  ACTIVE_USER
} from './actionTypes'





export function isLogin (status) {
  return{
    type:IS_LOGIN, status 
  }
}

export function addUser (login,password) {
  return{
    type:ADD_USER, login,password 
  }
}
export function activeUser (activeUser) {
  return{
    type:ACTIVE_USER, activeUser
  }
}