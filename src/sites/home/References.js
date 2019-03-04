import React, {Component} from 'react'
import '../../styles/container.css'
import Helper from '../../component/Helper'

export default class References extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="pb-2 pt-5 container-fluid">

                <div className=""><h3 className=""><span className="headlines">{Helper.translate("REFERENCES",this.props.lang)}</span> </h3></div>
                
                <div className="mt-5 mb-3"><b className="">{Helper.translate("Logos",this.props.lang)}</b></div>
                {this.props.imagearray}

                <div className="mt-5 mb-3"><b className="">{Helper.translate("Prints",this.props.lang)}</b></div>
                {this.props.prints} 

                <div className="mt-5 mb-3"><b className="">{Helper.translate("Digital",this.props.lang)}</b></div>
                {this.props.digital} 

                <div className="mt-5 mb-3"><b className="">{Helper.translate("Blender 3D",this.props.lang)}</b></div>
                {this.props.blender}

            </div>

        );
    }
}