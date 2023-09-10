import React from 'react';
import { Col, Row } from 'antd';
import { presentation } from '../Data';
import { useState, useEffect } from 'react';
import JPG from "../../imgs/PROFILE.jpg"
import PNG from "../../imgs/JPG.png"
import vid1 from"../../vid/1.mp4"
import vid2 from"../../vid/2.mp4"

const contentStyle= {
    marginTop:"0px",
    height: '100vh',
    textAlign: 'center',
    alignItems:"center",
    width:"101vw",
    zIndex:2

}



const Sl1 = ({lang,color}) => {
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
        <div>
            {//Desktop
            viewportWidth > 800 && (
        <Row style={contentStyle} gutter={[16, 8]} >
                  <div style={{position:'fixed', width:"100vw", height:"100vh", }}>
                  {color==="black" &&
                <video muted={true} autoPlay={true} loop={true} style={{ minWidth:"100vw", minHeight:"100vh", marginLeft:"0.5vw"}}>
                <source src={vid1} type='video/mp4'></source>
                </video>}

                {color==="white" &&
                <video muted={true} autoPlay={true} loop={true} style={{ minWidth:"100vw", minHeight:"100vh", marginLeft:"0.5vw"}}>
                <source src={vid2} type='video/mp4'></source>
                </video>}
            </div>
            <Col span={12}>
                <Col span={24} >
                    <Col span={17} offset={8} style={{textAlign:"left"}}>
                    <p style={{fontSize:"5vh"}}>{lang==="ES"?presentation[0].ES : presentation[0].EN}</p>
                    </Col>
                </Col>
                <Col span={24} >
                <Col span={12} offset={8} style={{textAlign:"left"}}>
                    <p style={{fontSize:"2vh"}}>{lang==="ES"?presentation[1].ES : presentation[1].EN}</p>
                    </Col>
                    </Col>
                
            </Col>
            <Col span={12} style={{alignItems:"left"}}>
                <img src={PNG} style={{height:"80vh", display: "block", margin: "0 auto"}} />
            </Col>
        </Row>
            )}
    {//Mobile
    viewportWidth < 800 && (
        <Row style={contentStyle}>
                <div style={{position:'fixed', minWidth:"200vh", height:"100vh",marginLeft:"-50vh",marginTop:"70vh", transform:"rotate(-90deg)",zIndex:0, overflow:"hidden"}}>
                  {color==="black" &&
                <video muted={true} autoPlay={true} loop={true} style={{ minWidth:"100vw", minHeight:"100vh" }}>
                <source src={vid1} type='video/mp4'></source>
                </video>}

                {color==="white" &&
                <video muted={true} autoPlay={true} loop={true} style={{ minWidth:"100vw", minHeight:"100vh", }}>
                <source src={vid2} type='video/mp4'></source>
                </video>}
            </div>
            <Col span={24}>
                <Col span={24}><p style={{fontSize:"5vh"}}>{lang==="ES"?presentation[0].ES : presentation[0].EN}</p></Col>
                <Col span={24}>{lang==="ES"?presentation[1].ES : presentation[1].EN}</Col>
            </Col>
            <Col span={24} style={{alignItems:"left", backgroundColor:""}}>
            <img src={JPG} style={{width:"90vw",display: "block", margin: "0 auto" }} />
            </Col>
        </Row>
)}
    </div>
    )

}
export default Sl1;