import React from 'react'

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
         
           <input type='button' value='Войти' onClick={()=>props.checkLoginPassword() } />
           <input type='button' value='Регистрация'
           onClick={props.checkLoginPassword }  />
          </React.Fragment>
          :     
            <React.Fragment>
                <input type='button' value='Войти' onClick={()=>props.checkLoginPassword() } />
            
              <input type='button' value='Новый пользователь'   
                 onClick={props.toggleRegistrUser} />
            </React.Fragment>

        }
        <h3 className='alarm'>{props.errorText} </h3>
    </React.Fragment>

  )
}

export default FormUI


