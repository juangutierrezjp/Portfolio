import { Button,Input } from 'antd-mobile'
import { Grid } from "antd-mobile";
import { About } from "../../Data"
import React, { useState } from 'react';

const ChatMobile=({color, lang})=>{
    const [value, setValue] = useState('')

  const handleClick = () => {
    window.open(`https://wa.me/5493875601433/?text=${value}`);
    };   
    return(
        <div>            
          <div style={{ zIndex:"300" }}>
      <Grid columns={2} style={{width:"80vw", marginLeft:"10vw"}}>
         <Grid.Item style={{width:"53.2vw", alignContent:"center", alignItems:"center", alignSelf:"center"}}>
          <Input           
          value={value}
          onChange={val => {
            setValue(val)
            console.log(val)
          }} 
          placeholder={lang==="ES"?About[4].ES : About[4].EN} 
          style={{backgroundColor: `${color==="black" ? "#2C373D":"#FFFFFF"}`, "--color": `${color==="black" ? "white":"black"}`}}/>
         </Grid.Item>
          
          <Grid.Item style={{width:"20vw", marginLeft:"18.2vw", alignContent:"center", alignItems:"center", alignSelf:"center"}}>
          <Button onClick={handleClick} style={{backgroundColor: `${color==="black" ? "#0E7C69":"#05AD96"}`, color: `${color==="black" ? "white":"white"}`,border:"20px", marginLeft:"2VW"}}>{lang==="ES"?About[5].ES : About[5].EN}</Button>    
          </Grid.Item>
          
      </Grid>
      </div>
        </div>
        )
}

export default ChatMobile;