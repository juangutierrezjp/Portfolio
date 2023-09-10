import React from 'react';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
import Cards from './Cards';
import CardsMobile from './CardsMobile';
import { Projects } from '../Data';
import paby from "./../../imgs/Paby.png"
import Tecnocamp from "./../../imgs/Tecnocamp.png"
import JpgPics from "./../../imgs/JpgPics.png"
import "./Styles.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Divider, Row } from 'antd';


var images= [null,paby,Tecnocamp,JpgPics]


const ProjectsCont=({lang, color})=>{
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

            {//desktop
    viewportWidth > 800 && (               
        <div  style={{display:"flex", gap:"20px"}}>
            
            {
                Projects.map((i, index)=>{
                    return(
                        <div className={`roll-in-blurred-right${index}`} key={i.Tittle}>
                            <Cards 
                            w="15vw"
                            Name={i.Tittle} 
                            Desc={lang==="ES"?i.Description.ES:i.Description.EN}
                            git={i.Links.github}
                            deploy={i.Links.Deploy}
                            Img={images[i.Image]}
                            />
                        </div>
                    )
                })
            }
        </div>)}


    {//Mobile
    viewportWidth < 800 && (               
        <div  style={{ marginLeft:"-20vw", width:"99vw", height:"90vh"}}>
            <Row  gutter={8}>

            {
                Projects.map((i, index)=>{
                    return(
                        <div key={i.Tittle}>
                            {index<2 && <Col span={12}>
                        <div className={`roll-in-blurred-right${index}`} >
                            <CardsMobile
                            w="45vw"
                            h="45vw"
                            Name={i.Tittle} 
                            Desc={lang==="ES"?i.Description.ES:i.Description.EN}
                            git={i.Links.github}
                            deploy={i.Links.Deploy}
                            Img={images[i.Image]}
                            />
                        </div>
                        </Col>}
                        {index===2 && <Col span={12} offset={11} style={{marginTop:"10px"}}>
                        <div className={`roll-in-blurred-right${index}`} key={i.Tittle}>
                            <CardsMobile
                            w="45vw"
                            h="45vw"
                            Name={i.Tittle} 
                            Desc={lang==="ES"?i.Description.ES:i.Description.EN}
                            git={i.Links.github}
                            deploy={i.Links.Deploy}
                            Img={images[i.Image]}
                            />
                        </div>
                        </Col>}


                        </div>
                    )
                })
            }
            </Row>
        </div>)}

 </div>
    )
}

export default ProjectsCont