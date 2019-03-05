import React from 'react';
import { Checkbox, Slider } from 'antd';
import { BLOCK_NEWS } from '../store/action/actionTypes';

const marks = {
  0: '0$',
  // 26: '26°C',
  // 37: '37°C',
  500:'500$',
  2000: {
    style: {
      color: '#f50',
    },
    label: <span>'1000$'</span>,
  },
};


let SearchFieldUi=(props)=>{
  const CheckboxGroup = Checkbox.Group;

  const options = [
    { label: 'Apple', value: '1' },
    { label: 'Pear', value: '2' },
    { label: 'Orange', value: '3' },
  ];

console.log(props)
  return(
    <React.Fragment>
      <div>
          <span> Диапазон суммы</span> <br/>
          <Slider range marks={marks} max={1000} defaultValue={[50, 100]} onAfterChange={props.onAfterChange} />
      </div>

      <div  >
        <CheckboxGroup options={options}  onChange={props.onChangeCheckBox} /> 
      </div>


    </React.Fragment>

  )
}



export default  SearchFieldUi
