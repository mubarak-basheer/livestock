import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Service from '../components/Services';
import Navbar from '../components/Navbar';

const Index = () => {
  return(
    <>
    <Navbar/>
   <Hero hero = "defaultHero">
      <Banner title = 'Live Stocks' subtitle = 'An integrated farm with IOT enabled services.'>
        <Link  to = '/rooms' className = 'btn-primary'>Our Live stocks</Link>
      </Banner>
   </Hero>
   <Service/>
   </>
  )

}

export default Index;