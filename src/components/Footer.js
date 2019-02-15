import React from 'react';
import './Footer.css';
import Button from 'antd/lib/button';

import { NavLink } from 'react-router-dom';


class Footer extends React.Component{

  render(){
    return (
      <div className='Footer_conteiner'>

        <span> Реклама</span>
        <span> Размещение</span>
        <input type='button'  value='VK' />
        <input type='button'  value='G' />

   
            <div className="App">
              <Button type="primary" style={{ "background-color": "#f759ab" }} >Button</Button>
            </div>
      </div>
    )
  }

}

export default Footer