import React, { Component } from "react";
import '../styles/container.css';
import '../styles/header.css';
import logo from '../images/kevin-logo.png';


export default class Header extends Component{

    constructor(props){
        super(props)

        this.handleLanguage = this.handleLanguage.bind(this)
    }

    handleLanguage(lang){
        this.props.handleLang(lang)
    }

    

    render(){
        return(
            <div className="flexrow position-fixed w-100" style={{background:'white', position:"fixed", zIndex:1000}}>
            
                <div className="flexcol3 flex-v-center" style={{minHeight:'56px'}}>
                <div>

                    <img src={logo} className='logo' style={{float:'left'}}></img>
                    {this.props.width<756 &&
                    <span className="fas fa-bars h4 pr-2 mr-2" style={{cursor:'pointer',position:'fixed', right:0}} onClick={this.props.toggle}></span>
                    }
                </div>
                </div>
                {window.innerWidth>=756 &&
                <div className="flexcol1 flex-v-center flex-h-center title" style={{letterSpacing:'3px', fontSize:'0.8em',color:'#505050'}}>
                GRAPHICDESIGNER
                    
                    
                </div>
                }
                {this.props.width>=756
                &&

                <div className="flexcol3">
                    <div className="flexrow">
                        <div className="flexcol2 pl-2 h-56  ">
                            <div className="flexcol1 borderb">
                            
                            </div>
                            <div className="flexcol1 bordert">
                            
                            </div>
                        </div>
                        <div className="flexcol1 flex-h-center pr-2 flex-v-center title text-right">
                        {this.props.lang == 1 ?
                    <span className="title">
                    <b><span onClick={()=>this.handleLanguage(1)} style={{cursor:'pointer'}}>DE</span> </b>
                    <b className="p-2">|</b>
                    <span onClick={()=>this.handleLanguage(0)} style={{cursor:'pointer'}}>EN</span>
                    </span>
                    :
                    <span className="title">
                    <span onClick={()=>this.handleLanguage(1)} style={{cursor:'pointer'}}>DE</span>
                    <b className="p-2">|</b>
                    <b><span onClick={()=>this.handleLanguage(0)} style={{cursor:'pointer'}}>EN</span></b>
                    </span>
                    }
                        </div>
                    </div>
                </div>
                }
            </div>

        );
    }
}
