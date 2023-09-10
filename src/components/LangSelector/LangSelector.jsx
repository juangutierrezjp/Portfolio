import React from 'react';
import { Radio } from 'antd';
const LangSelector = ({lang,setLang,setOpen, open}) => {
    const change=(e)=>{
        console.log(e.target.value)
        setLang(e.target.value)
        setOpen(!open)
    }
    
    return(
        <Radio.Group  defaultValue={lang} buttonStyle="solid" >
        <Radio.Button value="ES" onClick={(e)=>change(e)}>ES</Radio.Button>
        <Radio.Button value="EN"  onClick={(e)=>change(e)}>EN</Radio.Button>
      </Radio.Group>
    )
}
export default LangSelector;