import React from 'react';

import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import Herosection from '../Components/Herosection';
import Form from '../Components/Form';

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Herosection heading="CONTACT." text="Let's have a chat" />
       <Form/>
       <Footer/>
      
    </div>
  )
}

export default Contact
