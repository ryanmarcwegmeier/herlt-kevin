import React, {Component} from 'react'
import '../../styles/container.css'
import Helper from '../../component/Helper'
import ScrollTrigger from 'react-scroll-trigger';


export default class References extends Component{

    render(){
        return(
            <div className="pb-2 mt-5 container-fluid">

                <div className=""><h3 className=""><span className="headlines">{Helper.translate("REFERENCES",this.props.lang)}</span> </h3></div>
                
                <div className="mt-5 mb-3"><b className="">{Helper.translate("Logos",this.props.lang)}</b></div>
                
                <ScrollTrigger onEnter={()=>this.props.setPath('/#references')} >

                {this.props.imagearray}

                </ScrollTrigger>

                <div className="mt-5 mb-3"><b className="">{Helper.translate("Prints",this.props.lang)}</b></div>

                <ScrollTrigger onEnter={()=>this.props.setPath('/#references')} >

                {this.props.prints} 

                </ScrollTrigger>

                <div className="mt-5 mb-3"><b className="">{Helper.translate("Digital",this.props.lang)}</b></div>

                <ScrollTrigger onEnter={()=>this.props.setPath('/#references')} >

                {this.props.digital} 

                </ScrollTrigger>

                <div className="mt-5 mb-3"><b className="">{Helper.translate("Blender 3D",this.props.lang)}</b></div>

                <ScrollTrigger onEnter={()=>this.props.setPath('/#references')} >

                {this.props.blender}

                </ScrollTrigger>

            </div>

        );
    }
}