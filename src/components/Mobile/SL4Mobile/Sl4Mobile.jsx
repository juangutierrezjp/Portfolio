import React from 'react';
import { Grid } from 'antd-mobile';
import ProjectsCont from './ProjectsCont';
import "./Styles.css"
import { Projectsui } from '../../Data';

const contentStyle= {
    marginTop:"0px",
    height: '100vh',
    textAlign: 'center',
    alignItems:"center",
    width:"101vw"};


const Sl4Mobile = ({lang, color, focus}) => {

    return(     
        <div className={color==="black"?'background':"whitebg"}>
            <div className='vig'></div>
            <Grid columns={1} style={{textAlign:"center"}}>
                <Grid.Item className='cartelM'>
                {focus &&<p className={color==="black"?'flicker-in-1':"flicker-in-2"} >{lang==="ES"?Projectsui[0].ES:Projectsui[0].EN}</p>}
                </Grid.Item>
                </Grid>
                <Grid columns={1}>
                <Grid.Item>
                    {focus && <ProjectsCont lang={lang} color={color} />}
                </Grid.Item>
            </Grid>
        </div>
    )

}
export default Sl4Mobile;