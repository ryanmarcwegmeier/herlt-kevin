import React, { Component } from 'react';
import Helper from '../../component/Helper'
import ReactHtmlParser from 'react-html-parser';
import Footer from '../../component/Footer'
export default class Impressum extends Component{

    componentDidMount(){
        this.props.setPath("/imprint")
    }

      render(){
          return (
              <div>
              <div className="container-fluid" style={{height:"100vh"}}>
                  <div className="mt-3 pt-3 p-5 ">
                    <h3 className=""><span className="headlines">{Helper.translate("IMPRINT", this.props.lang)}</span></h3>
                    <div className="pt-5">
                        <h4>
                            <b>
                                {Helper.translate("Information according to § 5 TMG",this.props.lang)}
                            </b>
                        </h4>
                    </div>

                    <div className="pt-4">
                        {Helper.translate("Operator and contact",this.props.lang)}:
                    </div>
                    <div className="pt-2">
                    Kevin Herlt
                    </div>
                    <div className="pt-2">
                    Sandweg 2e
                    </div>
                    <div className="pt-2">
                    21509 Glinde
                    </div>
                    <div className="pt-2">
                    {Helper.translate("Phone number",this.props.lang)}: +49 176 20389762

                    </div>

                    <div className="pt-2">
                    {Helper.translate("E-mail address",this.props.lang)}: kevin.herlt1998@gmail.com
                    </div>

                    <div className="pt-2">
                        {Helper.translate("Online settlement of disputes pursuant to Art. 14 para. 1 ODR-VO",this.props.lang)}
                    </div>
                    <div className="pt-2">
                        {ReactHtmlParser(Helper.translate("The European Commission provides a platform for Online Dispute Resolution (OS), which can be found at <a href='http://ec.europa.eu/consumersodr/'> http://ec.europa.eu/consumersodr/ </a>.",this.props.lang))}
                    </div>
                    <div className="pt-4">
                        {ReactHtmlParser(Helper.translate("Imprint of this website created by the generator of <a href='http://www.deutsche-anwaltshotline.de/recht-auf-ihrer-website/impressum-generator'>Deutsche Anwaltshotline AG</a>",this.props.lang))}
                    </div>

                    
                  </div>
              </div>

              <Footer setPath={this.props.setPath} lang ={this.props.lang} path={this.props.path}></Footer>
                    

              </div>

          )
      }
}