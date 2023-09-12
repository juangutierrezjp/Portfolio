import React from 'react';
import { Grid } from 'antd-mobile';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  GithubOutlined, GlobalOutlined} from '@ant-design/icons';
import "./Styles.css"


const CardsMobile=({Name, Desc, Img, git, deploy, color, w, h})=>{
   

    return(
        <div >
 <Card sx={{ maxWidth: w }}>
  <CardMedia
          sx={{ height: h }}
          image={Img}
          title={Name}
        />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {Name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {Desc}
    </Typography>
  </CardContent>
  <CardActions>
    <Grid columns={2} style={{ width:w}}>

      <Grid.Item style={{ textAlign:"center"}}>
    <GlobalOutlined style={{fontSize:"4vh", color:"gray"}} onClick={()=>window.open(deploy)} key="edit" disabled={true} />
    </Grid.Item>
    { git && <Grid.Item style={{ textAlign:"center"}}>
    <GithubOutlined style={{fontSize:"4vh", color:"gray"}} onClick={()=>window.open(git)} key="setting" />
      </Grid.Item>}
    </Grid>
  </CardActions>
  </Card>
        </div>
    )
}

export default CardsMobile