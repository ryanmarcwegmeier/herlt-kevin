import React, {Component} from 'react';

import Zoom from 'react-reveal/Zoom'


export default class Homeskill extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h3 className="headlines">SKILLBAR </h3>

            <div className="mt-4 mb-2"><b className="">Hard Skills</b></div>

            <div className="flexrow">

            <div className="flexcol1 pr-3 ">
                <section>

                    <Zoom>
                        <div className="mt-2 mb-1">
                            Photoshop
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "90%"}}>
                            </div>
                        </div>
                        <div className="title">90%</div>
                    </Zoom>

                    <Zoom>
                    <div className="mt-2 mb-1">
                            Illustrator
                        </div>

                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "90%"}}>
                            </div>
                        </div>
                        <div className="title">90%</div>
                        
                    </Zoom>

                    <Zoom>
                    <div className="mt-2 mb-1">
                            Nerf shooting
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="101" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "101%"}}>
                            </div>
                        </div>
                        <div className="title">101%</div>

                    </Zoom>




                </section>
            </div>

            <div className="flexcol1 pl-3">

                <section className='' style={{ width: '100%' }}>
            
                    <Zoom>
            
                    <div className="mt-2 mb-1">
                            InDesign
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "90%"}}>
                            </div>
                        </div>
                        <div className="title">90%</div>
                    </Zoom>

                    <Zoom>
                    <div className="mt-2 mb-1">
                            Blender 3D
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "25%"}}>
                            </div>
                        </div>
                        <div className="title">25%</div>
                        
                    </Zoom>

                    <Zoom>
                    <div className="mt-2 mb-1">
                            Basketball Player
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "100%"}}>
                            </div>
                        </div>
                        <div className="title">100%</div>

                        
                    </Zoom>

                </section>
            </div>

            


            </div>


<div className="mt-4 mb-3"><b className="">Soft Skills</b></div>

<div className="flexrow">

<div className="flexcol1 pr-3 ">
    <section>

    <Zoom>
    <div className="mt-2 mb-1">
                Loadable
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "100%"}}>
                </div>
            </div>
            <div className="title">100%</div>

            
        </Zoom>

        <Zoom>
        <div className="mt-2 mb-1">
                Reliable
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "100%"}}>
                </div>
            </div>
            <div className="title">100%</div>

            
        </Zoom>

        <Zoom>
        <div className="mt-2 mb-1">
                Polite
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
                Creativity
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "100%"}}>
                </div>
            </div>
            <div className="title">100%</div>

            
        </Zoom>

        <Zoom>
        <div className="mt-2 mb-1">
                motivated
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "100%"}}>
                </div>
            </div>
            <div className="title">100%</div>

            
        </Zoom>

        <Zoom>
        <div className="mt-2 mb-1">
                Teamplayer
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "100%"}}>
                </div>
            </div>
            <div className="title">100%</div>

            
        </Zoom>

    </section>
</div>




</div>
        </div>
        );
    }
}