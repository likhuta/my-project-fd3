
import { combineReducers} from 'redux'
import {SET_CATEGORY, AvailableCategory} from './action'
let storeInfo= require('./storeInfo.json');

const{SHOW_ALL_PREVIEW}=AvailableCategory;
/*
function shopApp (state={},action){
  return{
    availableCategory:availableCategory(state.availableCategory, action),
    categories:categories(state)
  }
}
*/
function availableCategory(state=SHOW_ALL_PREVIEW, action){
  switch(action.type){
    case SET_CATEGORY:
     return action.availableCategory
    default:
      return state

  }
}
let initialInfo=Object.keys(storeInfo);


function categories(state=initialInfo){
  switch (state.availableCategory){
    case SHOW_ALL_PREVIEW:
      return state
    default:
    return storeInfo[state.availableCategory]
    /*
    return storeInfo
    */
  }
  }

const shopApp =combineReducers({
  availableCategory,
  categories
})
export default shopApp;
