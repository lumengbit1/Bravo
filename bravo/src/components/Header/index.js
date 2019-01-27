import React, { Component } from "react";
import './../../css/style.css';
import Content from './../Content'
import {Route,NavLink,Switch} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <div>
                <div className='header'>
                    <img src={require('./../../images/logo.svg')} alt="logo" />
                    <div className='navtext'>
                        <a><NavLink exact to='/'>Program</NavLink></a>
                        <a><NavLink exact to='/Partners'>Partners</NavLink></a>
                        <a><NavLink exact to='/Locations'>Locations</NavLink></a>
                        <a><NavLink exact to='/About MXDC'>About MXDC</NavLink></a>
                        <a><NavLink exact to='/Contact us'>Contact us</NavLink></a>
                    </div>
                </div>
                <div className='headerpicture'>
                    <h1>MXDC Melbourne</h1>
                    <h3>June 20-27</h3>
                </div>              
                <Switch>
                    <Route exact path='/' component={Content}/>
                </Switch>               
            </div>

        )
    }
}

export default Header;

