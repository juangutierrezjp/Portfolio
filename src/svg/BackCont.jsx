import { Col, Row } from 'antd';
import SvgGit from './SvgGit';
import SvgGithub from './SvgGithub';
import SvgPython from './SvgPython';
import SvgJavascript from './SvgJavascript';
import SvgC from './SvgC';
import SvgPostgre from './SvgPostgre';
import SvgNode from './SvgNode';
import SvgExpress from './SvgExpress';
import SvgVsCode from './SvgVsCode';
import "./Animated.css"




const BackCont=({size, mobile})=>{
    return(
        <div>
        {!mobile&&
        <div>
            <Row className="icon-row" >
                <Col span={24} className="icon-col" >
                    <div className="icon">
                <SvgGit width={size} height={size} />
                <p className="text">Git</p>
                    </div>
                    <div className="icon">
                <SvgGithub width={size} height={size} />
                <p className="text">Github</p>
                    </div>
                <div className="icon">
                <SvgPython width={size} height={size} />
                <p className="text">Python</p>
                    </div>
                </Col>
                <Col span={24} className="icon-col">
                <div className="icon">
                <SvgJavascript width={size} height={size} />    
                <p className="text">Javascript</p>
                </div>
                <div className="icon">
                <SvgC width={size} height={size} />
                <p className="text">C#</p>
                </div>
                <div className="icon">
                <SvgPostgre width={size} height={size} />
                <p className="text">PostgreSQL</p>
                </div>
                </Col>
                
                <Col span={24} className="icon-col">
                <div className="icon">
                <SvgNode width={size} height={size} />
                <p className="text">Node</p>
                </div>
                <div className="icon">
                <SvgExpress width={size} height={size} />
                <p className="text">Express</p>
                </div>
                <div className="icon">
                <SvgVsCode width={size} height={size} />
                <p className="text">Vs Code</p>
                </div>
                </Col>
            </Row>
        </div>}
        {mobile&&
                <div>
                <Row className="icon-rowM" >
                    <Col span={24} className="icon-colM" >
                        <div className="iconM">
                    <SvgGit width={size} height={size} />
                    <p className="textM">Git</p>
                        </div>
                        <div className="iconM">
                    <SvgGithub width={size} height={size} />
                    <p className="textM">Github</p>
                        </div>
                    </Col>
                    <Col span={24} className="icon-colM">
                    <div className="iconM">
                    <SvgPython width={size} height={size} />
                    <p className="textM">Python</p>
                        </div>
                    <div className="iconM">
                    <SvgJavascript width={size} height={size} />    
                    <p className="textM">Javascript</p>
                    </div>
                    </Col>
                    
                    <Col span={24} className="icon-colM">
                    <div className="iconM">
                    <SvgC width={size} height={size} />
                    <p className="textM">C#</p>
                    </div>
                    <div className="iconM">
                    <SvgPostgre width={size} height={size} />
                    <p className="textM">PostgreSQL</p>
                    </div>
                    </Col>
                    <Col span={24} className="icon-colM">
                    <div className="iconM">
                    <SvgNode width={size} height={size} />
                    <p className="textM">Node</p>
                    </div>
                    <div className="iconM">
                    <SvgExpress width={size} height={size} />
                    <p className="textM">Express</p>
                    </div>
                   </Col>

                </Row>
            </div>
        }




        </div>
    )
}


export default BackCont;