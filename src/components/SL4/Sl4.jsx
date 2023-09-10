import React from 'react';
import { Col, Divider, Row } from 'antd';
import { useState, useEffect } from 'react';
import JPG from "../../imgs/PROFILE.jpg"
import PNG from "../../imgs/JPG.png"
import ProjectsCont from './ProjectsCont';
import "./Styles.css"
import { Projectsui } from '../Data';

const contentStyle= {
    marginTop:"0px",
    height: '100vh',
    textAlign: 'center',
    alignItems:"center",
    width:"101vw"};


const Sl4 = ({lang, color, focus}) => {
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

    return(
        <div >
            {//Desktop
            viewportWidth > 800 && (
        <div className={color==="black"?'background':"whitebg"}>
            <Row style={{textAlign:"center"}}>
            <div className='vig'></div>
                <Col span={24} className='cartel'>
                {focus &&<p className={color==="black"?'flicker-in-1':"flicker-in-2"} >{lang==="ES"?Projectsui[0].ES:Projectsui[0].EN}</p>}
                </Col>
 
                <Col span={12} offset={6} style={{ marginTop:"5vh", marginLeft:"26vw"}}>
                    {focus && <ProjectsCont lang={lang} color={color} />}
                
                </Col>
            </Row>
        </div>
            )}
    {//Mobile
    viewportWidth < 800 && (
        <div className={color==="black"?'background':"whitebg"}>
            <Row style={{textAlign:"center"}}>
            <div className='vig'></div>
                <Col span={24} className='cartelM'>
                {focus &&<p className={color==="black"?'flicker-in-1':"flicker-in-2"} >{lang==="ES"?Projectsui[0].ES:Projectsui[0].EN}</p>}
                </Col>
                <Col span={12} offset={6} >
                    {focus && <ProjectsCont lang={lang} color={color} />}
                </Col>
            </Row>
        </div>
    )}
    </div>
    )

}
export default Sl4;