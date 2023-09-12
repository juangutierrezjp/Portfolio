import React from 'react';
import { Col, Row } from 'antd';
import { useState, useEffect } from 'react';
import ProjectsCont from './ProjectsCont';
import "./Styles.css"
import { Projectsui } from '../Data';


const Sl4 = ({lang, color, focus}) => {  
    return(
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
    )

}
export default Sl4;