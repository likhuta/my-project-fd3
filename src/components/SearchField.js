import React from 'react';
import './SearchField.css';
import { Checkbox, Slider,Button } from 'antd';


const marks = {
  0: '0$',
  2500:'2500$',
  5000: {
    style: {
      color: '#f50',
    },
    label: <span>'1000$'</span>,
    
  },
};

const CheckboxGroup = Checkbox.Group;

class SearchField extends React.Component{

// componentDidUpdate()

render(){
  return(
    <div className='SearchField'>
    
      <div className='range_summ'>
          <span> Диапазон суммы</span> <br/>
          <Slider range marks={marks} max={5000} defaultValue={[500, 1500]} onAfterChange={this.props.onAfterChange} />
          <CheckboxGroup options={this.props.arrRange}  onChange={this.props.onChangeCheckBox} /> 

      </div>
<br/>
      <Button type="primary" onClick={this.props.toSortListCategory}>Показать</Button>

    
    </div>
  )
}


}

export default SearchField