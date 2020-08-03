
import React, { Component } from "react";
import logo from '../images/logo/logo5.png';
import { FaHome ,FaInfoCircle,FaPhoneSquare } from "react-icons/fa";

class Navbartmp extends Component {

    
    render() {
        const navStyle = {
            backgroundColor: '#1A894C',
            padding : '0px 25px 20px 25px'
            
        }
        const imgStyle = {
            padding : '0px'
        }
        const uiStyle = {
            display : 'flex'
        }
       
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={navStyle}>
                <a className="navbar-brand " href="#"><img className="brand" src={logo} style={imgStyle}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" style = {uiStyle}>
                        <li className="nav-item active" >
                            <a className="nav-link" href="/home"><FaHome/> &nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" href="/about"><FaInfoCircle />&nbsp;About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        </li>
                       {/*  <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Features</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">LiveStock Investment Plans</a>
                                <a className="dropdown-item" href="#">Buy cattle</a>
                                <a className="dropdown-item" href="#">Sell cattle</a>
                                <a className="dropdown-item" href="#">Current value</a>
                            </div>
                        </li> 
                        <li className="nav-item" >
                            <a className="nav-link" href="#">Services &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        </li>*/}
                        <li className="nav-item" >
                            <a className="nav-link" href="/contactus"><FaPhoneSquare />&nbsp;Contact us&nbsp;&nbsp;</a>
                        </li>
                    </ul>
                   
                    <a href="/"><button type="button" className="btn btn-info btn-sm" >Logout</button></a>
                   
                </div>
            </nav>

        );
    };
}

export default Navbartmp;