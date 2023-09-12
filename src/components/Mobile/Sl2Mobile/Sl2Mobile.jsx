import React from 'react';
import { Grid} from 'antd-mobile';
import { useState, useEffect } from 'react';
import { About } from '../../Data';
import profile from "../../../imgs/JPG.png"
import { useTransition, animated } from 'react-spring';
const TitleStyle= {
    textAlign: 'center',
    alignItems:"center",
    width:"100vw",
    fontSize:"2vh"

};
const contentStyle= {
    textAlign: 'center',
    alignItems:"center",
    width:"80vw",
    marginLeft:"10vw",
    marginTop:"2vh"
    
};


const Sl2Mobile = ({lang,color, focused}) => {
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

  const itemsMobile = [
    <div>
        <Grid columns={3} gap={10} style={TitleStyle} >
            <Grid.Item></Grid.Item>
         <Grid.Item style={{textAlign:"center"}}><p >{lang==="ES"?About[0].ES : About[0].EN}</p>
         </Grid.Item>
         </Grid>
    </div>,
    <div>
         <Grid columns={3} gap={10} style={contentStyle}>
         <Grid.Item>
         </Grid.Item>
         <Grid.Item style={{backgroundColor:`${color==="black" ? "#626665":"grey"}`, minWidth:"54px", color:"white", borderRadius:"5px", textAlign:"center"}}>
            {lang==="ES"?About[1].ES : About[1].EN}
         </Grid.Item>

         <Grid.Item></Grid.Item>
         </Grid>
 </div>,
 
    <div>
        <Grid columns={3} gap={0} style={contentStyle}>
            <Grid.Item></Grid.Item>
            <Grid.Item></Grid.Item>
            <Grid.Item>
            <div style={chatStyles1}>
  <p style={{margin: "0", fontSize:"1.5vh"}}>{lang==="ES"?About[2].ES : About[2].EN}</p>
  <div style={chatStyles2}></div>
</div>
</Grid.Item>
</Grid>

    </div>,
    <div>
    <Grid columns={1} gap={0} style={contentStyle}>
        <Grid.Item>
            <Grid columns={2} gap={0}>
            <Grid.Item style={{width:"7vw",alignSelf:"end"}}> <img src={profile} style={{width:"7vw", display: "block", margin: "0 auto"}} /></Grid.Item>
            <Grid.Item style={{width:"70vw",marginLeft:"-30vw"}}> 
                <div style={msgStyle}>
                     <p style={{margin: "0", fontSize:"2vh"}}>{lang==="ES"?About[3].ES : About[3].EN}</p>
                    <div style={msgStyle1}></div>
                </div>
            </Grid.Item>
            </Grid>
        </Grid.Item>
    </Grid> 
    </div>,
    <div>
        <Grid columns={3} gap={0} style={contentStyle}>
            <Grid.Item></Grid.Item>
            <Grid.Item></Grid.Item>
            <Grid.Item>
            <div style={chatStyles1}>
  <p style={{margin: "0", fontSize:"1.5vh"}}>wow!👏👏👏</p>
  <div style={chatStyles2}></div>
</div>
</Grid.Item>
</Grid>
    </div>,
    <div>
    <Grid columns={1} gap={0} style={contentStyle}>
        <Grid.Item>
            <Grid columns={2} gap={0}>
            <Grid.Item style={{width:"7vw",alignSelf:"end"}}> <img src={profile} style={{width:"7vw", display: "block", margin: "0 auto"}} /></Grid.Item>
            <Grid.Item style={{width:"15vw",marginLeft:"-30vw"}}> 
                <div style={msgStyle}>
                     <p style={{margin: "0", fontSize:"1.5vh"}}>: )</p>
                    <div style={msgStyle1}></div>
                </div>
            </Grid.Item>
            </Grid>
        </Grid.Item>
    </Grid>
    </div>
  ];


  const transitions = useTransition(focused ? itemsMobile : [], {
    from: { opacity: 0, transform: 'translateY(50px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500 },
    trail: 500, // Espacio de tiempo entre cada elemento
  });


    return(
        <div style={{ minHeight:"80vh", width:"80vw", paddingTop:"5vh"}}>



            {transitions((style, item) => (
            <animated.div style={style} className="box">
              {item}
            </animated.div>
          ))}  
    </div>
    )

}
export default Sl2Mobile;