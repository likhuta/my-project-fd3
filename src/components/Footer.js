import React from 'react';
import './Footer.css';
import { Button , Icon} from 'antd';

import { NavLink } from 'react-router-dom';


class Footer extends React.Component{

  render(){
    return (
      <div className='Footer_conteiner'>

        <span> Реклама</span>
        <span> Размещение</span>
        <span> Реклама</span>
        <span> Размещение</span>

        <input type='button'  value='VK' />
        <input type='button'  value='G' />

   
            <div className="App">
              <Button type="primary" >Button</Button>
            </div>



  <div className="icons-list">
    <Icon type="smile" theme="twoTone" />
    <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" style={{ fontSize: '32px' }} />
    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  </div>


      </div>
    )
  }

}

export default Footer