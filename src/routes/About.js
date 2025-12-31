import React from 'react'

import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import Herosection from '../Components/Herosection';
import Aboutcontent from '../Components/Aboutcontent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Herosection heading="About." text="Im a friendly Front-End Developer" />
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default About
