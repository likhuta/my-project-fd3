import React from 'react';
import { NavLink } from 'react-router-dom';
import './FormAuthLayer.css';
import Backdrop from './Backdrop'

let FormAuthLayer =(props)=>{
//console.log('props---', props)
  const styleClass=['FormAuthLayer']
  if(!props.isOpen){
    styleClass.push('close')
  }

  let onHandlerClick=()=>{
    props.onClose();
    props.onToggleLoginStatus()
  }

  return(
    (props.loginStatus)
    ?<React.Fragment>

        
      
    </React.Fragment>
    
    :<React.Fragment>
        <div className={styleClass.join(' ')} >
          <label htmlFor="login">LOGIN  </label> <br/>
          <input type="text" name="login" id="login" />
          
          <label htmlFor="password">PASSWORD  </label> <br/>
          <input type="password" name="password" id="password" /> <br/> <br/> <hr/> 

         

        {
          (props.newUser)
          ?     <input type='button' value='Регистрация'
           onClick={()=>{onHandlerClick();props.onToggleRegistrUser()  }  }  />
          :     (
            <React.Fragment>
              <NavLink to="/personalCabinet"  activeClassName="ActivePageLink" >
                <input type='button' value='Войти' onClick={onHandlerClick } />
              </NavLink>
              <input type='button' value='Новый пользователь'   
                 onClick={props.onToggleRegistrUser} />
            </React.Fragment>
          )

        }
       </div>
       
       {
        (props.isOpen)
        ?<Backdrop  onClose={props.onClose}  />
        :null
        }
    </React.Fragment>


  )
}

export default  FormAuthLayer