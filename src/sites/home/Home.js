import React, { Component } from 'react';
import HomeIntro from './Homeintro';
import Homeskill from './Homeskill';
import Hometime from './Hometime';
import References from './References';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
 
// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms



export default class Home extends Component{
    constructor(props){
        super(props);
        configureAnchors({offset: -60, scrollDuration: 200})

    }

      render(){
          return (
            <div>


            <ScrollableAnchor id={'about'}>

                <HomeIntro></HomeIntro>
            </ScrollableAnchor>
                <Homeskill></Homeskill>
                
                <Hometime></Hometime>
                <ScrollableAnchor id={'references'}>

                <References imagearray={this.props.imagearray} prints={this.props.prints} blender={this.props.blender}></References>

                </ScrollableAnchor>
            </div>
          )
      }
}