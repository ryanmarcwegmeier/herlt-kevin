import React, {Component} from "react";
import {
    Route,
    BrowserRouter,
    //NavLink
} from "react-router-dom";

import Helper from './component/Helper'

import Home from './sites/home/Home'
import Header from './component/Header'
import Policy from './sites/policy/Policy'
import Imprint from './sites/imprint/Imprint'

import {NavHashLink as NavLink} from 'react-router-hash-link';
import {goToAnchor} from "react-scrollable-anchor";

import './styles/container.css'

import logo from './images/kevin-logo.png';

import img1 from './images/Logos/ebh-logo-web.jpg';
import img2 from './images/Logos/kasangga-youth-logo-web.jpg';
import img3 from './images/Logos/silk-darling.jpg';
import img4 from './images/Logos/ernst-luftig-logo-web.jpg';
import img5 from './images/Logos/Nordprotect-logo-web.jpg';
import img6 from './images/Logos/infomatiger-logo-web.jpg';
import img7 from './images/Logos/backshop-logo-web.jpg';
import img8 from './images/Logos/scc-logo.jpg';
import img9 from './images/Logos/ham-logo-web.jpg';

import img10 from './images/Print/ebh-print-web.jpg';
import img11 from './images/Print/fsr-print-web.jpg';
import img12 from './images/Print/mm-print-web.jpg';
import img13 from './images/Print/protecttheearth-print-web.jpg';
import img14 from './images/Print/navis-einladung-print-web.jpg';
import img15 from './images/Print/silk-darling-aussteller-print-web.jpg';

import img16 from './images/Digital/bruhnmetallbau-digital-web.jpg';
import img17 from './images/Digital/dsl-digital-web.jpg';
import img18 from './images/Digital/ebh-digital-web.jpg';
import img19 from './images/Digital/silk-darling-digtal-web.jpg';
import img20 from './images/Digital/Pockets-digital-web.jpg';

import img21 from './images/Blender/devil-blender-web.jpg';
import img22 from './images/Blender/fence-blender-web.jpg';
import img23 from './images/Blender/silvertexture-blender-web.jpg';


import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';


class App extends Component {
    targetElement = null;

    constructor(props) {
        super(props);


        this.state = {
            lang: 0,
            imagearray: [],
            prints: [],
            blender: [],
            digital: [],
            isnavtoggled: false,
            width: 0,
            height: 0,
            path: window.location.pathname + window.location.hash,
            images: [],

            imgUrl: "",
            imgDes: "",
            imgTitle: "",
            imgType: "",

        };

        this.handleLang = this.handleLang.bind(this);
        this.toggle = this.toggle.bind(this);
        this.goToAbout = this.goToAbout.bind(this);
        this.goToReferences = this.goToReferences.bind(this);
        this.goToContact = this.goToContact.bind(this);
        this.goToPath = this.goToPath.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.setPath = this.setPath.bind(this);
        this.handleImageModal = this.handleImageModal.bind(this);
        this.createListView = this.createListView.bind(this)
    }

    handleLang(lang) {
        this.setState({lang: lang});
    }

    handleImageModal(title, describtion, url, type) {
        this.setState({imgUrl: url, imgTitle: title, imgDes: describtion, imgType: type});
    }


    createListView(links, cols) {
        let rows = links.length / cols;
        let array = [];
        while (rows >= 0) {
            let flexcol = [];
            for (let col = 0; col < cols; col++) {
                let x1 = null;
                if (links.length > 0) {
                    x1 = links.shift();
                }
                flexcol.push(
                    (x1 != null) ?
                        <div key={x1.id} className="col-md-4 m-0 p-0">
                            <img onClick={() => this.handleImageModal(x1.title, x1.desc, x1.src, x1.type)}
                                 alt={x1.title} data-toggle="modal" data-target="#exampleModal" src={x1.src}
                                 style={{width: '100%'}}/>
                        </div>
                        :
                        <div key={rows + '-' + col} className="col-4 m-0 p-0"/>
                );
            }
            array.push(
                <div key={rows} className="row">
                    {flexcol}
                </div>
            );
            rows--;
        }
        return array;
    }


    setPath(path) {
        this.setState({path: path})
    }


    toggle() {
        if (this.state.isnavtoggled === false) {
            this.setState({isnavtoggled: true});
            disableBodyScroll(this.targetElement);
        } else {
            this.setState({isnavtoggled: false})
            enableBodyScroll(this.targetElement);

        }
    }

    goToPath(path) {
        this.setState({path: path})
    }

    goToAbout() {
        this.goToPath('/#about')
        this.setState({isnavtoggled: false})
        goToAnchor('about')
    }

    goToReferences() {
        this.goToPath('/#references')
        this.setState({isnavtoggled: false})
        goToAnchor('references')

    }

