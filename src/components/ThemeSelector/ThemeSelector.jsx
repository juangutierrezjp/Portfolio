import React from 'react';
import { Radio } from 'antd';
import { CapsuleTabs } from 'antd-mobile'
import Icon, { BulbFilled, BulbOutlined  } from '@ant-design/icons';
const ThemeSelector = ({color,setColor, setOpen, open, mobile}) => {
    const change=(e)=>{
        console.log(e.target.value)
        setColor(e.target.value)
        setOpen(!open)
        
    }

    const changes=(e)=>{
        setColor(e)
        setOpen(!open)
        
    }
    
    return(
        <div>
         {!mobile &&
                 <Radio.Group  defaultValue={color} buttonStyle="solid" >
                 <Radio.Button value="black" onClick={(e)=>change(e)}><BulbFilled /></Radio.Button>
                 <Radio.Button value="white"  onClick={(e)=>change(e)}><BulbOutlined /></Radio.Button>
               </Radio.Group>
         }
         { mobile&&
            <CapsuleTabs defaultActiveKey={color} onChange={(e)=>(changes(e))}>
            <CapsuleTabs.Tab title={<BulbFilled />} key='black'>
            </CapsuleTabs.Tab>
            <CapsuleTabs.Tab title={<BulbOutlined />} key='white'onClick={(e)=>changes(e)}>
            </CapsuleTabs.Tab>
          </CapsuleTabs>

         }       

      </div>
    )
}
export default ThemeSelector;