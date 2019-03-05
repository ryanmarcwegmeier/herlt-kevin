import React, {Component} from 'react';
import Helper from '../../component/Helper'
import '../../styles/container.css'

export default class Contact extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="pb-2 pt-5 container-fluid">

                <div className=""><h3 className=""><span className="">{Helper.translate("CONTACT",this.props.lang)}</span> </h3></div>
                <div>
                “I am always looking for new adventures and challenges. So if you are interested, just drop me a quick line and I will get in contact with you.
                </div>
            </div>
        )
    }
}