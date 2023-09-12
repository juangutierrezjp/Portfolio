import React from 'react';
import { Col, Row } from 'antd';
import { Grid } from 'antd-mobile';
import { useState, useEffect } from 'react';
import FrontCont from '../../../svg/FrontCont';
import BackCont from '../../../svg/BackCont';

const Sl3Mobile = ({lang,color,focused}) => {
      const containerStylesMobile = {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter:'blur(10px)',
        opacity:"50",
        borderRadius: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        position: "absolute",
        left:"0vw",
        zIndex: "1",
        width:"100%", 
        height:"55vh", 
      };


    const contentStyleM= {
        marginTop:"0px",
        height: '100vh',
        textAlign: 'center',
        alignItems:"center",
        width:"100vw",
        zIndex:"20",
        position:"absolute"
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

        <div>
        <div style={{position:"fixed", backgroundColor:"#bc6c25",borderRadius: '20px', padding:"0 10px 0px 30px", marginTop:"4vh", marginLeft:"-20px"}}>
            <p style={{fontSize:"3vh"}}>TECH SKILLS</p>
        </div>
        <div style={titleStyleM}>
            <Grid columns={2} style={contentStyle2M}>
            <Grid.Item >
                <p style={{fontSize:"2.5vh"}}>Frontend</p>
            </Grid.Item>
            <Grid.Item>
            <p style={{fontSize:"2.5vh"}}>Backend</p>
            </Grid.Item>
            </Grid>
        </div>

<Grid columns={2} style={contentStyleM}>
    <Grid.Item>
        <div style={{marginTop:"15px"}}>
        <FrontCont  size="9vh" mobile={true}/>
        </div>
    </Grid.Item>
    <Grid.Item>
        <div style={{marginTop:"15px"}}>
        <BackCont size="9vh" mobile={true}/>
        </div>
    </Grid.Item>
</Grid>
</div>

    )

}
export default Sl3Mobile;