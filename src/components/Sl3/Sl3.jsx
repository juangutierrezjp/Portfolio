import React from 'react';
import { Col, Row } from 'antd';
import { presentation } from '../Data';
import { useState, useEffect } from 'react';
import JPG from "../../imgs/PROFILE.jpg"
import PNG from "../../imgs/JPG.png"
import FrontCont from '../../svg/FrontCont';
import BackCont from '../../svg/BackCont';
import { useTransition, animated } from 'react-spring';






const Sl3 = ({lang,color,focused}) => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const handleResize = () => {
        setViewportWidth(window.innerWidth);
        setViewportHeight(window.innerHeight);
      };
      useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const [mouseX, setMouseX] = useState(0);
      const [mouseY, setMouseY] = useState(0);
    
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
    
        const moveX = (clientX - centerX) / 50;
        const moveY = (clientY - centerY) / 50;
    
        setMouseX(moveX);
        setMouseY(moveY);       
      };
      const containerStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        opacity:"50",
        borderRadius: '20px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        position:"fixed",
        marginLeft:"13%", 
        width:"20vw", 
        height:"23vw", zIndex:"00",
      };
      const containerStylesMobile = {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter:'blur(10px)',
        opacity:"50",
        borderRadius: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        position: "absolute",
        left:"0vw",
        zIndex: "0",
        width:"100%", 
        height:"55vh", 
      };
    const contentStyle= {
    marginTop:"0px",
    height: '100vh',
    textAlign: 'center',
    alignItems:"center",
    width:"101vw",
    transform: `translate(${mouseX*2}px, ${mouseY*2}px)`}

    const contentStyle2= {
        marginTop:"0px",
        height: '10vh',
        width:"101vw",
        transform: `translate(${mouseX*1.2}px, ${mouseY*1.2}px)`}
        
    const titleStyle={
        position:"fixed", 
        marginTop:"15vh",
        marginLeft:"21vw",
        
    }

    const contentStyleM= {
        marginTop:"0px",
        height: '100vh',
        textAlign: 'center',
        alignItems:"center",
        width:"100vw",
}
        
        const contentStyle2M= {
            marginTop:"0px",
            height: '10vh',
            width:"101vw",
}
            
        const titleStyleM={
            position:"fixed", 
            marginTop:"15vh",
            marginLeft:"16vw",
            
        }

    return(
        <div onMouseMove={handleMouseMove} >
            {//Desktop
            viewportWidth > 800 && (
            <div>
                <div style={{position:"fixed", backgroundColor:"#bc6c25",borderRadius: '20px', padding:"0 10px 0px 30px", marginTop:"4vh", marginLeft:"-20px"}}>
                    <p style={{fontSize:"1.2vw"}}>TECH SKILLS</p>
                </div>
                <div style={titleStyle}>
                    <Row gutter={[16, 8]} style={contentStyle2}>
                    <Col span={12} >
                        <p style={{fontSize:"2vw"}}>Frontend</p>
                    </Col>
                    <Col span={12} >
                    <p style={{fontSize:"2vw"}}>Backend</p>
                    </Col>
                    </Row>
                </div>
        <Row style={contentStyle} gutter={[16, 8]} >
            <Col span={12} >
                <div style={containerStyles}></div>
                <div style={{marginTop:"15px"}}>
                <FrontCont  size="6vw" />
                </div>
            </Col>
            <Col span={12} style={{alignItems:"left"}}>
            <div style={containerStyles} ></div>
            <div style={{marginTop:"15px"}}>
            <BackCont size="6vw"/>
            </div>
            </Col>
        </Row>
        </div>
            )}


    {//Mobile
    viewportWidth < 800 && (
        <div>
        <div style={{position:"fixed", backgroundColor:"#bc6c25",borderRadius: '20px', padding:"0 10px 0px 30px", marginTop:"4vh", marginLeft:"-20px"}}>
            <p style={{fontSize:"3vh"}}>TECH SKILLS</p>
        </div>
        <div style={titleStyleM}>
            <Row gutter={[16, 8]} style={contentStyle2M}>
            <Col span={12} >
                <p style={{fontSize:"2.5vh"}}>Frontend</p>
            </Col>
            <Col span={12} >
            <p style={{fontSize:"2.5vh"}}>Backend</p>
            </Col>
            </Row>
        </div>
<Row style={contentStyleM} gutter={[16, 8]} >
    <Col span={11}offset={1}>
        <div style={containerStylesMobile}></div>
        <div style={{marginTop:"15px"}}>
        <FrontCont  size="9vh" mobile={true}/>
        </div>
    </Col>
    <Col span={11} offset={1}>
    <div style={containerStylesMobile} ></div>
    <div style={{marginTop:"15px"}}>
    <BackCont size="9vh" mobile={true}/>
    </div>
    </Col>
</Row>
</div>
)}
    </div>
    )

}
export default Sl3;