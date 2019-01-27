import React, { Component } from "react";
import './../../css/style.css';


class Footer extends Component{

    render(){
        return(
            <div>
                <div className='footer'>
                    <img src={require('./../../images/logo.svg')} alt="logo" />
                    <div className='footertext'>
                        <a>Privacy</a>
                        <a>Terms and Conditions</a>
                        <a>Frequently Asked Questions</a>
                        <a>Contact Us</a>
                    </div>
                </div>
           
            </div>

        )
    }
}

export default Footer;

