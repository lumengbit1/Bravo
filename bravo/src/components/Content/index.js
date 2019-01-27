import React, { Component } from "react";
import './../../css/style.css';
import {connect} from 'react-redux';
import {getEventList} from './../../reducers/actions'


class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
        //   content:[],
        };

      }

    componentDidMount(){
        const {onfetchData} = this.props;
        onfetchData();
    }

    render(){
        const {content} = this.props;
        return(

            <div className='content'>
                {content!=null?
                    content.map((item)=>{
                        console.log(item.title)
                        return(
                            <div>
                                <img src={item.imgUrlDesktop} srcset={`${item.imgUrlDesktop} 769w,${item.imgUrlDesktop2x} 1538w,${item.imgUrlMobile} 480w,${item.imgUrlMobile2x} 960w`}
                                sizes='(max-width: 480px) 480px, 769px'/>
                                <div>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                                <img className='arrow' src={require('./../../images/right_chevron.svg')}/>
                            </div>
                        )
                    }) :''
                }                
            </div>
        )
    }
}

// Map Redux state to component props
export const mapStateToProps=(state)=> {
    return {
        content: state.fetchdata
    }
}

// Map Redux actions to component props
export const mapDispatchToProps=(dispatch)=> {
    return {
        onfetchData: () => dispatch(getEventList())
    }
}

const IContent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)

export default IContent;