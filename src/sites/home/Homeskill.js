import React, {Component} from 'react';
import Helper from '../../component/Helper'
import Zoom from 'react-reveal/Zoom'


export default class Homeskill extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h3 className=""><span className="headlines" >{Helper.translate('SKILLBAR',this.props.lang)}</span> </h3>

            <div className="mt-4 mb-2"><b className="">{Helper.translate('Professional skills',this.props.lang)}</b></div>

            {window.innerWidth>=756 ?
            
            <div className="flexrow">

            <div className="flexcol1 pr-3 ">
                <section>

                    <Zoom>
                        <div className="mt-2 mb-1">
                            {Helper.translate('Adobe Photoshop',this.props.lang)}
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "90%"}}>
                            </div>
                        </div>
                        <div className="title">90%</div>
                    </Zoom>

                    <Zoom>
                    <div className="mt-2 mb-1">
                        {Helper.translate('Adobe Illustrator',this.props.lang)}
                    </div>

                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "90%"}}>
                            </div>
                        </div>
                        <div className="title">90%</div>
                        
                    </Zoom>

                    <Zoom>
                    <div className="mt-2 mb-1">
                        {Helper.translate('Microsoft Office',this.props.lang)}
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "50%"}}>
                            </div>
                        </div>
                        <div className="title">50%</div>

                    </Zoom>

                    <Zoom>
                    <div className="mt-2 mb-1">
                        {Helper.translate('Creative & Motivated',this.props.lang)}
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "100%"}}>
                            </div>
                        </div>
                        <div className="title">100%</div>

                    </Zoom>




                </section>
            </div>

            <div className="flexcol1 pl-3">

                <section className='' style={{ width: '100%' }}>
            
                    <Zoom>
            
                    <div className="mt-2 mb-1">
                    {Helper.translate('Adobe InDesign',this.props.lang)}
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "90%"}}>
                            </div>
                        </div>
                        <div className="title">90%</div>
                    </Zoom>

                    <Zoom>
                    <div className="mt-2 mb-1">
                    {Helper.translate('Blender 3D',this.props.lang)}
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "25%"}}>
                            </div>
                        </div>
                        <div className="title">25%</div>
                        
                    </Zoom>

                    <Zoom>
                    <div className="mt-2 mb-1">
                    {Helper.translate('Wordpress Divi',this.props.lang)}

                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "60%"}}>
                            </div>
                        </div>
                        <div className="title">60%</div>

                        
                    </Zoom>

                </section>
            </div>

            


            </div>
            :
            <div>

<Zoom>
                        <div className="mt-2 mb-1">
                            {Helper.translate('Adobe Photoshop',this.props.lang)}
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "90%"}}>
                            </div>
                        </div>
                        <div className="">90%</div>
                    </Zoom>

                    <Zoom>
            
            <div className="mt-2 mb-1">
            {Helper.translate('Adobe InDesign',this.props.lang)}
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "90%"}}>
                    </div>
                </div>
                <div className="">90%</div>
            </Zoom>

                    <Zoom>
                    <div className="mt-2 mb-1">
                        {Helper.translate('Adobe Illustrator',this.props.lang)}
                    </div>

                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "90%"}}>
                            </div>
                        </div>
                        <div className="">90%</div>
                        
                    </Zoom>

                    
            <Zoom>
            <div className="mt-2 mb-1">
            {Helper.translate('Blender 3D',this.props.lang)}
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "25%"}}>
                    </div>
                </div>
                <div className="">25%</div>
                
            </Zoom>

                    <Zoom>
                    <div className="mt-2 mb-1">
                        {Helper.translate('Microsoft Office',this.props.lang)}
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "50%"}}>
                            </div>
                        </div>
                        <div className="">50%</div>

                    </Zoom>

                    
                 


            <Zoom>
            <div className="mt-2 mb-1">
            {Helper.translate('Wordpress Divi',this.props.lang)}

                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "60%"}}>
                    </div>
                </div>
                <div className="">60%</div>

                
            </Zoom>
            <Zoom>
                    <div className="mt-2 mb-1">
                        {Helper.translate('Creative & Motivated',this.props.lang)}
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "100%"}}>
                            </div>
                        </div>
                        <div className="">100%</div>

                    </Zoom>

            </div>    
        }






        </div>
        );
    }
}