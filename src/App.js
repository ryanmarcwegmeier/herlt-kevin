import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";


import Home from './sites/home/Home'
import Contact from './sites/contact/Contact'
import Header from './component/Header'
import ModalImage from 'react-modal-image';
import Fade from 'react-reveal/Fade';





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
          <ModalImage small={x1} large={x1}/>        
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

    }

    this.toggle = this.toggle.bind(this)


  }


  toggle(){
    if(this.state.isnavtoggled==false){
      this.setState({isnavtoggled:true})
    }else {
      this.setState({isnavtoggled:false})
    }
  }



  componentWillMount(){

    this.setState({imagearray:createListView(images,3)})

    this.setState({prints:createListView(printimages,3)})
    
    this.setState({blender:createListView(blenderimages,3)})
  }


  render() {    
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header toggle={this.toggle}></Header>


          <div className="flexrow">
          
          {!this.state.isnavtoggled &&
          <Fade>

<div ref={div => {
            this.mydiv= div;
          }} className="flexcol1 mt56" style={{position:'relative'}}>




            <nav className="flexcol1 mt56 position-fixed " style={{height:'calc(100vh - 56px)', width:'47px'}}>

              <div className="flexcol1 spacebtw">
                <div className="flexcol1 flex-v-center flex-h-center">
                  <a href="/index#about" >
                    <div className="rotation">About</div>
                  </a>
                </div>

                <div className="flexcol1 flex-v-center flex-h-center ">
                  <a href="/index#references" >
                  <div className="rotation">References</div>
                  </a>
                </div>

                <div className="flexcol1 flex-v-center flex-h-center ">
                  <NavLink exact to="/contact">
                  <div className="rotation">Contact</div>

                  </NavLink>
                </div>

              
              </div>

            </nav>
            </div>

            </Fade>
          }

      

            <main className="flexcol13 mt56" style={{position:'relative'}}>
            <Route exact path='/index' render={(props) => <Home {...props}  imagearray={this.state.imagearray} prints={this.state.prints} blender={this.state.blender} />}/>
            <Route exact path='/contact' render={(props) => <Contact {...props}  />}/>
            
          </main>

          </div>

          
          
          
              
         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
