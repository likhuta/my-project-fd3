import React from 'react';
import { NavLink } from 'react-router-dom';


let BlockNews =(props)=>{

  return(

      <NavLink to={"/category/"+props.category+'/'+props.id} className="PageLink" activeClassName="ActivePageLink">
      
          <div style={{backgroundColor:`${props.background}` }} onClick={()=>props.onClick(props.category)} > 
            {props.text} <br/>
              id: {props.id}
          </div>

      </NavLink>

  )
}

export default  BlockNews

