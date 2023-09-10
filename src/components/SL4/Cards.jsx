import React from 'react';
import {  Card } from 'antd';
import {  GithubOutlined, GlobalOutlined} from '@ant-design/icons';
const { Meta } = Card;


const Cards=({Name, Desc, Img, git, deploy, color, w, h})=>{
   const actions1=[
    git && <GithubOutlined style={{fontSize:"2vw"}} onClick={()=>window.open(git)} key="setting" />,
     <GlobalOutlined style={{fontSize:"2vw"}}onClick={()=>window.open(deploy)} key="edit" disabled={true} />]
    
    const actions2=[
        <GlobalOutlined style={{fontSize:"2vw"}} onClick={()=>window.open(deploy)} key="edit" disabled={true} />]    

    return(
        <div>
                <Card
    style={{
      width: w
      
    }}
    
    cover={
      <img
        alt="example"
        src={Img}
        style={{width:w}}
        
      />
    }
    actions={git?actions1:actions2}
  >
    <Meta
      title={Name}
      description={Desc}
    />
  </Card>
        </div>
    )
}

export default Cards