import React from 'react';
import CardsMobile from './CardsMobile';
import { Projects } from '../../Data';
import paby from "./../../../imgs/Paby.png"
import Tecnocamp from "./../../../imgs/Tecnocamp.png"
import JpgPics from "./../../../imgs/JpgPics.png"
import "./Styles.css"
import { Grid } from 'antd-mobile';


var images= [null,paby,Tecnocamp,JpgPics]


const ProjectsCont=({lang, color})=>{
    return(         
        <div  style={{ marginLeft:"10vw", width:"80vw", height:"90vh"}}>
            <Grid columns={2}>
            {
                Projects.map((i, index)=>{
                    return(
                        <div key={i.Tittle} style={{ marginLeft:"4vw", marginTop:"4vw"}}>
                        <div className={`roll-in-blurred-right${index}`} >
                            <CardsMobile
                            w="42vw"
                            h="18vh"
                            Name={i.Tittle} 
                            Desc={lang==="ES"?i.Description.ES:i.Description.EN}
                            git={i.Links.github}
                            deploy={i.Links.Deploy}
                            Img={images[i.Image]}
                            />
                        </div>

                        </div>
                        
                    )})}
            </Grid>


 </div>
    )
}

export default ProjectsCont