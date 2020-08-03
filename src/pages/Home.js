import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Hero from '../components/Hero';
import Navbartmp from '../components/Navbartmp';



import img1 from '../images/home/mylivestock.png';
import img2 from '../images/home/cameraview.png';
import img3 from '../images/home/agriculture.png';
import img4 from '../images/home/wastemanagement.png';
import img5 from '../images/home/accinv.png';
import img6 from '../images/home/sellmyfarm.png';


const Home = () => {
  return (
<>
<Navbartmp/>
    <Hero hero="defaultHero">
      
      <div className="img-wrapper">
        <div className="img-area">
          <a href="/my-livestock"><div className="single-img"><img src={img1} /></div></a>
          <a href="/camera-view"><div className="single-img"><img src={img2} /></div></a>
          <a href="/agriculture"><div className="single-img"><img src={img3} /></div></a>
          <a href="/waste-management"><div className="single-img"><img src={img4} /></div></a>
          <a href="/accounts-inventory"><div className="single-img"><img src={img5} /></div></a>
          <a href="/sell-farm"><div className="single-img"><img src={img6} /></div></a>
        </div>
      </div>
     

    </Hero>
</>

  )

}

export default Home;