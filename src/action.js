
export const SET_CATEGORY ='SET_CATEGORY';
export const AvailableCategory={
  SHOW_ALL_PREVIEW:'SHOW_ALL_PREVIEW',
  CATEGORY_1:'CATEGORY_1',
  CATEGORY_2:'CATEGORY_2',

}

//const {SHOW_ALL_PREVIEW }=availableCategory;

export function setAvailableCategory(category){
  return{ type:SET_CATEGORY, category}
}

///export const SOMETHING='SOMETHING'

