import React from 'react';
import { Grid} from 'antd-mobile';
import { presentation } from '../../Data';
import { useState, useEffect } from 'react';
import JPG from "../../../imgs/JPG.png"
import vid1 from"../../../vid/1.mp4"
import vid2 from"../../../vid/2.mp4"
import Parallax from 'parallax-js';


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
        // Inicializa Parallax.js en el elemento deseado después de que el componente se monte
        const scene = document.querySelector('.parallax');
        const parallaxInstance = new Parallax(scene, {
            invertX: false, // Evita que se invierta el movimiento en el eje X
            invertY: false, // Evita que se invierta el movimiento en el eje Y
          });
    
        // Asegúrate de limpiar la instancia de Parallax.js al desmontar el componente
        return () => {
          parallaxInstance.destroy();
        };
      }, []);



    return(
        <div >

<div  style={{position:'fixed', minWidth:"100vw", height:"100vh",Top:"100vh", marginLeft:"-60vw"}} data-depth="0.2">
                  {color==="black" &&
                <video muted={true} autoPlay={true} loop={true} style={{ minWidth:"100vw", minHeight:"100vh" }}>
                <source src={vid1} type='video/mp4'></source>
                </video>}

                {color==="white" &&
                <video muted={true} autoPlay={true} loop={true} style={{ minWidth:"100vw", minHeight:"100vh", }}>
                <source src={vid2} type='video/mp4'></source>
                </video>}
                    </div>
 <div style={{position:"fixed"}}>
<div className='parallax'>
    <div data-depth="1">
    <div style={{zIndex:10, marginTop:"10vh", marginLeft:"10vw", width:"80vw", height:"80vw"}} >
        <Grid columns={1} gap={10}>
        <Grid.Item style={{ textAlign:"center"}}    >
                <p style={{fontSize:"3vh", margin:"0px", }}>{lang==="ES"?presentation[0].ES : presentation[0].EN}</p>
            </Grid.Item>
            <Grid.Item style={{ textAlign:"center", }} >
                <p style={{fontSize:"5vh" , margin:"0px"}}>{lang==="ES"?presentation[2].ES : presentation[2].EN}</p>
            </Grid.Item>
            
            <Grid.Item style={{ textAlign:"center"}}>
                <p>{lang==="ES"?presentation[1].ES : presentation[1].EN}</p>
            </Grid.Item>
        </Grid>
        <Grid columns={1} style={{marginTop:"10vh"}} data-depth="0.2">
            <Grid.Item style={{alignItems:"left", backgroundColor:""}}>
            <img src={JPG} style={{height:"36vh",display: "block", margin: "0 auto" }} />
            </Grid.Item>
        </Grid>
        </div>
            </div>
            </div>


            </div>
    </div>
    )

}
export default Sl1Mobile;