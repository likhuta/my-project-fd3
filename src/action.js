  import fetch from 'isomorphic-fetch'
  
  
  // name type action
  export const SHOW_CATEGORY='SHOW_ATEGORY';
  export const SET_CATEGORY='SET_CATEGORY';
  export const SET_JSON='SET_JSON';


  // varient of check category
  export  const Category={
    CATEGORY_1:'CATEGORY_1',
    CATEGORY_2:'CATEGORY_2'
  }

  // action creater
  export  function showCategory(infoCategory){
    return { type:SHOW_CATEGORY, infoCategory }
  }

  export function setCategory(category){
    return { type:SET_CATEGORY, category}
  }

  const fetchPosts =()=> dispatch => {

    return fetch(`//localhost:3004/categories`)
    .then(function (response) {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
      }
      return Promise.resolve(response)
    })
    .then(function (response) {
      return response
    })
      .then(response => response.json())
      .then(json => dispatch(receivePosts( json)))
      .then(function (data) {
        console.log('from fecht status - ')
  
      //  console.log('data', data)
      })
      .catch(function (error) {
        console.log('error', error)
      })
  }

  export const receivePosts = ( json) => ({
    type: SET_JSON,
    json,
  })

  export const fetchGetJSON  = (dispatch ) => {
      return (fetchPosts())
      }





  /*
  export function testMy (){
    return fetch('http://localhost:3004/categories')
    .then(function (response) {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
      }
      return Promise.resolve(response)
    })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log('data', data)
    })
    .catch(function (error) {
      console.log('error', error)
    })
  }
*/


  

