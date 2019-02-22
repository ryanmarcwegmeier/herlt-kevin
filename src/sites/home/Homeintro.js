import React, { Component } from "react";
import '../../styles/container.css'
import logo from '../../images/kevin-durchsichtig.png';
import arrowdown from '../../images/arrowdown.png'

export default class HomeIntro extends Component {
  render() {
    return (
        <div className="Intro">
            <div className="flexrow " style={{height:'100vh'}}>

                <div className="flexcol5 flex-h-center flex-v-center">
                    <img src={logo} className="introLogo"></img>

                </div>

                <div className="flexcol5 flex-v-center flex-h-center ml-4">
                    <section className="introText">
                        <h2 className="mb-5">I‘m <b>Kevin Herlt</b></h2>
                        <p style={{lineHeight:'2em'}}>
                        I‘m a mediadesigner with passion and love for detail. I learned the profession of mediadesigner in the company Euphorika in Hamburg/ Germany. On this website I‘ll show you a little insight into my creative life. I also explain what my professional- and softskills are and what else I experienced in the beginning of my professional career.
                            
                        </p>
                        <p>
                            Lets get started!
                        </p>
                    </section>
                </div>

                <div className="flexcol1 flex-h-center">
                    <img src={arrowdown} className="arrowDown"></img>
                </div>
                
                
            </div>    
          


      </div>
    );
  }
}
 


