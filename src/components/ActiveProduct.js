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
        <input type='button' value='Добавить' />
        <input type='number' min='0' max='100' step='1' placeholder='шт' />
    </div>

    </div>


  )
}

export default  ActiveProduct


