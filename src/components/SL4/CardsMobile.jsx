import React from 'react';
import {  Card } from 'antd';
import {  GithubOutlined, GlobalOutlined} from '@ant-design/icons';
const { Meta } = Card;
import "./Styles.css"


const CardsMobile=({Name, Desc, Img, git, deploy, color, w, h})=>{
   const actions1=[
    git && <GithubOutlined style={{fontSize:"7vw"}} onClick={()=>window.open(git)} key="setting" />,
     <GlobalOutlined style={{fontSize:"7vw"}} onClick={()=>window.open(deploy)} key="edit" disabled={true} />]
    
    const actions2=[
        <GlobalOutlined style={{fontSize:"7vw"}} onClick={()=>window.open(deploy)} key="edit" disabled={true} />]    

    return(
        <div>
 <Card
    style={{
      width: w,
      fontSize:"3vw",
      padding:"0px",}}
    
    cover={
      <div >
      <img
        alt="example"
        src={Img}
        style={{width:h, margin:"auto"}}
      />
      </div>
    }
    actions={git?actions1:actions2}
  >
    <Meta style={{margin:"-24px", zIndex:20}}
      title={Name}
      description={Desc}
    />
  </Card>
        </div>
    )
}

export default CardsMobile