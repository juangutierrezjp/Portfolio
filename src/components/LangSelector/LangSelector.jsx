import React from 'react';
import { Radio } from 'antd';
import { CapsuleTabs } from 'antd-mobile'
const LangSelector = ({lang,setLang,setOpen, open, mobile}) => {
    const change=(e)=>{
        console.log(e.target.value)
        setLang(e.target.value)
        setOpen(!open)
    }
    const changes=(e)=>{
        setLang(e)
        setOpen(!open)
        
    }
    return(
        <div>
    {!mobile &&
        <Radio.Group  defaultValue={lang} buttonStyle="solid" >
        <Radio.Button value="ES" onClick={(e)=>change(e)}>ES</Radio.Button>
        <Radio.Button value="EN"  onClick={(e)=>change(e)}>EN</Radio.Button>
      </Radio.Group>}

      {mobile  &&
                  <CapsuleTabs defaultActiveKey={lang} onChange={(e)=>(changes(e))}>
                  <CapsuleTabs.Tab title="ES" key='ES'>
                  </CapsuleTabs.Tab>
                  <CapsuleTabs.Tab title="EN" key='EN'onClick={(e)=>changes(e)}>
                  </CapsuleTabs.Tab>
                </CapsuleTabs>
      
      }
        </div>
    )
}
export default LangSelector;