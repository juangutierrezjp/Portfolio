import { Col, Row, Input, Button } from "antd"
import { About } from "../Data"
import React, { useState } from 'react';

const Chat=({color, lang})=>{
  const [texto, setTexto] = useState('');
  const handleInputChange = (e) => {
    setTexto(e.target.value);
    console.log(texto)
  };
  const handleClick = () => {
    window.open(`https://wa.me/5493875601433/?text=${texto}`);
    };   
    return(
        <div>            
          <div style={{ zIndex:"300" }}>
      <Row style={{width:"90vw", marginLeft:"2vw"}}>
          <Col span={21} offset={0}>
          <Input value={texto} onChange={handleInputChange} placeholder={lang==="ES"?About[4].ES : About[4].EN} style={{backgroundColor: `${color==="black" ? "#2C373D":"#FFFFFF"}`, color: `${color==="black" ? "white":"black"}`,border:"0px"}}/>
          </Col>
          <Col span={1} offset={0}>
          <Button onClick={handleClick} style={{backgroundColor: `${color==="black" ? "#0E7C69":"#05AD96"}`, color: `${color==="black" ? "white":"white"}`,border:"0px"}}>{lang==="ES"?About[5].ES : About[5].EN}</Button>
          </Col>
          
      </Row>
      </div>
        </div>
        )
}

export default Chat;