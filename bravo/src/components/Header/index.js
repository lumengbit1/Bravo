import React, { Component } from "react";
import './../../css/style.css';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state={
            display: 'none',
            logo:'block',
        }
      }

      display_on=()=> { 
            this.setState({
                display: 'block',
                logo:'none',
            })


    }
    display_off=()=> { 
        this.setState({
            display: 'none',
            logo:'block',
        })


}



    render(){
        return(
            <div>
                <div className='header'>
                    <NavLink  exact to='/'><img src={require('./../../images/logo.svg')} alt="logo" style={{ display: this.state.logo }}/></NavLink>
                    <div className='navtext'>
                        <a><NavLink exact to='/Program'>Program</NavLink></a>
                        <a><NavLink exact to='/Partners'>Partners</NavLink></a>
                        <a><NavLink exact to='/Locations'>Locations</NavLink></a>
                        <a><NavLink exact to='/AboutMXDC'>About MXDC</NavLink></a>
                        <a><NavLink exact to='/Contactus'>Contact us</NavLink></a>
                    </div>
                    <img className='mobileicon' src={require('./../../images/menu_icon.svg')} alt='mobileicon' onClick={this.display_on} style={document.body.clientWidth>480 ?{display:'none'}:{ display: this.state.logo }}/>
                    <div className='mobilemenu' style={{ display: this.state.display }}>
                        <div className='maskheader'>
                            <img src={require('./../../images/logo.svg')} alt="logo" />
                            <img src={require('./../../images/close_icon.svg')} alt="close" onClick={this.display_off} />
                        </div>
                        <div className='mobilemenutext'>
                            <a><NavLink exact to='/Program'>Program</NavLink></a>
                            <a><NavLink exact to='/Partners'>Partners</NavLink></a>
                            <a><NavLink exact to='/Locations'>Locations</NavLink></a>
                            <a><NavLink exact to='/AboutMXDC'>About MXDC</NavLink></a>
                            <a><NavLink exact to='/Contactus'>Contact us</NavLink></a>
                        </div>
                    </div>
                </div>
                <div className='headerpicture'>
                    <h1>MXDC Melbourne</h1>
                    <h3>June 20-27</h3>
                </div>              
                {/* <Switch>
                    <Route exact path='/' component={Content}/>
                </Switch>                */}
            </div>

        )
    }
}

export default Header;

