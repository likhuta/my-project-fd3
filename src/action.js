  import fetch from 'isomorphic-fetch'
  
  
  // name type action
  export const SHOW_CATEGORY='SHOW_ATEGORY';
  export const SET_CATEGORY='SET_CATEGORY';

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

  export function testMy (){
    return fetch(`https://drive.google.com/file/d/1WuVIPnigQOdZ0bfa27NqSs5e534Mxt6X/view?usp=sharing`)
    .then(response => response.json())
    .then(json => console.log ( json))

  }

  