import React from 'react';
import './LoginBar.css';
import { NavLink } from 'react-router-dom';



let LoginBar =(props)=>{
 // console.log('LoginBar---', props)

  const stlCls=['LoginBar']
  if(props.isOpen){
    stlCls.push('open')
  }
  
  return(
    (props.loginStatus)
    ?
    <div className={'LoginBar'} >
          <NavLink to="/personalCabinet"  activeClassName="ActivePageLink">
            <input  type='button' value={ 'cabinet' }/>  
          </NavLink>
      <input type='button'  value= 'Выход' onClick={props.onToggleLoginStatus} />
 
    </div>
    : <div className={stlCls.join(' ')}>
    <input type='button'  value= {'Вход'}  onClick={()=>props.onToggle()}/>
  </div>
  )
}

export default LoginBar