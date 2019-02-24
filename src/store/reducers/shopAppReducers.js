
import {combineReducers} from 'redux'
import {getAllCategoryReducer, checkCategory, activeProductId} from './allCateory'



const shopApp=combineReducers({
 category:getAllCategoryReducer,
 checkCategoryName:checkCategory,
 activeProductId:activeProductId,
})

export default shopApp