import React, { Component } from "react";
import './../../css/style.css';

class Header extends Component{

    render(){
        return(
            // <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            //     <a class="navbar-brand" href="#" >
            //         <img className='logo' src={require('./../../images/logo.svg')} alt="logo" />
            //     </a>
            //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            //         <span class="navbar-toggler-icon"></span>
            //     </button>
            //     <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar" >
            //         <ul class="navbar-nav">
            //         <li class="nav-item">
            //             <a class="nav-link" href="#" className='navlink'>Program</a>
            //         </li>
            //         <li class="nav-item">
            //             <a class="nav-link" href="#">Partners</a>
            //         </li>
            //         <li class="nav-item">
            //             <a class="nav-link" href="#">Locations</a>
            //         </li>
            //         <li class="nav-item">
            //             <a class="nav-link" href="#">About MXDC</a>
            //         </li>  
            //         <li class="nav-item">
            //             <a class="nav-link" href="#">Contact us</a>
            //         </li>      
            //         </ul>
            //     </div>  
            // </nav>
            <div>
                <div className='header'>
                    <img src={require('./../../images/logo.svg')} alt="logo" />
                    <div className='navtext'>
                        <a href='#'>Program</a>
                        <a href='#'>Partners</a>
                        <a href='#'>Locations</a>
                        <a href='#'>About MXDC</a>
                        <a href='#'>Contact us</a>
                    </div>
                </div>
                <div className='headerpicture'>
                    <h1>MXDC Melbourne</h1>
                    <h3>June 20-27</h3>
                </div>
            </div>

        )
    }
}

export default Header;

