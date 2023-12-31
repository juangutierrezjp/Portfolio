import React from 'react';
import { Col, Row } from 'antd';
import gmail from"./../../imgs/gmail.png"
import whatsapp from"./../../imgs/whatsapp.png"
import linkedin from"./../../imgs/linkedin.png"
import "./styles.css"
import clipboardCopy from 'clipboard-copy';
import { notification } from 'antd';
import { CheckOutlined } from '@ant-design/icons'
import { ConnectDat } from '../Data';
const contentStyle= {
    marginTop:"0px",
    height: '100vh',
    textAlign: 'center',
    alignItems:"center",
    width:"101vw",
    color:"white",
    zIndex:"100000"
};


const Sl5 = ({lang, color}) => {
    const handleCopyToClipboard = () => {
        clipboardCopy("ggjuanpatricio@gmail.com");
        notification.open({
            message: <p><CheckOutlined style={{color:"green"}}/> "ggjuanpatricio@gmail.com"</p>,
            description:lang==="ES"? ConnectDat[2].ES:ConnectDat[2].EN ,
            placement: "top"
        })
      };   

    return(
        <div>
        <Row style={contentStyle} gutter={[16, 8]} >
            <div className='divfondo'></div>
            <div className={color==="black"?'viga':"vigad"}></div>
            <Col span={8} offset={7} >
                <div style={{height:"50vh"}}>
                    <Col span={24}>
                    <p style={{fontSize:"2.5vh"}}>
                     {lang==="ES"? ConnectDat[0].ES:ConnectDat[0].EN}
                    </p>
                    </Col>
                    <div style={{height:"30vh", paddingTop:"2vw", marginLeft:"-8vw"}}>
                    <Col span={24}>
                        <Col span={24}>
                        <div className="containerStyles" onClick={()=>handleCopyToClipboard()}>
                        <img src={gmail} alt="gmail" style={{width:"20vw"}}/>
                        </div>
                        </Col>
                        <Col span={24}>
                        <div className="containerStyles" onClick={()=>window.open("https://www.linkedin.com/in/juan-gutiérrez-developer/")}>
                        <img src={linkedin} alt="linkedin" style={{width:"20vw"}}/>                      
                        </div>
                        </Col>
                        <Col span={24}>
                        <div className="containerStyles" onClick={()=>window.open("https://wa.me/5493875601433")}>
                        <img src={whatsapp} alt="whatsapp" style={{width:"20vw"}}/>                      
                        </div>
                        </Col>
                    </Col>
                    </div>
                </div>    
            </Col>

            <Col span={8} >
                <div style={{width:"20vw",height:"70vh",paddingTop:"1vw", marginLeft:"5vw"}}>
                <Col span={24}>
                <p style={{fontSize:"1.5vw"}}>
                {lang==="ES"? ConnectDat[1].ES:ConnectDat[1].EN}
                </p>
                </Col>
                <Col span={24}>
                <p style={{fontSize:"1vw"}}>
                - Séneca
                </p>
                </Col>
                </div>              
            </Col>
        </Row>
    </div>
    )

}
export default Sl5;