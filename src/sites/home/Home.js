import React, { Component } from 'react';
import HomeIntro from './Homeintro';
import Homeskill from './Homeskill';
import Hometime from './Hometime';
import References from './References';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import Footer from '../../component/Footer';
import ImageModal from '../../component/ImageModal';
import ScrollTrigger from 'react-scroll-trigger';




// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms



export default class Home extends Component{
    constructor(props){
        super(props);
        
        this.state={
            lastpageYOffset:window.pageYOffset,
            imgUrl:"",
            imgDes:"",
            imgTitle:"",
        }
        
        configureAnchors({offset: -60, scrollDuration: 200})
        
        this.handleImageModal = this.handleImageModal.bind(this);
        this.handleScroll = this.handleScroll.bind(this)
        this.onEnterViewport = this.onEnterViewport.bind(this)
        this.onExitViewport = this.onExitViewport.bind(this)
    }
    
    handleImageModal(title,describtion,url){
        this.setState({imgUrl:url,imgTitle:title,imgDes:describtion});
    }
    
    handleScroll(){
        // let path = window.location.pathname+window.location.hash
        // let actualpageYOffset = window.pageYOffset;
        // this.props.setPath(window.pageXOffset)

      
        
        

    }    
    
    onEnterViewport(path) {

        this.props.setPath(path)
      
    }
    
    onExitViewport(path){
        let p = path.split('#');
        window.location.pathname = p[0];
        window.location.hash = '#'+p[1];    
    }
    
        
    
    render(){
        return (
            <div>
            
            
            <ImageModal lang={this.props.lang} imgTitle={this.props.imgTitle} imgUrl={this.props.imgUrl} imgDes={this.props.imgDes}></ImageModal>
            
            <div className="container-fluid" style={{position:'relative',background:'white',zIndex:100}}>
            
            
            <ScrollableAnchor id={'about'}>
            <ScrollTrigger onEnter={()=>this.onEnterViewport("/#about")}  onExit={()=>this.onExitViewport(window.location.pathname+window.location.hash)}>
            <div>

            <ScrollTrigger onEnter={()=>this.onEnterViewport("/#about")}  onExit={()=>this.onExitViewport(window.location.pathname+window.location.hash)}>
            <HomeIntro width={this.props.width}></HomeIntro>
            </ScrollTrigger>

            <ScrollTrigger onEnter={()=>this.onEnterViewport("/#about")}  onExit={()=>this.onExitViewport(window.location.pathname+window.location.hash)}>
            <Homeskill></Homeskill>
            </ScrollTrigger>

            <ScrollTrigger onEnter={()=>this.onEnterViewport("/#about")}  onExit={()=>this.onExitViewport(window.location.pathname+window.location.hash)}>
            <Hometime></Hometime>
            </ScrollTrigger>

            </div>
            </ScrollTrigger>
            </ScrollableAnchor>
            
            <ScrollableAnchor id={'references'}>
            <div>

            <ScrollTrigger onEnter={()=>this.onEnterViewport("/#references")} onExit={()=>this.onEnterViewport(window.location.pathname+window.location.hash)}>

            <References lang={this.props.lang} imagearray={this.props.imagearray} prints={this.props.prints} blender={this.props.blender}></References>
            </ScrollTrigger>
            </div>
            </ScrollableAnchor>
            
            </div>
            
            <Footer></Footer>
            
            </div>
            )
        }
    }