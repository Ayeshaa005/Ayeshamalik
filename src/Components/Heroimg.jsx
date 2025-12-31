import React from 'react';
import './Heroimg.css';
import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className='hero'>

        <div className='mask'>

            <img className='into-img' src={IntroImg} alt={"IntoImg "}/>

        </div>

        <div className='content'>

            <p>HI, I'M A FREELANCER</p>
            <h1>React Developer</h1>

            <div className="btn-container">
    <Link to='/project' className='btn'>PROJECTS</Link>
    <Link to='/contact' className='btn btn-light'>CONTACT</Link>
</div>


        </div>
      
    </div>
  )
}

export default Heroimg
