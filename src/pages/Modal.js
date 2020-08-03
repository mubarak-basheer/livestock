import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import img from '../images/home/vedio.mp4';
import Navbartmp from '../components/Navbartmp';
const Modal = () => {
  return(
    <>
    <Navbartmp/>
    <Hero hero = "defaultHero">
     <div className="table-bg">
       <div className="vedio-div">
       <h3>Vedio Title</h3>
      <video width="900px" height="450px" controls>
        <source src={img} type="video/mp4"/>
      </video>
      </div>  
      <a href = "/camera-view"> <button type="submit" className="btn btn-primary btn-block btn-sm">Close</button></a> 
    </div>
    
    </Hero>
    </>
  );

}
export default Modal;
