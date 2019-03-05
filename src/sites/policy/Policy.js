import React, { Component } from 'react';
import Helper from '../../component/Helper'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Footer from '../../component/Footer'
export default class Impressum extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.setPath("/privacypolicy")
    }

    render(){
        return(
            <div>
                 <div className="container-fluid" style={{height:"100vh"}}>
                  <div className="mt-3 pt-3 p-5 ">
                    <h3 className=""><span className="headlines">{Helper.translate("PRIVACY POLICY", this.props.lang)}</span></h3>
                    <div className="pt-5">
                        <h4><b>
                            {Helper.translate('General Privacy Policy',this.props.lang)}
                        </b></h4>
                    </div>
                    <div class="pt-4">
                    {Helper.translate("By using our website, you consent to the collection, processing and use of data in accordance with the following description. Our website can generally be visited without registration. Data such as pages accessed or names of files accessed, date and time are stored on the server for statistical purposes without this data being directly related to your person. Personal data, in particular name, address or E-mail address are collected as far as possible on a voluntary basis. The data will not be passed on to third parties without your consent.",this.props.lang)}
                    </div>
                    <div className="pt-3">
                        {ReactHtmlParser(Helper.translate("Privacy policy of this website created by the generator of Muster-Datenschutzerklärung von <a href='https://www.anwalt.de/'>https://www.anwalt.de/</a>",this.props.lang))}
                    </div>
                </div>
                </div>
                <Footer setPath={this.props.setPath} lang ={this.props.lang} path={this.props.path}></Footer>
            </div>

        )
    }

}