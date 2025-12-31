import React from 'react';
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import Herosection from '../Components/Herosection';
import Pricingcard from '../Components/Pricingcard';
import Work from '../Components/Work';


const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Herosection heading="PROJECTS." text="Some of my most recent works" />
      <Work/>
      <Pricingcard/>
      <Footer/>
    </div>
  )
}

export default Projects
