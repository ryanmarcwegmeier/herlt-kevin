import React, { Component } from 'react';
import HomeIntro from './Homeintro';
import Homeskill from './Homeskill';
import Hometime from './Hometime';
import References from './References';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import Footer from '../../component/Footer';

import { goToAnchor } from 'react-scrollable-anchor'



 
// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms



export default class Home extends Component{
    constructor(props){
        super(props);
        
        this.state={
            path:this.props.path
        }

        configureAnchors({offset: -60, scrollDuration: 200})

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(){
        let path = window.location.pathname+window.location.hash

        if(path!=this.state.path){
            this.props.setPath(path)
        }

        
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    


      render(){
          return (
            <div>
            

            <div className="container-fluid" style={{position:'relative', background:'white',zIndex:100}}>

                <ScrollableAnchor id={'about'}>
                <div>
                <div>

                <HomeIntro width={this.props.width}></HomeIntro>
                </div>
                <div>

                <Homeskill></Homeskill>
                </div>
                <div>

                <Hometime></Hometime>
                </div>
                </div>
                </ScrollableAnchor>

                <ScrollableAnchor id={'references'}>

                <References imagearray={this.props.imagearray} prints={this.props.prints} blender={this.props.blender}></References>

                </ScrollableAnchor>

                </div>

                <Footer></Footer>

            </div>
          )
      }
}