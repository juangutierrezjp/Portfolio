import ThemeSelector from "../ThemeSelector/ThemeSelector";
import LangSelector from "../LangSelector/LangSelector";
import { useTransition, animated } from 'react-spring';
import { Col,Row } from 'antd';
import { Popup,  Button } from "antd-mobile";
import {CloseOutlined, ToolOutlined  } from '@ant-design/icons';
import React, { useEffect, useState, } from 'react';





const Opener=({setcolor, setLang, color, lang})=>{
  const [visible1, setVisible1] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileKeywords = ['Android', 'iPhone', 'iPad', 'Windows Phone'];

    const checkIsMobile = () => {
      const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword)) || viewportWidth<800;
      setIsMobile(isMobileDevice);
    };

    // Ejecuta la comprobación cuando se carga la página
    checkIsMobile();
  }, [viewportWidth]);




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
            <Button  shape="circle" style={{width:"6vh", height:"6vh"}}onClick={handleClick} ><ToolOutlined style={{fontSize:"3vh"}}/></Button>
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
      <div>

        {isMobile ? (
          <div style={{position:"fixed", bottom:"10px",right:"17px", zIndex:"100"}}>
          <div>
           <Button
              onClick={() => {
                setVisible1(true)
              }}
            > <ToolOutlined style={{fontSize:"3vh"}}/>
            </Button>
            </div>
            <Popup
              visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}
              onClose={() => {
                setVisible1(false)
              }}
              bodyStyle={{ height: '30vh' }}
            >
              
            </Popup>
            </div>
            ):(<div style={{position:"fixed", bottom:"10px",right:"17px", zIndex:"100"}}>
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
        </div>)}
      </div>
        
    )


}

export default Opener;