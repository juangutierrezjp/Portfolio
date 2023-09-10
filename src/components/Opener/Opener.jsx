import { useState } from "react";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import LangSelector from "../LangSelector/LangSelector";
import { useTransition, animated } from 'react-spring';
import { Col,Row, Button } from 'antd';
import {CloseOutlined, ToolOutlined  } from '@ant-design/icons';





const Opener=({setcolor, setLang, color, lang})=>{
    const [open,setOpen]=useState(false)
    const handleClick=()=>{
        setOpen(!open)
    }
    

    const items=[
        <div style={{width:"200px", marginRight:"-120px"}}>
            <Row>
                <Col span={12}>                
            <ThemeSelector color={color} setColor={setcolor} setOpen={setOpen} open={open}/>
            <LangSelector lang={lang}  setLang={setLang} setOpen={setOpen} open={open}/>
                </Col>
            <Col span={12}offset={4}>
            <Button onClick={handleClick} icon={<CloseOutlined />}></Button>
            </Col>

            </Row>
        </div>
    ]
    const items2=[
        <div></div> 
        ,<div>
            <Button  shape="circle" style={{width:"6vh", height:"6vh"}}onClick={handleClick} icon={<ToolOutlined style={{fontSize:"3vh"}}/>}></Button>
        </div>
    ]

    const transition1 = useTransition(open ? items : [], {
        from: { opacity: 0, transform: 'translateX(50px)' },
        enter: { opacity: 1, transform: 'translateX(0px)' },
        leave: !open?{ opacity: 0, transform: 'translateX(50px)' }:null,
        config: { duration: 200 },
        trail: 1000,
      });

      const transition2 = useTransition(!open ? items2 : [], {
        from: { opacity: 0, transform: 'translateY(50px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 200 },
        trail: 200,
      });   

    return(
        <div style={{position:"fixed", bottom:"10px",right:"17px", zIndex:"100"}}>
            {transition2((style, item) => (
                <animated.div style={style}className="box">
                  {item}
                </animated.div>
              ))}
            {transition1((style, item) => (
                <animated.div style={style}className="box">
                  {item}
                </animated.div>
              ))}
        </div>
    )


}

export default Opener;