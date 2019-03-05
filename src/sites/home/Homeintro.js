import React, { Component } from "react";
import logo from '../../images/kevin-durchsichtig.png';
import arrowdown from '../../images/arrowdown.png'
import Helper from '../../component/Helper'
import '../../styles/container.css'

export default class HomeIntro extends Component {
  render() {
    return (
        <div className="Intro">

{this.props.width>=756 ?
            <div className="flexrow " style={{height:'100vh',minHeight:'500px'}}>
                <div className="flexcol5 flex-h-center flex-v-center">
                    <img src={logo} className="introLogo"></img>

                </div>

                <div className="flexcol5 flex-v-center flex-h-center">
                    <section className="introText">
                        <h2 className="mb-5">{Helper.translate("I'm",this.props.lang)} <b> {Helper.translate('Kevin Herlt',this.props.lang)},</b></h2>
                        <p style={{lineHeight:'2em'}}>
                        {
                            Helper.translate('a graphicdesigner with passion and love for detail. My journey as a designer startet in an agile creative agency in Hamburg. Enjoy this glimpse of my creative endevours and get to know the man behind the keyboard.', this.props.lang)
                        }
   
                        </p>
                        <p>
                        {Helper.translate("Let's get this bread!",this.props.lang)}
                        </p>
                    </section>
                </div>
              
                


                <div className="mediaDrop flexcol1 flex-h-center">
                    <img src={arrowdown} className="arrowDown"></img>
                </div>
            </div>

                 :
                 <div className="flexrow " style={{height:'100vh', minHeight:'500px'}}>
                 <div className="flexcol5 mt-3 flex-h-center">
                    <section className="introText marginTop">
                        <h2 className="mb-5">I‘m <b>Kevin Herlt</b></h2>
                        <p style={{lineHeight:'2em'}}>

                        a graphicdesigner with passion and love for detail. My journey as a
designer startet in an agile creative agency in Hamburg. Enjoy this
glimpse of my creative endevours and get to know the man behind
the keyboard.

                        </p>
                        <p>
                            Lets get started!
                        </p>
                    </section>
                </div>
                </div>
}
                
            
          


      </div>
    );
  }
}
 


