import React, { Component } from "react";
import './../../css/style.css';

class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
          index: 6
        };
      }

    renderContent = ()=>{
        let index= this.state.index;
        for(let i=0;i<index;i++){
            return(
            <div>
                <img src='./../../images/Desktop-Tablet_placeholder-A.png' 
                srcset = './../../images/Desktop-Tablet_placeholder-A.png 769w, ./../../images/Desktop-Tablet_placeholder-A@2x.png 1538w, ./../../images/Mobile_placeholder-A.png 480w, ./../../images/Mobile_placeholder-A@2x.png 960w'
                sizes="(max-width: 480px) 480px, 769px"/> 
            </div>
            ) 
        }
    }
    render(){
        return(
            <div className='content'>
                {this.renderContent}
            </div>
        )
    }
}

export default Content;