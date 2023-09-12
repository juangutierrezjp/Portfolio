import SvgReact from "./SvgReact"
import SvgJavascript from "./SvgJavascript"
import SvgAntdesign from "./SvgAntdesign"
import SvgRedux from "./SvgRedeux"
import SvgBootstrap from "./SvgBootstrap"
import SvgAuth0 from "./SvgAuth0"
import SvgHtml from "./SvgHtml"
import SvgCss from "./SvgCss"
import { Col, Row } from 'antd';
import { Grid } from "antd-mobile"
import "./Animated.css"
import React from 'react';

const FrontCont=({size, mobile})=>{


    return(
        <div>
        {!mobile &&
        <div>
            <Row className="icon-row">
                <Col span={24} className="icon-col"> 
                <div className="icon">
                <SvgReact width={size} height={size} />
                <p className="text">React</p>
                </div>

                <div className="icon">
                <SvgJavascript width={size} height={size} />
                <p className="text">Javascript</p>
                </div>

                <div className="icon">
                <SvgAntdesign width={size} height={size} /> 
                <p className="text">Ant Design</p>
                </div>
                </Col>
                <Col span={24} className="icon-col">
                <div className="icon">
                <SvgRedux width={size} height={size}  />
                <p className="text">Redux/Toolkit</p>
                </div>
                <div className="icon">
                <SvgBootstrap width={size} height={size}/>
                <p className="text">Bootstrap</p>
                </div>
                <div className="icon">
                <SvgAuth0 width={size} height={size} />
                <p className="text">Auth0</p>
                </div>
                </Col>

                <Col span={24} className="icon-col">
                    <div className="icon">
                    <SvgHtml width={size} height={size}  />
                    <p className="text"> Html</p>
                    </div> 
                    <div className="icon">
                    <SvgCss width={size} height={size} />
                    <p className="text">Css</p>
                    </div>               
                </Col>
            </Row>

        </div>}

        {mobile &&
        <div>
                <Grid columns={2}   className="icon-rowM">
                        <Grid.Item className="icon-colM">
                        <div className="iconM">
                <SvgReact width={size} height={size} />
                <p className="textM">React</p>
                </div>
                        </Grid.Item>
                        <Grid.Item className="icon-colM">
                        <div className="iconM">
                <SvgJavascript width={size} height={size} />
                <p className="textM">Javascript</p>
                </div>
                        </Grid.Item>
                    </Grid>

                    <Grid columns={2} className="icon-rowM">
                        <Grid.Item className="icon-colM">
                        <div className="iconM">
                <SvgAntdesign width={size} height={size} /> 
                <p className="textM">Ant Design</p>
                </div>
                        </Grid.Item>
                        <Grid.Item className="icon-colM">
                        <div className="iconM">
                <SvgRedux width={size} height={size}  />
                <p className="textM">Redux/Toolkit</p>
                </div>
                        </Grid.Item>
                    </Grid>
                <Grid columns={2} className="icon-rowM">
                    <Grid.Item className="icon-colM">
                    <div className="iconM">
                <SvgBootstrap width={size} height={size}/>
                <p className="textM">Bootstrap</p>
                </div>
                    </Grid.Item>
                    <Grid.Item className="icon-colM">
                    <div className="iconM">
                <SvgAuth0 width={size} height={size} />
                <p className="textM">Auth0</p>
                </div>
                    </Grid.Item>
                </Grid>
                <Grid columns={2} className="icon-rowM">
                        <Grid.Item className="icon-colM">
                        <div className="iconM">
                    <SvgHtml width={size} height={size}  />
                    <p className="textM"> Html</p>
                    </div> 
                        </Grid.Item>
                        <Grid.Item className="icon-colM">
                        <div className="iconM">
                    <SvgCss width={size} height={size} />
                    <p className="textM">Css</p>
                    </div>  
                        </Grid.Item>
                    </Grid>
        </div>}

        </div>
    )
}
export default FrontCont