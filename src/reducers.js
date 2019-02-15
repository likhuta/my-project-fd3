
import {combineReducers} from 'redux'
import {SHOW_CATEGORY,SET_CATEGORY, SET_JSON,  Category } from './action'


const {CATEGORY_1} = Category;



function checkCategory(state=CATEGORY_1, action){
  switch(action.type){
    case SET_CATEGORY:
    return action.category
  default:
  return state
}
}

let aaa= {
"categories":{
  "CATEGORY_1":   {"name":"product1","price":30},
  "CATEGORY_2":   {"name":"product2","price":40}

}

}


function showCategory(state=aaa, action){
  switch (action.type){
    case SHOW_CATEGORY:
    return {"name":"awdd","price":999999}
    default:
    return state
  }
}

function testJSON(state={}, action){
  switch (action.type){
    case SET_JSON:
    return action.json
    default:
    return {"name":"default","price":999999}
  }

}





const shopApp=combineReducers({
  checkCategory,
  showCategory,
  testJSON
})

export default shopApp