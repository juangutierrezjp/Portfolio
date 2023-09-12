import { Carousel, Button } from 'antd';
import {DownOutlined, RetweetOutlined, UpOutlined } from '@ant-design/icons';
import React, { useEffect, useState, useRef} from 'react';
import Sl1 from '../Sl1/Sl1';
import Sl1Mobile from '../Mobile/Sl1Mobile/Sl1Mobile';
import Sl2 from '../Sl2/Sl2';
import Sl3 from '../Sl3/Sl3';
import Sl4 from '../SL4/Sl4';
import Sl5 from '../Sl5/Sl5';
import Chat from '../Chat/Chat';
import wall1 from "../../imgs/wall1.jpg"
import wall2 from "../../imgs/wall2.jpg"
import vid1 from"../../vid/1.mp4"
import { useTransition, animated } from 'react-spring';
import Sl2Mobile from '../Mobile/Sl2Mobile/Sl2Mobile';
import ChatMobile from '../Mobile/ChatMobile/ChatMobile';
import Sl3Mobile from '../Mobile/Sl3Mobile/Sl3Mobile';
import Sl4Mobile from '../Mobile/SL4Mobile/Sl4Mobile';




const Home=({color, lang})=>{
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileKeywords = ['Android', 'iPhone', 'iPad', 'Windows Phone'];

    const checkIsMobile = () => {
      const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword)) || viewportWidth<800;
      setIsMobile(isMobileDevice);
    };

    // Ejecuta la comprobación cuando se carga la página
    checkIsMobile();
  }, [viewportWidth]);
   

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


  const contentStyle1 = {
    marginTop:"-10px",
    height: '110vh',
    width:"101vw",
    color: `${color==="black" ? "#ffff":"black"}`,
    background:`${color==="black" ? "black":"white"}`,
    zIndex:"1"
  };
  const contentStyle2 = {
    marginTop:"-10px",
    height: '110vh',
    width:"101vw",
    color: `${color==="black" ? "#ffff":"black"}`,
    background:`${color==="black" ? "#272727":"#E7E3E0"}`,
    zIndex:1
  };
  const contentStyle3 = {

    height: '110vh',
    width:"101vw",
    color: `${color==="black" ? "#ffff":"black"}`,
    background:`${color==="black" ? "black":"white"}`,
    
  };
  
  const carouselRef = useRef(null); // Referencia al componente Carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [focused2, setfocused2]=useState(false)
  const [focused3, setfocused3]=useState(false)
  const [focused4, setfocused4]=useState(false)
  const [focused5, setfocused5]=useState(false)



  const totalSlides = 4;

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    focus(currentSlide)
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    focus(currentSlide)
  };

  const focus=(cur)=>{
    if(cur===0){
      setfocused2(false)
      setfocused3(false)
      setfocused4(false)
      setfocused5(false)
    }
    if(cur===1){
      setfocused2(true)
      setfocused3(false)
      setfocused4(false)
      setfocused5(false)
    }
    if(cur===2){
      setfocused2(false)
      setfocused3(true)
      setfocused4(false)
      setfocused5(false)
    }
    if(cur===3){
      setfocused2(false)
      setfocused3(false)
      setfocused4(true)
      setfocused5(false)
    }
    if(cur===4){
      setfocused2(false)
      setfocused3(false)
      setfocused4(false)
      setfocused5(true)
    }
  }




    return(
        <div    style={{ backgroundColor:`${color==="black" ? "rgb(5, 5, 44)":"#c1c1ff"}`, overflow:"hidden", position:"fixed" , height:"110vh",width:"100vw" }}>

<div style={{ textAlign: 'center', marginTop: '16px', position:"fixed", zIndex:"300", margin:"200px" }}>


        {currentSlide!=0 && viewportWidth>800 && <UpOutlined height={"2000px"} onClick={prevSlide} style={{fontSize:"4vh",position:"fixed", zIndex:"300", overflow:"hidden", left:"49vw", top:"2vh", color:`${color==="black"?"white":"black"}` }}/>}
        {currentSlide<totalSlides && viewportWidth>800 && <DownOutlined  height={"2000px"} onClick={nextSlide} style={{fontSize:"4vh", position:"fixed", zIndex:"300", overflow:"hidden", left:"49vw", bottom:"2vh", color:`${color==="black"?"white":"black"}` }}/>}
        {currentSlide===totalSlides && viewportWidth>800 && <RetweetOutlined height={"2000px"} onClick={nextSlide} style={{fontSize:"4vh", position:"fixed", zIndex:"300", overflow:"hidden", left:"49vw", bottom:"2vh", color:`${color==="black"?"white":"black"}` }}/>}


        {currentSlide!=0 && viewportWidth<800 && <UpOutlined height={"2000px"} onClick={prevSlide} style={{fontSize:"4vh",position:"fixed", zIndex:"300", overflow:"hidden", left:"46vw", top:"2vh", color:`${color==="black"?"white":"black"}` }}/>}
        {currentSlide<totalSlides && viewportWidth<800 && <DownOutlined  height={"2000px"} onClick={nextSlide} style={{fontSize:"4vh", position:"fixed", zIndex:"300", overflow:"hidden", left:"46vw", bottom:"2vh", color:`${color==="black"?"white":"black"}` }}/>}
        {currentSlide===totalSlides && viewportWidth<800 && <RetweetOutlined height={"2000px"} onClick={nextSlide} style={{fontSize:"4vh", position:"fixed", zIndex:"300", overflow:"hidden", left:"46vw", bottom:"2vh", color:`${color==="black"?"white":"black"}` }}/>}

</div>
      <Carousel  ref={carouselRef} afterChange={(current) => {setCurrentSlide(current); focus(current)}} effect="scrollx" dotPosition='left' waitForAnimate="false" style={{width:"100vw", height:"100.5vh"}} >
    <div >
      <div style={contentStyle1}>
      {isMobile ? (
      <Sl1Mobile lang={lang} color={color} style={{zIndex:10}}></Sl1Mobile>):
      (<Sl1 lang={lang} color={color} style={{zIndex:10}}></Sl1>)
      }

      </div>
    </div>
    <div>
    <div style={contentStyle2}>
      <div style={{
    marginTop:"-10px",
    height: '110vh',
    width:"101vw",
    color: `${color==="black" ? "#ffff":"black"}`,
    backgroundColor:`${color==="black" ? "#272727":"#E7E3E0"}`,
    position:'fixed',
    zIndex:0
  }}>
      </div>
      {isMobile ? (
      <div>
        <div style={{zIndex:20,position:"fixed", marginTop:"80vh"}}>
        <ChatMobile lang={lang} color={color} />
        </div>
        <Sl2Mobile  lang={lang} color={color} focused={focused2}></Sl2Mobile>
      </div>
      ):
      (
      <div>
          <div style={{zIndex:20,position:"fixed", marginTop:"90vh"}}>
            <Chat lang={lang} color={color} focused={focused2}/>
          </div>
          <Sl2  lang={lang} color={color} focused={focused2}></Sl2>
      </div>
      )}
      </div>
    </div>

    <div>
      {isMobile?(
    <div style={contentStyle3}>
    <img style={{position:"fixed", marginLeft:"-20px",marginTop:"-20px",maxHeight:"110vh", minWidth:"110vw",transform: `translate(${mouseX}px, ${mouseY}px)`}} src={color==="black"?wall2:wall1} alt="" />
      <Sl3Mobile focus={focused3}></Sl3Mobile>
      </div>
      ):      
    <div style={contentStyle3} onMouseMove={handleMouseMove}>
    <img style={{position:"fixed", marginLeft:"-20px",marginTop:"-20px",maxHeight:"110vh", minWidth:"110vw",transform: `translate(${mouseX}px, ${mouseY}px)`}} src={color==="black"?wall2:wall1} alt="" />
      <Sl3 focus={focused3}></Sl3>
      </div>
    }
    </div>

    <div>
    {isMobile?(
      <div style={contentStyle2}>
      <Sl4Mobile focus={focused4}lang={lang} color={color}></Sl4Mobile>
      </div>
      ):      
      <div style={contentStyle2}>
      <Sl4 focus={focused4}lang={lang} color={color}></Sl4>
      </div>
    }

    </div>

    <div>
    <div style={contentStyle2}>
      <Sl5 focus={focused5}lang={lang} color={color}></Sl5>
      </div>
    </div>

  </Carousel>
  
 </div>

    )
}

export default Home