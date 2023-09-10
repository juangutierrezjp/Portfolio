import React from 'react';
import { Radio } from 'antd';
import Icon, { BulbFilled, BulbOutlined  } from '@ant-design/icons';
const ThemeSelector = ({color,setColor, setOpen, open}) => {
    const change=(e)=>{
        console.log(e.target.value)
        setColor(e.target.value)
        setOpen(!open)
        
    }
    
    return(
        <Radio.Group  defaultValue={color} buttonStyle="solid" >
        <Radio.Button value="black" onClick={(e)=>change(e)}><BulbFilled /></Radio.Button>
        <Radio.Button value="white"  onClick={(e)=>change(e)}><BulbOutlined /></Radio.Button>
      </Radio.Group>
    )
}
export default ThemeSelector;