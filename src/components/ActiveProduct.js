import React from 'react'
import './ActiveProduct.css';


let ActiveProduct=(props)=>{
  console.log(props)
 let descriptionParam=Object.keys(props.descriptionProduct)
 console.log(descriptionParam)
 
  

  let arrInfo=descriptionParam.map(item=>{
    return(
  <tr key={item}>
    <td>
{item}
    </td>
    <td>
    {props.descriptionProduct[item]}
    </td>
  </tr>
    )
  })

  return(
    <div className='ActiveProduct'>

<table>
  <tbody>
    {arrInfo}
  </tbody>
</table>
    <div>
        {/* <input type='number' min='0' max='100' step='1' placeholder='шт' /> */}

        {
          (props.isLogin)
          ? <React.Fragment>
              <input type='button' value='Удалить товар'  onClick={()=>props.deleteProductFromLoginUser( props.productId)} />
              <input type='button' value='Добавить'  onClick={()=>props.addProductToLoginUser(props.categoryName, props.productId)} />

           </React.Fragment>

          : <input type='button' value='Добавить'  onClick={props.messagePleaseRegistr} />

        }
    </div>

    </div>


  )
}

export default  ActiveProduct


