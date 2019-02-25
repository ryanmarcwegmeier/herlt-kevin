import React, { Component } from 'react';
import HomeIntro from './Homeintro';
import Homeskill from './Homeskill';
import Hometime from './Hometime';
import References from './References';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import Footer from '../../component/Footer';
import ImageModal from '../../component/ImageModal';
import { goToAnchor } from 'react-scrollable-anchor'



 
// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms



export default class Home extends Component{
    constructor(props){
        super(props);
        
        this.state={
            path:this.props.path,
            imgUrl:"",
            imgDes:"",
            imgTitle:"",
        }

        configureAnchors({offset: -60, scrollDuration: 200})

        this.handleScroll = this.handleScroll.bind(this);
        this.handleImageModal = this.handleImageModal.bind(this);
    }

    handleImageModal(title,describtion,url){
        this.setState({imgUrl:url,imgTitle:title,imgDes:describtion});
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
            

<ImageModal imgTitle={this.props.imgTitle} imgUrl={this.props.imgUrl} imgDes={this.props.imgDes}></ImageModal>

            <div className="container-fluid" style={{position:'relative',background:'white',zIndex:100}}>
            

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