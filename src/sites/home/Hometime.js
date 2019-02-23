import React,{Component} from 'react'
import Zoom from 'react-reveal'

export default class Hometime extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(

            <Zoom>

            <div className=" mt-5 pt-5 pb-5 mb-3">

            <div className="">
            <h3 className="mb-3"><span className="headlines">CAREER</span>
            </h3>
            </div>
            
            <div className="flexrow">
            
            
            <div className="flexcol1 " >
            <h4 className="mb-4">
                School <b>career</b>
            </h4>
            <p className="mb-4">
                <b>
                    2005 - 2009
                </b>
                
            <br></br>
            Primary school Tannenweg, Glinde
            </p>
            <p>
            <b>
                2005 – 2015 
            </b>
            <br></br>
            Catholic school St. Paulus 
            <br></br>Hamburg Graduation: MSA

            </p>
            </div>

            <div className="flexcol1 pl-4" >
            <h4 className="mb-4">
                Professional <b>career</b>
            </h4>
            <p className="mb-4">

                <b>04.02.2013 -15.02.2013 </b>
                <br>
                </br>
                Two-week student internship at the Catholic kindergarten at „zu den Heilligen drei Engeln“ , Glinde in the educator area
            </p>
            <p className="mb-4">
                <b>    
                09.09.2013 - 27.09.2013 
                </b>
                <br></br>
                Three-week student internship at „Depeshe GmbH &amp; Co. KG“, Geesthacht in the area of media design
                
            </p>
            <p className="mb-4">
                
                    <b>07.09.2015 - 31.08.2016</b>
                    <br></br> Voluntary social year at the „Erzbistum Hamburg“ in the area Media Office 
                </p>
                <p className="mb-4">
                    <b>26.11.2016 - 10.10.2018</b>
                    <br></br> Side job in the kiosk area for the company Aramark, Hamburg
                
                </p>
                <p className="mb-4">
                    <b>01.09.2016 - today</b>
                    <br></br> Education as mediadesigner digital and print in the company Euphorika, Hamburg       
                
                </p>


            
            
            </div>
           
            
            </div>
            </div>
            </Zoom>

        );
    }
}