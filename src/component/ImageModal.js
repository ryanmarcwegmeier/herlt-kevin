import React,{Component} from 'react';
import '../styles/container.css';

export default class ImageModal extends Component{
    constructor(props){
        super(props)
        this.state={
            small:true,
        }

        this.handleSmall = this.handleSmall.bind(this)
        this.handleBig = this.handleBig.bind(this)

    }

    handleSmall(){
        this.setState({small:true})
    }

    handleBig(){
        this.setState({small:false})
    }


    render(){
        return(
            <div>
                <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class={!this.state.small?"modal-dialog modal-dialog-centered fullscreen":"modal-dialog modal-dialog-centered"} role="document">

  <div class="modal-content">
      <div>
      <div class="row text-light p-2 imgModalHead" style={{background:'black', position:'fixed', top:0, left:0, right:0, zIndex:200}}>
                
                <h5 class="ml-4 modal-title" id="exampleModalLabel"></h5>

                <div className="ml-auto">

                {
                    this.state.small?
                    <i class="fas fa-expand mr-4" onClick={this.handleBig}></i>
                    :
                    <i class="fas fa-compress mr-4" onClick={this.handleSmall}></i>
                }
                <a href={this.props.imgUrl} download style={{textDecoration:'none', color:'#f8f9fa'}}>
                <i class="fas fa-download mr-4"></i>
                </a>
                <i class="fas fa-times mr-4"  data-dismiss="modal" aria-label="Close"></i>
                </div>

        </div>
        

            {(this.props.imgDes.length>0) &&
            <div className="row" >

            {this.state.small?
            <div className="col-md-6 text-center">
            <img src={this.props.imgUrl} style={{width:'100%'}} ></img>
            </div>:
            <div className="col-md-12 text-center">
            {
                window.innerWidth>=756 ?
                <img src={this.props.imgUrl} style={{width:'100%'}} ></img>
                :
                <img src={this.props.imgUrl} style={{position:'fixed', top:'43px',left:0,width:'100vw'}} ></img>


            }
            </div>

            }

            {this.state.small?
            <div className="col-md-6">
            {this.props.imgDes}
            </div>:
            <div className="col-md-12">
            
            </div>

            }
            </div>
            
            }




    </div>
  </div>

            

            </div>
     
</div>
            </div>
        )
    }
}