import React, {Component} from 'react';
import '../styles/container.css';

export default class Footer extends Component {
    constructor(props){
        super(props);
    }



    render(){
        return(
            <footer className="container-fluid">
                <div className="container-fluid" style={{marginTop:'200px'}}> 

                </div>
                <div className="footerNav text-center" style={{height:'200px'}} >
                
                <p className="text-light">

                <span className="p-4">
                PRIVACYPOLICY
                </span>
                <span className="p-4">
                IMPRINT 
                </span>
                <span className="p-4">
                INSTAGRAM 
                </span>
                <span className="p-4">
                XING
                </span>
                </p>


                </div>

            </footer>

        )
    }

}