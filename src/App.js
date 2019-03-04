import React, { Component } from "react";
import Helper from './component/Helper'
import {
  Route,
  BrowserRouter,
  //NavLink
} from "react-router-dom";


import Home from './sites/home/Home'
import Contact from './sites/contact/Contact'
import Header from './component/Header'

import { NavHashLink as NavLink } from 'react-router-hash-link';
import { goToAnchor } from "react-scrollable-anchor";

import './styles/container.css'

import logo from './images/kevin-logo.png';


import img1 from './images/Logos/backshop-logo-web.jpg';
import img2 from './images/Logos/bebop-logo-web.jpg';
import img3 from './images/Logos/ebh-logo-web.jpg';
import img4 from './images/Logos/ernst-luftig-logo-web.jpg';
import img5 from './images/Logos/ham-logo-web.jpg';
import img6 from './images/Logos/infomatiger-logo-web.jpg';
import img7 from './images/Logos/kasangga-youth-logo-web.jpg';
import img8 from './images/Logos/kevin-logo-web.jpg';
import img9 from './images/Logos/silk-darling.jpg';

import img10 from './images/Print/ebh-print-web.jpg';
import img11 from './images/Print/fsr-print-web.jpg';
import img12 from './images/Print/mm-print-web.jpg';
import img13 from './images/Print/protecttheearth-print-web.jpg';

