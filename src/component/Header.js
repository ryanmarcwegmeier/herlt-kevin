import React, { Component } from "react";
import '../styles/container.css';
import '../styles/header.css';
import logo from '../images/kevin-logo.png';


export default class Header extends Component{

    constructor(props){
        super(props)

    }

    

    render(){
        return(
            <div className="flexrow position-fixed w-100" style={{background:'white', position:"fixed", zIndex:1000}}>
                <div className="flexcol3 flex-v-center">
                    <img src={logo} className='logo' onClick={this.props.toggle} style={{cursor:'pointer'}}></img>
                </div>
                <div className="flexcol1 flex-v-center flex-h-center title">
                    <span className="title">KEVIN HERLT</span>
                </div>
                <div className="flexcol3">
                    <div className="flexrow">
                        <div className="flexcol1 h-56  ">
                            <div className="flexcol1 borderb">
                            
                            </div>
                            <div className="flexcol1 bordert">
                            
                            </div>
                        </div>
                        <div className="flexcol1 flex-h-center flex-v-center title text-right">
                        MEDIADESIGNER DIGITAL AND PRINT
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
