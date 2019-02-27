import React from 'react';
import './LoginBar.css';



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
      <input type='button'  value= 'Выход' onClick={props.onToggleLoginStatus} />
    </div>
    : <div className={stlCls.join(' ')}>
    <input type='button'  value= {(props.loginStatus)?'Выход' :'Вход'}  onClick={()=>props.onToggle()}/>
  </div>
  )
}

export default LoginBar