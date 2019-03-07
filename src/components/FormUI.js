import React from 'react'
import { Button } from 'antd';

let FormUI =(props)=>{
  return(
  <React.Fragment>
          <label htmlFor="login">LOGIN  </label> <br/>
          <input type="text" name="login" id="login" 
             value={props.login}
             onChange={(EO)=>{props.onChangeLoginInfo(EO.target.value, 'login')}} />
          
          <label htmlFor="password">PASSWORD  </label> <br/>
          <input type="text" name="password" id="password"  value={props.password}
             onChange={(EO)=>{props.onChangeLoginInfo(EO.target.value, 'password')}}
           /> <br/> <br/> <hr/> 


        {
          (props.newUser)
          ?  
          <React.Fragment>
          <Button type="primary" onClick={()=>props.checkLoginPassword() } >Войти</Button>
          <Button type="primary"  onClick={props.checkLoginPassword } > Регистрация </Button>

         
          </React.Fragment>
          :     
            <React.Fragment>
              <Button type="primary" onClick={()=>props.checkLoginPassword() } >Войти</Button>
              <Button type="primary"  onClick={props.toggleRegistrUser}> Новый пользователь </Button>
            </React.Fragment>

        }
        <h3 className='alarm'>{props.errorText} </h3>
    </React.Fragment>

  )
}

export default FormUI