    goToContact() {
        this.goToPath('/#contact')
        this.setState({isnavtoggled: false})
        goToAnchor('contact')

    }

    updateDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});


    }

    componentDidMount() {
        this.targetElement = document.getElementById('main');

        let path = window.location.pathname + window.location.hash;
        this.setState({width: window.innerWidth, height: window.innerHeight, path: path});


        window.addEventListener("resize", this.updateDimensions);
    }


    componentWillMount() {
        let images = [

            {
                "id": 1,
                "type": "",
                "title": "Elsa Brändström Haus",
                "src": img1,
                'desc': 'This Logo was made for a international seminar and conference venue. It was created during my professional training in the agency Euphorika.'
            },

            {
                "id": 2,
                "type": "",
                "title": "Kasangga Youth",
                "src": img2,
                'desc': 'I designed this logo in 2018 for my basketball team Kasanagga Youth.'
            },

            {
                "id": 3,
                "type": "",
                "title": "Silk Darling",
                "src": img3,
                'desc': 'I designed this Logo back in 2017 for a silk pillow company.'
            },

            {
                "id": 4,
                "type": "",
                "title": "Ernst Luftig Windparkwartung GmbH",
                "src": img4,
                'desc': 'This Logo was made for a fictional wind farm maintenance company.'
            },

            {
                "id": 5,
                "type": "",
                "title": "Nord Protect",
                "src": img5,
                'desc': 'The logo was created for a personal security company. It shows a sign in which a large broad employee of the company Nord Protect protects the person in front of him. This logo was created during my training in Euphorika.'
            },

            {
                "id": 6,
                "type": "",
                "title": "Informatiger",
                "src": img6,
                'desc': 'This Logo was made for a student council for electrical engineering and computer science. It was made back in 2017.This Logo was created during my professional training in Euphorika'
            },

            {
                "id": 7,
                "type": "",
                "title": "Der frische Backshop",
                "src": img7,
                "desc": "I developed this logo for a bakery in a petrol station Hessol in 2017 during my professional training in Euphorika."
            },
            {
                "id": 8,
                "type": "",
                "title": "Secret Cosmetic Club",
                "src": img8,
                'desc': 'This logo was made for a beauty webshop. It was made during my professional training in Euphorika.'
            },

            {
                "id": 9,
                "type": "",
                "title": "Ham",
                "src": img9,
                'desc': 'This Logo was made for a fictional brand'
            },


        ]
        this.setState({imagearray: this.createListView(images, 3)})

        images = [
            {
                "id": 10,
                "type": "",
                "title": "Elsa Brändström Haus Pagedesign",
                "src": img10,
                'desc': 'I designed the layout which is oriented to the webdesign. It was created during my professional training in Euphorika.'
            },
            {
                "id": 11,
                "type": "",
                "title": "FSR Flyer",
                "src": img11,
                'desc': 'I designed this flyer on customer request. It was created during my professional training in Euphorika.'
            },
            {
                "id": 12,
                "type": "",
                "title": "Manager Magazin Illustration",
                "src": img12,
                'desc': 'I created the background of this page. I used stock pictures for the Illustration. It was created during my professional training in Euphorika'
            },
            {
                "id": 13,
                "type": "",
                "title": "OnlYours Poster",
                "src": img13,
                'desc': 'I designed this Poster for a friend to help him for his school project.'
            },
            {
                "id": 14,
                "type": "",
                "title": "Navis Heide Park invitation",
                "src": img14,
                'desc': "This invitation was for the company Navis who invited theiremployees to the amusement park 'Heide Park'. In this illustration, I have designed the compilation of the individual elements that come from Shutterstock."
            },
            {
                "id": 15,
                "type": "",
                "title": "Silk Darling exhibitor",
                "src": img15,
                'desc': 'This is a design for an exhibitor of Silk Darling. This layout was created during my training in Euphorika.'
            },
        ]


        this.setState({prints: this.createListView(images, 3)})

        images = [
            {
                "id": 16,
                "type": "",
                "title": "Bruhn Metallbau Divi Website",
                "src": img16,
                'desc': "This website was built with a Divi Theme on Wordpress. It was created during my professional training in Euphorika. To the website <a target='_blank' href='https://www.bruhn-metallbau.de/'>https://www.bruhn-metallbau.de/</a>"
            },
            {
                "id": 17,
                "type": "",
                "title": "DSL Divi Website",
                "src": img17,
                'desc': "This website was built with a Divi Theme on Wordpress. It was created during my professional training in Euphorika. To the website <a target='_blank' href='https://www.dsl-sachwert.de/'>www.dsl-sachwert.de </a>",
            },
            {
                "id": 18,
                "type": "",
                "title": "Elsa Brändström Haus Webdesign",
                "src": img18,
                'desc': "I contributed to the design of this website. It was designed during my professional training in Euphorika. To the website <a target='_blank' href='https://ebh-hamburg.de'> https://ebh-hamburg.de/ </a>"
            },
            {
                "id": 19,
                "type": "",
                "title": "Silk Darling Webdesign",
                "src": img19,
                'desc': "I designed the website during my professional training in Euphorika. To the website <a target='_blank' href='https://www.silkdarling.com/'>https://www.silkdarling.com/ </a>"
            },
            {
                "id": 20,
                "type": "",
                "title": "Pockets Webdesign",
                "src": img20,
                'desc': "I designed the website for the company consultant Pockets during my training in Euphorika."
            },
        ]


        this.setState({digital: this.createListView(images, 3)})

        images = [
            {
                "id": 21,
                "type": "",
                "title": "3D Devil",
                "src": img21,
                'desc': 'I created this devil with VR glasses in the program Oculus Medium. The details on 3D Blender.'
            },
            {
                "id": 22,
                "type": "",
                "title": "Silver Fences",
                "src": img22,
                'desc': 'It was created by myself and it was my first experience with 3D Blender.'
            },
            {"id": 23, "type": "", "title": "Liquid Silver texture", "src": img23, 'desc': ''},

        ];
        this.setState({blender: this.createListView(images, 3)})
    }

    componentWillUnmount() {
        clearAllBodyScrollLocks();
    }


    render() {

        return (
            <BrowserRouter>
                <div className="">
                    {
                        (this.state.isnavtoggled === true && this.state.width<756) ?
                            <div style={{visibility: 'hidden'}}>


                                <Header lang={this.state.lang} handleLang={this.handleLang} width={this.state.width}
                                        toggle={this.toggle}/>
                            </div>
                            :
                            <Header lang={this.state.lang} handleLang={this.handleLang} width={this.state.width}
                                    toggle={this.toggle}></Header>

                    }


                    <div className="flexrow">

                        {<div>

                            {this.state.width >= 756 ?

                                <nav className="flexcol1 mt56 position-fixed "
                                     style={{height: 'calc(100vh - 56px)', width: '47px',}}>

                                    <div className="flexcol1 flex-v-center flex-h-center ">
                                        <NavLink exact to="/#about" onClick={this.goToAbout}>
                                            {(this.state.path === '/' || this.state.path === '/#about')
                                                ?
                                                <div
                                                    className="rotation selected">{Helper.translate("ABOUT", this.state.lang)}</div>
                                                :
                                                <div
                                                    className="rotation">{Helper.translate("ABOUT", this.state.lang)}</div>

                                            }

                                        </NavLink>
                                    </div>


                                    <div className="flexcol1 flex-v-center flex-h-center ">
                                        <NavLink exact to="/#references" onClick={this.goToReferences}>
                                            {(this.state.path === '/#references')
                                                ?
                                                <div
                                                    className="rotation selected">{Helper.translate("REFERENCES", this.state.lang)}</div>
                                                :
                                                <div
                                                    className="rotation">{Helper.translate("REFERENCES", this.state.lang)}</div>

                                            }
                                        </NavLink>
                                    </div>


                                    <div className="flexcol1 flex-v-center flex-h-center ">
                                        <NavLink exact to="/#contact" onClick={this.goToContact}>
                                            {(this.state.path === '/#contact')
                                                ?
                                                <div
                                                    className="rotation selected">{Helper.translate("CONTACT", this.state.lang)}</div>
                                                :
                                                <div
                                                    className="rotation">{Helper.translate("CONTACT", this.state.lang)}</div>

                                            }
                                        </NavLink>
                                    </div>


                                </nav>
                                :
                                <div>
                                    {(this.state.isnavtoggled === true) &&
                                    <nav className="smallNav h3 text-light overfl" style={{
                                        position: 'fixed',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        height: '200vh',
                                        background: 'rgba(0,0,0,0.7)',
                                        zIndex: 30000
                                    }} onClick={this.toggle}>

                                        <div className="flexrow pt-2" style={{minHeight: '56px'}}>
                                            <img src={logo} className='logo pt-1' style={{filter: 'invert(100%)'}}
                                                 alt="Logo"/>
                                            <span className="fas fa-times h4 pt-1 pr-2 mr-2"
                                                  style={{cursor: 'pointer', position: 'fixed', right: 0}}
                                                  onClick={this.props.toggle}></span>

                                        </div>
                                        <div className="text-center">

                                            <div className="mt-4 p-3" style={{display: 'block'}}>
                                                <NavLink exact to="/#about" style={{display: 'inline-block'}}>
                                                    {(this.state.path === '/' || this.state.path === '/#about')
                                                        ?
                                                        <span className="selected"
                                                              onClick={this.goToAbout}>{Helper.translate("ABOUT", this.state.lang)}</span>
                                                        :
                                                        <span
                                                            onClick={this.goToAbout}>{Helper.translate("ABOUT", this.state.lang)}</span>
                                                    }
                                                </NavLink>
                                            </div>

                                            <div className=" p-3" style={{display: 'block'}}>
                                                <NavLink exact to="/#references" style={{display: 'inline-block'}}>

                                                    {(this.state.path === '/#references')
                                                        ?
                                                        <span className="selected"
                                                              onClick={this.goToReferences}>{Helper.translate("REFERENCES", this.state.lang)}</span>
                                                        :
                                                        <span
                                                            onClick={this.goToReferences}>{Helper.translate("REFERENCES", this.state.lang)}</span>
                                                    }

                                                </NavLink>
                                            </div>
                                            <div className=" p-3" style={{display: 'block'}}>

                                                <NavLink exact to="/#contact" style={{display: 'inline-block'}}
                                                         onClick={() => this.goToPath('/contact')}>
                                                    {this.state.path === '/#contact'
                                                        ?
                                                        <span className="selected"
                                                              onClick={this.goToContact}>{Helper.translate("CONTACT", this.state.lang)}</span>
                                                        :
                                                        <span
                                                            onClick={this.goToContact}>{Helper.translate("CONTACT", this.state.lang)}</span>
                                                    }              </NavLink>

                                            </div>
                                            <div className=" p-3" style={{display: 'block'}}>

                                                <NavLink exact to="/privacypolicy" style={{display: 'inline-block'}}
                                                         onClick={() => this.goToPath('/privacypolicy')}>
                                                    {this.state.path === '/privacypolicy'
                                                        ?
                                                        <span className="selected"
                                                              onClick={this.toggle}>{Helper.translate("PRIVACYPOLICY", this.state.lang)}</span>
                                                        :
                                                        <span
                                                            onClick={this.toggle}>{Helper.translate("PRIVACYPOLICY", this.state.lang)}</span>
                                                    }              </NavLink>
                                            </div>
                                            <div className=" p-3" style={{display: 'block'}}>


                                                <NavLink exact to="/imprint" style={{display: 'inline-block'}}
                                                         onClick={() => this.goToPath('/imprint')}>
                                                    {this.state.path === '/imprint'
                                                        ?
                                                        <span className="selected"
                                                              onClick={this.toggle}>{Helper.translate("IMPRINT", this.state.lang)}</span>
                                                        :
                                                        <span
                                                            onClick={this.toggle}>{Helper.translate("IMPRINT", this.state.lang)}</span>
                                                    }              </NavLink>
                                            </div>
                                        </div>

                                        <div className="h5 mb-5"
                                             style={{position: 'fixed', bottom: 0, left: 'calc(50vw - 59.02px / 2)'}}>
                                            {this.state.lang ?
                                                <span>
    <span onClick={() => this.handleLang(1)} style={{cursor: "pointer"}}>
    <b>DE</b>
    </span>|
    <span onClick={() => this.handleLang(0)} style={{cursor: "pointer"}}>
      EN
    </span>
    </span>
                                                :
                                                <span>
    <span onClick={() => this.handleLang(1)} style={{cursor: "pointer"}}>
      DE
    </span>|
    <span onClick={() => this.handleLang(0)} style={{cursor: "pointer"}}>
    <b>EN</b>
    </span>
    </span>

                                            }
                                        </div>
                                    </nav>
                                    }
                                </div>

                            }
                        </div>
                        }


                        <main id={'main'}
                              className={!this.state.isnavtoggled ? "flexcol13 mt56 paddingleft" : 'position-sticky flexcol13 mt56 paddingleft '}
                              style={{position: 'relative'}}>
                            <Route exact path='/'
                                   render={(props) => <Home {...props} lang={this.state.lang} path={this.state.path}
                                                            imgUrl={this.state.imgUrl} imgDes={this.state.imgDes}
                                                            imgType={this.state.imgType} imgTitle={this.state.imgTitle}
                                                            setPath={this.setPath} width={this.state.width}
                                                            imagearray={this.state.imagearray}
                                                            prints={this.state.prints} blender={this.state.blender}
                                                            digital={this.state.digital}/>}/>
                            <Route exact path='/privacypolicy'
                                   render={(props) => <Policy {...props} setPath={this.setPath} lang={this.state.lang}
                                                              path={this.state.path} width={this.state.width}/>}/>
                            <Route exact path='/imprint'
                                   render={(props) => <Imprint {...props} setPath={this.setPath} lang={this.state.lang}
                                                               path={this.state.path} width={this.state.width}/>}/>

                        </main>

                    </div>


                </div>
            </BrowserRouter>
        );
    }
}

export default App;
