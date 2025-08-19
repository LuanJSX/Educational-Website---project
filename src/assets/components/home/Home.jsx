import React from 'react'
import Hero from "./hero/Hero";
import AboutCard from '../about/AboutCard';
import HAbout from './hero/HAbout';
import Test from './testiomonal/Test';
import Hblog from './testiomonal/Hblog';
import Hprince from './testiomonal/Hprince';

function Home() {
  return (
    <div>
      <Hero/> 
      <AboutCard/> 
      <HAbout/>
      <Test/>
      <Hblog/>
      <Hprince/>
    </div>
  )
}

export default Home