import img14 from './images/Blender/devil-blender-web.jpg';
import img15 from './images/Blender/fence-blender-web.jpg';





    
    class App extends Component {
      
      constructor(props){
        super(props);
        
        
        this.state={
          lang:0,
          imagearray:[],
          prints:[],
          blender:[],
          isnavtoggled:false,
          width:0,
          height:0,
          path:window.location.pathname+window.location.hash,
          images:[],
          
          imgUrl:"",
          imgDes:"",
          imgTitle:"",
          
        }
        
        this.handleLang = this.handleLang.bind(this);
        this.toggle = this.toggle.bind(this)
        this.goToAbout = this.goToAbout.bind(this)
        this.goToReferences = this.goToReferences.bind(this)
        this.goToPath = this.goToPath.bind(this)
        this.updateDimensions = this.updateDimensions.bind(this)
        this.setPath = this.setPath.bind(this)
        this.handleImageModal = this.handleImageModal.bind(this);
        this.createListView = this.createListView.bind(this)
      }

      handleLang(lang){
        this.setState({lang:lang});
      }
      
      handleImageModal(title,describtion,url){
        this.setState({imgUrl:url,imgTitle:title,imgDes:describtion});
      }
      
      
      createListView(links, cols){
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
              <div key={x1.id}  className="col-4 m-0 p-0">
              <img onClick={()=>this.handleImageModal(x1.title,x1.desc,x1.src)}  data-toggle="modal" data-target="#exampleModal" src={x1.src} style={{width:'100%'}}></img>
              </div>
              :
              <div key={rows+'-'+col} className="col-4 m-0 p-0"></div>
              ); 
            }
            array.push(
              <div key={rows} className="row"> 
              {flexcol}
              </div>
              )
              rows--;
            }
            return array;
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
            this.goToPath('/#about')
            this.setState({isnavtoggled:false})
            goToAnchor('about')
          }
          
          goToReferences(){
            this.goToPath('/#references')
            this.setState({isnavtoggled:false})
            goToAnchor('references')
            
          }
          
          updateDimensions() {
            this.setState({width: window.innerWidth, height: window.innerHeight});
            
            
          }
          
          componentDidMount() {

            
            let path = window.location.pathname+window.location.hash;
            this.setState({width: window.innerWidth, height: window.innerHeight,path:path});
          
            
            window.addEventListener("resize", this.updateDimensions);
          }
          
          
          componentWillMount(){
           let images = [{"id":1,"title":"Rock", "src":img1,'desc':'Descrition1'},
           {"id":2, "src":img2,'desc':'Descrition2'},
           {"id":3, "src":img3,'desc':'Descrition3'},
           {"id":4, "src":img4,'desc':'Descrition4'},
           {"id":5, "src":img5,'desc':'Descrition5'},
           {"id":6, "src":img6,'desc':'Descrition6'},
           {"id":7, "src":img7,'desc':'Descrition7'},
           {"id":8, "src":img8,'desc':'Descrition8'},
           {"id":9, "src":img9,'desc':'Descrition9'},
         ] 
          this.setState({imagearray:this.createListView(images,3)})
          
           images = [
           {"id":10,"title":"Rock", "src":img10,'desc':'Descrition1'},
           {"id":11, "src":img11,'desc':'Descrition2'},
           {"id":12, "src":img12,'desc':'Descrition3'},
           {"id":13, "src":img13,'desc':'Descrition4'},
         ] 
            
            
          this.setState({prints:this.createListView(images,3)})
          
           images = [
            {"id":14,"title":"Rock", "src":img14,'desc':'Descrition1'},
            {"id":15, "src":img15,'desc':'Descrition2'},

          ] 
            this.setState({blender:this.createListView(images,3)}) 
          }
          
          
          render() {  

            return (
              <BrowserRouter>
              <div className="">  
              {
                (this.state.isnavtoggled==true)?
                <div style={{visibility:'hidden'}}>
                
                
                
                <Header lang={this.state.lang} handleLang={this.handleLang} width={this.state.width} toggle={this.toggle}></Header>
                </div>
                :
                <Header lang={this.state.lang} handleLang={this.handleLang} width={this.state.width} toggle={this.toggle}></Header>
                
              }       
              
              
              <div className="flexrow">
              
              { true &&
                <div>
                
                {this.state.width>=756?
                  
                  <nav className="flexcol1 mt56 position-fixed " style={{height:'calc(100vh - 56px)', width:'47px',}}>
                  
                  <div className="flexcol1 flex-v-center flex-h-center ">
                  <NavLink exact to="/#about" onClick={this.goToAbout}>
                  {(this.state.path=='/' || this.state.path=='/#about' )
                  ?
                  <div className="rotation selected">ABOUT</div>
                  :
                  <div className="rotation">ABOUT</div>
                  
                }
                
                </NavLink>
                </div>
                
                
                
                <div className="flexcol1 flex-v-center flex-h-center ">
                <NavLink exact to="/#references"   onClick={this.goToReferences}>
                {(this.state.path=='/#references')
                ?
                <div className="rotation selected">REFERENCES</div>
                :
                <div className="rotation">REFERENCES</div>
                
              }
              </NavLink>
              </div>
              
              
              
              <div className="flexcol1 flex-v-center flex-h-center ">
              <NavLink exact to="/contact"   onClick={()=>this.goToPath('/contact')}>
              {(this.state.path=='/contact')
              ?
              <div className="rotation selected">CONTACT</div>
              :
              <div className="rotation">CONTACT</div>
              
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
              <NavLink exact to="/#about" style={{display:'inline-block'}}>
              {(this.state.path=='/'  || this.state.path=='/#about' )
              ?
              <span className="selected"  onClick={this.goToAbout}>ABOUT</span>
              :
              <span onClick={this.goToAbout}>ABOUT</span>
            }
            </NavLink>
            </div>
            
            <div className=" p-3" style={{display:'block'}}>
            <NavLink exact to="/#references"  style={{display:'inline-block'}}>
            
            {(this.state.path=='/#references')
            ?
            <span className="selected"  onClick={this.goToReferences}>REFERENCES</span>
            :
            <span  onClick={this.goToReferences}>REFERENCES</span>
          }
          
          </NavLink>
          </div>
          <div className=" p-3" style={{display:'block'}}>
          
          <NavLink exact to="/contact" style={{display:'inline-block'}} onClick={()=>this.goToPath('/contact')}>
          {this.state.path=='/contact'
          ?
          <span className="selected"  onClick={this.toggle}>CONTACT</span>
          :
          <span  onClick={this.toggle}>CONTACT</span>
        }              </NavLink>
        
        </div>
        <div className=" p-3" style={{display:'block'}}>
        
        <NavLink exact to="/privacypolicy" style={{display:'inline-block'}} onClick={()=>this.goToPath('/privacypolicy')}>
        {this.state.path=='/privacypolicy'
        ?
        <span className="selected"  onClick={this.toggle}>PRIVACYPOLICY</span>
        :
        <span  onClick={this.toggle}>PRIVACYPOLICY</span>
      }              </NavLink>
      </div>
      <div className=" p-3" style={{display:'block'}}>
      
      
      <NavLink exact to="/imprint" style={{display:'inline-block'}} onClick={()=>this.goToPath('/imprint')}>
      {this.state.path=='/imprint'
      ?
      <span className="selected"  onClick={this.toggle}>IMPRINT</span>
      :
      <span  onClick={this.toggle}>IMPRINT</span>
    }              </NavLink>
    </div>
    </div>
    
    <div className="h5" style={{position:'fixed',bottom:0, left:'calc(50vw - 59.02px / 2)'}}>
    <span>DE</span>|<span>EN</span>
    </div>
    </nav>
  }
  </div>
  
}
</div>
}



<main className={!this.state.isnavtoggled?"flexcol13 mt56 paddingleft":'flexcol13 mt56 paddingleft '} style={{position:'relative'}}>
<Route exact path='/' render={(props) => <Home {...props} lang={this.state.lang}  path={this.state.path} imgUrl={this.state.imgUrl} imgDes={this.state.imgDes} imgTitle={this.state.imgTitle} setPath={this.setPath} width={this.state.width}  imagearray={this.state.imagearray} prints={this.state.prints} blender={this.state.blender} />}/>
<Route exact path='/contact' render={(props) => <Contact {...props}lang={this.state.lang}  setPath={this.setPath} width={this.state.width}  />}/>

</main>

</div>






</div>
</BrowserRouter>
);
}
}

export default App;
