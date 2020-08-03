import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';


const Rooms = () => {
  return(
    <Hero hero = "defaultHero">
      <Banner title = 'Our Rooms' subtitle = ''>
        <Link  to = '/home' className = 'btn-primary'>Return Home</Link>
      </Banner>
    </Hero>
  )

}

export default Rooms;