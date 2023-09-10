import { Col, Row, Input, Button } from "antd"
import { About } from "../Data"
import { useTransition, animated } from 'react-spring';


const handleClick = () => {
    window.location.href = 'https://wa.me/5493875601433/?text=Holabuenas';
  };   

const Chat=({color, lang, focused})=>{
      const send=[<div style={{ zIndex:"300" }}>
      <Row style={{width:"90vw", marginLeft:"2vw"}}>
          <Col span={21} offset={0}>
          <Input placeholder={lang==="ES"?About[4].ES : About[4].EN} style={{backgroundColor: `${color==="black" ? "#2C373D":"#FFFFFF"}`, color: `${color==="black" ? "white":"black"}`,border:"0px"}}/>
          </Col>
          <Col span={1} offset={0}>
          <Button onClick={handleClick} style={{backgroundColor: `${color==="black" ? "#0E7C69":"#05AD96"}`, color: `${color==="black" ? "white":"white"}`,border:"0px"}}>{lang==="ES"?About[5].ES : About[5].EN}</Button>
          </Col>
          
      </Row>
      </div>]
      const transition1 = useTransition(focused ? send : [], {
        from: { opacity: 0, color: 'red' },
        enter: { opacity: 1, color: 'green' },
        config: { duration: 500 },
        trail: 300,
      });



    return(
        <div>            
            {transition1((style, item) => (
                <animated.div style={style}className="box">
                  {item}
                </animated.div>
              ))}
        </div>
        )
}

export default Chat;