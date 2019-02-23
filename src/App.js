import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  //NavLink
} from "react-router-dom";


import Home from './sites/home/Home'
import Contact from './sites/contact/Contact'
import Header from './component/Header'
import ModalImage from 'react-modal-image';

import { NavHashLink as NavLink } from 'react-router-hash-link';
import { goToAnchor } from "react-scrollable-anchor";

import './styles/container.css'

import logo from './images/kevin-logo.png';





function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./images/Logos', false, /\.(png|jpe?g|svg)$/));

const printimages = importAll(require.context('./images/Print', false, /\.(png|jpe?g|svg)$/));
const blenderimages = importAll(require.context('./images/Blender', false, /\.(png|jpe?g|svg)$/));


function createListView(links, cols){
  let rows = links.length/cols
  let array = []
  while (rows>=0){
    let flexcol = [];
    for(let col = 0; col < cols; col++){
      
      let x1 = null;

      if(links.length>0){
        x1 = links.shift();
      }


      flexcol.push(
        (x1!=null) ?
        <div key={x1}  className="flexcol1">
          <ModalImage small={x1} large={x1} alt="hier kommt der text zu den bildern"/>        
        </div>
        :
        <div key={rows+'-'+col} className="flexcol1"></div>
      );

      
    }

    array.push(
      <div key={rows} className="flexrow"> 
        {flexcol}
      </div>
    )




    rows--;
  }

  return array;

}



class App extends Component {
  
  constructor(props){
    super(props);


    this.state={
      imagearray:[],
      prints:[],
      blender:[],
      isnavtoggled:false,
      width:0,
      height:0,
      path:window.location.pathname+window.location.hash,

    }

    this.toggle = this.toggle.bind(this)
    this.goToAbout = this.goToAbout.bind(this)
    this.goToReferences = this.goToReferences.bind(this)
    this.goToPath = this.goToPath.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
    this.setPath = this.setPath.bind(this)

  }


  
  
  
  setPath(path){
    
    this.setState({path:path})
    
  }
  
  
  toggle(){
    if(this.state.isnavtoggled==false){
      this.setState({isnavtoggled:true})
    }else {
      this.setState({isnavtoggled:false})
    }
  }
  
  goToPath(path){
    this.setState({path:path})
  }

  goToAbout(){
    this.goToPath('/index#about')
    this.setState({isnavtoggled:false})
    goToAnchor('about')
  }

  goToReferences(){
    this.goToPath('/index#references')
    this.setState({isnavtoggled:false})
    goToAnchor('references')

  }

  updateDimensions() {
      this.setState({width: window.innerWidth, height: window.innerHeight});

    
  }

componentDidMount() {

  if(this.state.path=='/'){
    this.setState({path:"/index"})
  }

    window.addEventListener("resize", this.updateDimensions);
}


  componentWillMount(){

    this.updateDimensions();

  

    this.setState({imagearray:createListView(images,3)})

    this.setState({prints:createListView(printimages,3)})
    
    this.setState({blender:createListView(blenderimages,3)})
  }


  render() {    
    return (
      <BrowserRouter>
        <div className="">
        {
          (this.state.isnavtoggled==true)?
          <div style={{visibility:'hidden'}}>

          <Header width={this.state.width} toggle={this.toggle}></Header>
        </div>
        :
        <Header width={this.state.width} toggle={this.toggle}></Header>

        }       


          <div className="flexrow">
          
          { true &&
          <div>

{this.state.width>=756?

            <nav className="flexcol1 mt56 position-fixed " style={{height:'calc(100vh - 56px)', width:'47px',}}>

<div className="flexcol1 flex-v-center flex-h-center ">
                <NavLink exact to="/index#about" onClick={this.goToAbout}>
                {(this.state.path=='/' || this.state.path=='/index' || this.state.path=='/index#about' || this.state.path=='/#about' )
                ?
                <div className="rotation selected">About</div>
                :
                <div className="rotation">About</div>

              }

                </NavLink>
                </div>


                
                <div className="flexcol1 flex-v-center flex-h-center ">
                <NavLink exact to="/index#references"   onClick={this.goToReferences}>
                {(this.state.path=='/index#references' || this.state.path=='/#references')
                ?
                <div className="rotation selected">References</div>
                :
                <div className="rotation">References</div>

              }
                </NavLink>
                </div>

                

                <div className="flexcol1 flex-v-center flex-h-center ">
                <NavLink exact to="/contact"   onClick={()=>this.goToPath('/contact')}>
                  {(this.state.path=='/contact')
                  ?
                  <div className="rotation selected">Contact</div>
                  :
                  <div className="rotation">Contact</div>

                  }                
                  </NavLink>
                </div>

              

            </nav>
            :
            <div>
            {(this.state.isnavtoggled==true)&&
            <nav className="smallNav h3 text-light overfl" style={{position:'fixed', top:'0',left:'0', right:'0',height:'200vh', background:'rgba(0,0,0,0.7)',zIndex:30000 }} onClick={this.toggle}>
                  
                  <div className="flexrow pt-2" style={{minHeight:'56px'}}>
                  <img src={logo} className='logo pt-1' style={{filter: 'invert(100%)'}}></img>
                  <span class="fas fa-times h4 pt-1 pr-2 mr-2" style={{cursor:'pointer',position:'fixed', right:0}} onClick={this.props.toggle}></span>

                  </div>
                  <div className="text-center">

                  <div className="mt-4 p-3" style={{display:'block'}}>
                  <NavLink exact to="/index#about" style={{display:'inline-block'}}>
                  {(this.state.path=='/' || this.state.path=='/index' || this.state.path=='/index#about' || this.state.path=='/#about' )
                ?
                <span className="selected"  onClick={this.goToAbout}>About</span>
                :
                <span onClick={this.goToAbout}>About</span>
              }
                  </NavLink>
                  </div>

                  <div className=" p-3" style={{display:'block'}}>
                  <NavLink exact to="/index#references"  style={{display:'inline-block'}}>

                    {(this.state.path=='/index#references'||this.state.path=='/#references')
                    ?
                    <span className="selected"  onClick={this.goToReferences}>References</span>
                    :
                    <span  onClick={this.goToReferences}>References</span>
                    }

                  </NavLink>
                  </div>
              <div className=" p-3" style={{display:'block'}}>

              <NavLink exact to="/contact" style={{display:'inline-block'}} onClick={()=>this.goToPath('/contact')}>
                {this.state.path=='/contact'
                ?
                <span className="selected"  onClick={this.toggle}>Contact</span>
                :
                <span  onClick={this.toggle}>Contact</span>
}              </NavLink>
              </div>
              </div>
            </nav>
            }
            </div>

}
            </div>
          }

      

            <main className={!this.state.isnavtoggled?"flexcol13 mt56 paddingleft":'flexcol13 mt56 paddingleft '} style={{position:'relative'}}>
            <Route exact path='/' render={(props) => <Home {...props} setPath={this.setPath} width={this.state.width}  imagearray={this.state.imagearray} prints={this.state.prints} blender={this.state.blender} />}/>
            <Route exact path='/index' render={(props) => <Home {...props} setPath={this.setPath} width={this.state.width}  imagearray={this.state.imagearray} prints={this.state.prints} blender={this.state.blender} />}/>
            <Route exact path='/contact' render={(props) => <Contact {...props} setPath={this.setPath} width={this.state.width}  />}/>
            
          </main>

          </div>

          
          
          
              
         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
