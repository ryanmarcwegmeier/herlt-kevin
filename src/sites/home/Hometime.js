import React,{Component} from 'react'
import Zoom from 'react-reveal'
import Helper from '../../component/Helper'

export default class Hometime extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(

            <Zoom>

            <div className=" mt-5 pt-5 pb-5 mb-3">

            <div className="">
            <h3 className="mb-4 pb-4"><span className="headlines">{Helper.translate('FORMAL EDUCATION AND CAREER',this.props.lang)}</span>
            </h3>
            </div>
            
            <div className="flexrow">
            
            
            <div className="flexcol1" >
            <h4 className="mb-4">
                <b>{Helper.translate("School",this.props.lang)}</b> {Helper.translate("Career",this.props.lang)}
            </h4>
            <p className="mb-4">
                <b>
                    2005 - 2009
                </b>
                
            <br></br>
            {Helper.translate("Primary school Tannenweg, Glinde",this.props.lang)}
            
            </p>
            <p>
            <b>
                2005 – 2015 
            </b>
            <br></br>
            {Helper.translate("Catholic school St. Paulus",this.props.lang)}
             
            <br></br>
            {Helper.translate("Hamburg Graduation: MSA",this.props.lang)}
            </p>

            <p>
            <b>
                2012 – 2013 
            </b>
            <br></br>
            {Helper.translate("visit of a independent art school 'Kunstschule Bergedorf', Hamburg",this.props.lang)}
             
            
            </p>
            </div>

            <div className="flexcol1 pl-4" >
            <h4 className="mb-4">
            <b>{Helper.translate("Professional",this.props.lang)}</b> {Helper.translate("Career",this.props.lang)}
            </h4>
            <p className="mb-4">

                <b>09.09.2013 - 27.09.2013 </b>
                <br>
                </br>
                {Helper.translate("Three-week student internship at 'Depeshe GmbH & Co. KG', Geesthacht in the area of media design",this.props.lang)}
            </p>
            <p className="mb-4">
                <b>    
                07.09.2015 - 31.08.2016
                </b>
                <br></br>
                {Helper.translate("Voluntary social year at the 'Erzbistum Hamburg' in the area Media Office",this.props.lang)}
                
            </p>
            <p className="mb-4">
                
                    <b>01.09.2016 - {Helper.translate("Today",this.props.lang)}</b>
                    <br></br> 
                    {Helper.translate("Professional training as a media designer in digital and print products in the agency Euphorika, Hamburg",this.props.lang)}

                </p>
               
            </div>
           
            
            </div>
            </div>
            </Zoom>

        );
    }
}