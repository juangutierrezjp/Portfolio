import React from 'react';
import { Grid } from 'antd-mobile';
import gmail from"./../../../imgs/gmail.png"
import whatsapp from"./../../../imgs/whatsapp.png"
import linkedin from"./../../../imgs/linkedin.png"
import "./styles.css"
import clipboardCopy from 'clipboard-copy';
import { notification } from 'antd';
import { CheckOutlined } from '@ant-design/icons'
import { ConnectDat } from '../../Data';
import {Toast } from 'antd-mobile'
import jpg from '../../../imgs/juan.jpg'
const contentStyle= {
    marginLeft:"10vw",
    height: '100vh',
    textAlign: 'center',
    alignItems:"center",
    width:"80vw",
    color:"white",
    zIndex:"10",
    position:"fixed"
    
};


const Sl5Mobile = ({lang, color}) => {
    const handleCopyToClipboard = () => {
        clipboardCopy("ggjuanpatricio@gmail.com");
        Toast.show({
            icon: 'success',
            content: <div><p fontSize> ggjuanpatricio@gmail.com</p><p> {lang==="ES"? ConnectDat[2].ES:ConnectDat[2].EN}</p>
                </div>
        })
      };
    

    return(
        <div>
        <div className={color==="black"?'viga':"vigad"}></div>
        <div className='divfondoM'>

        </div>
    <div style={contentStyle}>
        <Grid columns={1} > 
            <Grid.Item style={{height:"22vh",paddingTop:"7vh", marginLeft:"5vw"}}>
            <p style={{fontSize:"2.5vh"}} >
            {lang==="ES"? ConnectDat[1].ES:ConnectDat[1].EN}
            </p>
            </Grid.Item>
        </Grid>

        <Grid columns={3}>
            <Grid.Item >
            </Grid.Item>
            <Grid.Item >
            </Grid.Item>
            <Grid.Item >
            <p style={{fontSize:"2vh"}}>
            - Séneca
            </p>
            </Grid.Item>
        </Grid>


            <div style={{height:"40vh"}}>
                 <Grid columns={1}>
                 <Grid.Item >
                <p style={{fontSize:"4vh"}}>
                {lang==="ES"? ConnectDat[0].ES:ConnectDat[0].EN}
                </p>
            </Grid.Item>
                </Grid>
                

                <div style={{height:"30vh"}}>

                <Grid columns={1} >
                    <Grid.Item style={{alignContent:"center", alignItems:"center", alignSelf:"center"}}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} onClick={()=>handleCopyToClipboard()}>
                    <img className="containerStylesM" src={gmail} alt="gmail" style={{width:"30vh"}}/>
                    </div>
                    </Grid.Item>
                </Grid>

                <Grid columns={1}>
                    <Grid.Item >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <div className="containerStylesM" onClick={()=>window.open("https://www.linkedin.com/in/juan-gutiérrez-developer/")}>
                    <img src={linkedin} alt="linkedin" style={{width:"30vh"}}/>                      
                    </div>
                    </div>
                    </Grid.Item>
                </Grid>
                <Grid columns={1}>
                    <Grid.Item >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <div className="containerStylesM" onClick={()=>window.open("https://wa.me/5493875601433")}>
                    <img src={whatsapp} alt="whatsapp" style={{width:"30vh"}}/>     
                    </div>                 
                    </div>
                    </Grid.Item>
                </Grid>
                </div>
            </div>    

 
    </div>
    </div>
    )

}
export default Sl5Mobile;