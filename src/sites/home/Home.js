import React, {Component} from 'react';
import HomeIntro from './Homeintro';
import Homeskill from './Homeskill';
import Hometime from './Hometime';
import References from './References';
import ScrollableAnchor from 'react-scrollable-anchor'
import {configureAnchors} from 'react-scrollable-anchor'
import Footer from '../../component/Footer';
import ImageModal from '../../component/ImageModal';
import ScrollTrigger from 'react-scroll-trigger';


// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastpageYOffset: window.pageYOffset,
            imgUrl: "",
            imgDes: "",
            imgTitle: "",
            imgType: "",
        }

        configureAnchors({offset: -60, scrollDuration: 1000})

        this.handleImageModal = this.handleImageModal.bind(this);
        this.onEnterViewport = this.onEnterViewport.bind(this)
        this.onExitViewport = this.onExitViewport.bind(this)
    }

    handleImageModal(title, describtion, url, type) {
        this.setState({imgUrl: url, imgTitle: title, imgDes: describtion, imgType: type});
    }


    onEnterViewport(path) {

        this.props.setPath(path)

    }

    onExitViewport(path) {
        // let p = path.split('#');
        // window.location.pathname = p[0];
        // window.location.hash = '#'+p[1];    
    }


    render() {
        return (
            <div>

                <ImageModal lang={this.props.lang} imgType={this.props.imgType} imgTitle={this.props.imgTitle}
                            imgUrl={this.props.imgUrl} imgDes={this.props.imgDes}></ImageModal>

                <div className="container-fluid" style={{position: 'relative', background: 'white', zIndex: 100}}>


                    <ScrollableAnchor id={'about'}>
                        <ScrollTrigger onEnter={() => this.onEnterViewport("/#about")}
                                       onExit={() => this.onExitViewport(window.location.pathname + window.location.hash)}>
                            <div>

                                <ScrollTrigger onEnter={() => this.onEnterViewport("/#about")}
                                               onExit={() => this.onExitViewport(window.location.pathname + window.location.hash)}>
                                    <HomeIntro lang={this.props.lang} width={this.props.width}></HomeIntro>
                                </ScrollTrigger>

                                <ScrollTrigger onEnter={() => this.onEnterViewport("/#about")}
                                               onExit={() => this.onExitViewport(window.location.pathname + window.location.hash)}>
                                    <Homeskill lang={this.props.lang}></Homeskill>
                                </ScrollTrigger>

                                <ScrollTrigger onEnter={() => this.onEnterViewport("/#about")}
                                               onExit={() => this.onExitViewport(window.location.pathname + window.location.hash)}>
                                    <Hometime lang={this.props.lang}></Hometime>
                                </ScrollTrigger>

                            </div>
                        </ScrollTrigger>
                    </ScrollableAnchor>

                    <div style={{position: 'relative', height: '50px'}}>
                    </div>

                    <ScrollableAnchor id={'references'}>
                        <div>

                            <ScrollTrigger onEnter={() => this.onEnterViewport("/#references")}>

                                <References setPath={() => this.props.setPath} lang={this.props.lang}
                                            imagearray={this.props.imagearray} prints={this.props.prints}
                                            blender={this.props.blender} digital={this.props.digital}></References>
                            </ScrollTrigger>
                        </div>
                    </ScrollableAnchor>

                </div>

                <ScrollableAnchor id={'contact'}>
                    <div>

                        <ScrollTrigger onEnter={() => this.onEnterViewport("/#contact")}>

                            <Footer setPath={this.props.setPath} lang={this.props.lang} path={this.props.path}></Footer>
                        </ScrollTrigger>

                    </div>
                </ScrollableAnchor>

            </div>
        )
    }
}