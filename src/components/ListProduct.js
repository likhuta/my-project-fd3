import React from 'react'
import  './ListProduct.css'
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';

const gridStyle = {
  width: '100%',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: 'rgba(0, 58, 140, 0.23)',
  
};

let ListProduct=(props)=>{
  return(
    <React.Fragment>
    <NavLink to={"/product/"+props.checkCategoryName+'/'+props.item.id} 
      onClick={()=>props.onActiveProductId(props.item.id)}  >
        <Card.Grid style={gridStyle}>{props.item.name}</Card.Grid>
        </NavLink>
    </React.Fragment>
  )
}

export default  ListProduct

//  let ListProduct=(props)=>{
//   // console.log('ListProduct', props)
//   return(
//     <div className='ListProduct'>
    
//       <NavLink to={"/product/"+props.checkCategoryName+'/'+props.item.id} 
//            onClick={()=>props.onActiveProductId(props.item.id)}  >
//              {props.item.name}; 
//             {/* price:{props.item.price}  */}
//             <div className='img_product'>
             
//               <img src={ require ('../img/product/id' + props.item.id+'.jpeg')}   alt='png'/> 
//               </div>
//      </NavLink>

//      {/* <div>
//         <input type='button' value='Добавить' />
//         <input type='number' min='0' max='100' step='1' placeholder='шт' />
//      </div> */}
//     </div>

//   )
// }
// export default  ListProduct