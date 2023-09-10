import React from 'react';
import { Col, Row} from 'antd';
import { useState, useEffect } from 'react';
import JPG from "../../imgs/JPG.jpg"
import { About } from '../Data';
import profile from "../../imgs/PROFILE.jpg"
import { useTransition, animated } from 'react-spring';
const contentStyle= {
    textAlign: 'center',
    alignItems:"center",
    width:"100vw",
};


const Sl2 = ({lang,color, focused}) => {

    const chatStyles1={
        backgroundColor: `${color==="black" ? "#025C4C":"#E2FFC9"}`, borderRadius: "10px", padding:"10px",position:"relative"
    }
    const chatStyles2={
        position: "absolute", width: "15px", height: "15px" ,backgroundColor: `${color==="black" ? "#025C4C":"#E2FFC9"}`, transform: "translateX(-10px) translateY(-10px) rotate(45deg)", bottom: "-5px",left:"100%"
        
    }
    const msgStyle={
        backgroundColor: `${color==="black" ? "#464646":"#FEFEFE"}`, borderRadius: "10px", padding:"10px",position:"relative", textAlign: 'center'
    }
    const msgStyle1={
        position: "absolute", width: "15px", height: "15px" ,backgroundColor: `${color==="black" ? "#464646":"#FEFEFE"}`, transform: "translateX(-15px) translateY(-10px) rotate(45deg)", bottom: "-5px",left:"10px"
    }
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
 
  const items = [
    <div>        <Row style={contentStyle} gutter={[16, 8]} >
    <Col span={13} offset={4}>
        <Col span={2} offset={14} style={{backgroundColor:`${color==="black" ? "#626665":"grey"}`, minWidth:"54px", color:"white", borderRadius:"5px"}}>{lang==="ES"?About[1].ES : About[1].EN}</Col>
    </Col>
</Row> </div>,
    <div>
        <Row style={contentStyle} gutter={[16, 8]} >
        <Col span={24} offset={20}>
            <Col span={3} > 
            <div style={chatStyles1}>
  <p style={{margin: "0", fontSize:"1.2vw"}}>{lang==="ES"?About[2].ES : About[2].EN}</p>
  <div style={chatStyles2}></div>
</div>
            </Col>
        </Col>
        <Col span={24}></Col>
    </Row>
    </div>,
    <div>
    <Row align="bottom" gutter={[16, 8]} >
    <Col span={2}><img src={profile} style={{width:"5vw", display: "block", margin: "0 auto",borderRadius:"50%"}} /></Col>
    <Col span={6}> 
            <div style={msgStyle}>
  <p style={{margin: "0", fontSize:"1.2vw"}}>{lang==="ES"?About[3].ES : About[3].EN}</p>
  <div style={msgStyle1}></div></div>
            </Col>
    </Row> 
    </div>,
    <div>
    <Row style={contentStyle} gutter={[16, 8]} >
        <Col span={24} offset={20}>
            <Col span={3} > 
            <div style={chatStyles1}>
  <p style={{margin: "0", fontSize:"1.2vw"}}>wow!👏👏👏</p>
  <div style={chatStyles2}></div>
</div>
            </Col>
        </Col>
        <Col span={24}></Col>
    </Row>
    </div>,
    <div>
    <Row align="bottom" gutter={[16, 8]} >
            <Col span={2}><img src={profile} style={{width:"5vw", display: "block", margin: "0 auto",borderRadius:"50%"}} /></Col>
            <Col span={1}> 
            <div style={msgStyle}>
  <p style={{margin: "0", fontSize:"1.2vw"}}>:)</p>
  <div style={msgStyle1}></div>
</div>

</Col>
<Col span={24}></Col>
    </Row> 
    </div>
  ];

  const itemsMobile = [
    <div><Row style={contentStyle} gutter={[16, 8]} >
    <Col span={13} offset={4}>
        <Col span={2} offset={14} style={{backgroundColor:`${color==="black" ? "#626665":"grey"}`, minWidth:"54px", color:"white", borderRadius:"5px"}}>{lang==="ES"?About[1].ES : About[1].EN}</Col>
    </Col>
</Row> </div>,
    <div>
        <Row style={contentStyle} gutter={[16, 8]} >
        <Col span={24} offset={16}>
            <Col span={7} > 
            <div style={chatStyles1}>
  <p style={{margin: "0", fontSize:"1.5vh"}}>{lang==="ES"?About[2].ES : About[2].EN}</p>
  <div style={chatStyles2}></div>
</div>
            </Col>
        </Col>
        <Col span={24}></Col>
    </Row>
    </div>,
    <div>
    <Row align="bottom" gutter={[16, 8]} >
    <Col span={2} offset={2}><img src={profile} style={{width:"7vw", display: "block", margin: "0 auto",borderRadius:"50%"}} /></Col>
    <Col span={15} offset={1}> 
            <div style={msgStyle}>
  <p style={{margin: "0", fontSize:"1.5vh"}}>{lang==="ES"?About[3].ES : About[3].EN}</p>
  <div style={msgStyle1}></div></div>
            </Col>
        <Col span={24}></Col>

    </Row> 
    </div>,
    <div>
    <Row style={contentStyle} gutter={[16, 8]} >
        <Col span={24} offset={13}>
            <Col span={9} > 
            <div style={chatStyles1}>
  <p style={{margin: "0", fontSize:"2vh"}}>wow!👏👏👏</p>
  <div style={chatStyles2}></div>
</div>
            </Col>
        </Col>
        <Col span={24}></Col>
    </Row>
    </div>,
    <div>
    <Row align="bottom" gutter={[16, 8]} >
            <Col span={2} offset={2}><img src={profile} style={{width:"7vw", display: "block", margin: "0 auto",borderRadius:"50%"}} /></Col>
            <Col span={5}offset={1}> 
            <div style={msgStyle}>
  <p style={{margin: "0", fontSize:"2vh"}}>:)</p>
  <div style={msgStyle1}></div>
</div>

</Col>
<Col span={24}></Col>
    </Row> 
    </div>
  ];


  const transitions = useTransition(focused ? (viewportWidth > 800 ?items:itemsMobile) : [], {
    from: { opacity: 0, transform: 'translateY(50px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500 },
    trail: 500, // Espacio de tiempo entre cada elemento
  });


    return(
        <div style={{ minHeight:"80vh"}}>
            {//Desktop
            viewportWidth > 800 && (
            <div style={{paddingTop:"5vh"}}>
        <Row style={contentStyle} gutter={[16, 8]} >
            <Col span={24}>
                <Col offset={0}><p>{lang==="ES"?About[0].ES : About[0].EN}</p></Col>
            </Col>
        </Row> 
        {transitions((style, item) => (
        <animated.div style={style} className="box">
          {item}
        </animated.div>
      ))}

        </div>)}
    {//mobile
            viewportWidth < 800 && (
                <div style={{paddingTop:"5vh"}}>
            <Row style={contentStyle} gutter={[16, 8]} >
                <Col span={24}>
                    <Col offset={2}><p>{lang==="ES"?About[0].ES : About[0].EN}</p></Col>
                </Col>
            </Row> 
            {transitions((style, item) => (
            <animated.div style={style} className="box">
              {item}
            </animated.div>
          ))}
            </div>)}    
    </div>
    )

}
export default Sl2;