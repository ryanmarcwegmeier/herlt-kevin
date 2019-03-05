import React, {Component} from 'react';
import '../styles/container.css';
import Helper from './Helper'
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default class Footer extends Component {
    constructor(props){
        super(props);
    }



    render(){
        return(
            <footer className="container-fluid pb-0 mb-0">
        

                
                <div className="footerNav">
                    <section className="text-light p-5">
                    <h3 className="pb-2"><span style={{letterSpacing: '3px'}}>{Helper.translate("CONTACT",this.props.lang)}</span> </h3>
                    <div>
                    {Helper.translate("I am always looking for new adventures and challenges. So if you are interested, just drop me a quick line and I will get in contact with you.",this.props.lang)}    
                    </div>
                    <div className="pt-5">
                    {Helper.translate("Looking forward,",this.props.lang)}    
                    </div>
                    <div className="pt-2 pb-5 mb-2">
                        <b>
                            {Helper.translate("yaboi Kevin",this.props.lang)}    
                        </b>
                    </div>

                    <section>
                        <div className="pt-3">
                            Kevin Herlt
                        </div>
                        <div className="pt-3">
                            Sandweg 2e
                        </div>
                        <div className="pt-3">
                            21509 Glinde
                        </div>
                        <div className="pt-3">
                            {Helper.translate("Germany",this.props.lang)}
                        </div>
                    </section>
                  
                    {window.innerWidth>=490 ?
                    <table className="mt-3" style={{borderCollapse:'separate', borderSpacing: '0 1em'}}>
                        <tbody>

                        <tr className="mt-3">
                            <td>Email:</td>
                            <td>kevin.herlt1998@gmail.com</td>    
                        </tr>
                        <tr className="mt-3">
                            <td>{Helper.translate("Phone",this.props.lang)}:</td>
                            <td>0176 20389762</td>    
                        </tr>
                        <tr className="mt-3">
                            <td>Instagram:</td>
                            <td>kxvinpinoy</td>    
                        </tr>
                        <tr className="mt-3">
                            <td>Xing:</td>
                            <td>Kevin_Herlt</td>    
                        </tr>
                        </tbody>
                    </table>
                    :
                    <table className="mt-3" style={{borderCollapse:'separate', borderSpacing: '0 1em'}}>
                        <tbody>
                            
                        <tr className="mt-3">
                            <td>Email:</td>
                        </tr>
                        <tr>
                            <td>kevin.herlt1998@gmail.com</td>    
                        </tr>
                        <tr className="mt-3">
                            <td>{Helper.translate("Phone",this.props.lang)}:</td>   
                        </tr>
                        <tr>
                            <td>0176 20389762</td> 
                        </tr>
                        <tr className="mt-3">
                            <td>Instagram:</td>   
                        </tr>
                        <tr>
                            <td>kxvinpinoy</td> 
                        </tr>
                        <tr className="mt-3">
                            <td>Xing:</td>  
                        </tr>
                        <tr>
                            <td>Kevin_Herlt</td>  
                        </tr>
                        </tbody>
                    </table>
                    }
                    </section>

                    <div className="text-center text-light pb-3">

                    {window.innerWidth>=490 &&
                    
                    <span>
                        <span className="p-4">
                        PRIVACYPOLICY
                        </span>
                        <span className="p-4">
                        <NavLink exact to="/imprint">
                        IMPRINT 
                        </NavLink>
                        </span>
                    </span>
                    }
                        <span className="p-4">
                        INSTAGRAM 
                        </span>
                        <span className="p-4">
                        XING
                        </span>
                    </div>

                    
                


                {/* <p className="text-light text-center">

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
                </p> */}


                </div>

            </footer>

        )
    }

}