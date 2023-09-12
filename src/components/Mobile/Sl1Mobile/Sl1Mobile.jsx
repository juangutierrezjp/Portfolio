import React from 'react';
import { Grid} from 'antd-mobile';
import { presentation } from '../../Data';
import { useState, useEffect } from 'react';
import JPG from "../../../imgs/PROFILE.jpg"
import vid1 from"../../../vid/1.mp4"
import vid2 from"../../../vid/2.mp4"


const contentStyle= {
    marginTop:"0px",
    height: '100vh',
    textAlign: 'center',
    alignItems:"center",
    width:"101vw",
    zIndex:2

}



const Sl1Mobile = ({lang,color}) => { 
    const [betaInicial, setBetaInicial] = useState(null);
    const [gammaInicial, setGammaInicial] = useState(null); 
    const [beta, setBeta] = useState(0); // Ángulo de inclinación hacia adelante/atrás
    const [gamma, setGamma] = useState(0); // Ángulo de inclinación hacia los lados
    
    useEffect(() => {
        // Función de manejo para los datos del giroscopio
        const handleOrientation = (event) => {
            setBeta(event.beta); // Actualiza el ángulo beta
            setGamma(event.gamma); // Actualiza el ángulo gamma
            if (betaInicial === null) {
                setBetaInicial(event.beta);
              }
              if (gammaInicial === null) {
                setGammaInicial(event.gamma);
              }
        };
        
        // Agregar el evento de orientación
        window.addEventListener('deviceorientation', handleOrientation);
        // Calibrar los ángulos iniciales al montar el componente


        // Limpiar el evento al desmontar el componente
        return () => {
          window.removeEventListener('deviceorientation', handleOrientation);
        };
      }, [betaInicial, gammaInicial]);


      const diferenciaBeta = beta - betaInicial;
      const diferenciaGamma =  gamma - gammaInicial;



    return(
        <div>
            <div style={{position:"fixed", color:"green", zIndex:"100", marginTop:"3vh"}}>
                <ul>
                    <li>beta: {beta}</li>
                    <li>gamma: {gamma}</li>
                    <li> betaInicial : {betaInicial}</li>
                    <li>gammaInicial: {gammaInicial}</li>
                    <li> diferenciaBeta:{diferenciaBeta}</li>
                    <li>diferenciagamma: {diferenciaGamma}</li>
                </ul>
            
            


            </div>
            <div style={{position:'fixed', minWidth:"100vw", height:"100vh",marginTop:"0vh", marginLeft:"-60vw",  overflow:"hidden", transform: `translateY(${diferenciaBeta * 0.8}px) translateX(${diferenciaGamma * 0.8}px)`}} >
                  {color==="black" &&
                <video muted={true} autoPlay={true} loop={true} style={{ minWidth:"100vw", minHeight:"100vh" }}>
                <source src={vid1} type='video/mp4'></source>
                </video>}

                {color==="white" &&
                <video muted={true} autoPlay={true} loop={true} style={{ minWidth:"100vw", minHeight:"100vh", }}>
                <source src={vid2} type='video/mp4'></source>
                </video>}
            </div>

            <div style={{position:'fixed',zIndex:10, marginTop:"10vh", marginLeft:"10vw", width:"80vw", height:"80vw"}}>
        <Grid columns={1} gap={10} >
        <Grid.Item style={{ textAlign:"center", transform: `translateY(${diferenciaBeta *1 }px) translateX(${diferenciaGamma * 1}px)`}}>
                <p style={{fontSize:"3vh", margin:"0px", }}>{lang==="ES"?presentation[0].ES : presentation[0].EN}</p>
            </Grid.Item>
            <Grid.Item style={{ textAlign:"center", transform: `translateY(${diferenciaBeta *1.2}px) translateX(${diferenciaGamma * 1.2}px)`}} >
                <p style={{fontSize:"5vh" , margin:"0px"}}>{lang==="ES"?presentation[2].ES : presentation[2].EN}</p>
            </Grid.Item>
            
            <Grid.Item style={{ textAlign:"center", transform: `translateY(${diferenciaBeta *1 }px) translateX(${diferenciaGamma * 1}px)`}}>
                <p>{lang==="ES"?presentation[1].ES : presentation[1].EN}</p>
            </Grid.Item>
        </Grid>
        <Grid columns={1} style={{marginTop:"10vh"}}>
            <Grid.Item style={{alignItems:"left", backgroundColor:""}}>
            <img src={JPG} style={{height:"36vh",display: "block", margin: "0 auto" }} />
            </Grid.Item>
        </Grid>
            </div>
    </div>
    )

}
export default Sl1Mobile;