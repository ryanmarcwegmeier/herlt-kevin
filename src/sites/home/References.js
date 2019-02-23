import React, {Component} from 'react'
import '../../styles/container.css'

export default class References extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="pb-2 pt-5">

                <div className=""><h3 className=""><span className="headlines">REFERENCES</span> </h3></div>
                <p>
                Now I want to present you a small selection of my work from logos, print-, digitalproducts and  3D graphics created with Photoshop, Illustartor, InDesign and Blender.
                </p>
                <div className="mt-5 mb-3"><b className="">Logos</b></div>
                {this.props.imagearray}

                <div className="mt-5 mb-3"><b className="">Prints</b></div>
                {this.props.prints} 

                <div className="mt-5 mb-3"><b className="">Blender 3D</b></div>
                {this.props.blender}

            </div>

        );
    }
}