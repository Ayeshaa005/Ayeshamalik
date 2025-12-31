import './Aboutcontent.css';
import {Link} from 'react-router-dom';
import React from 'react';
import Reac1 from '../assets/react1.jpg';
import React2 from '../assets/react2.webp';
const Aboutcontent = () => {
  return (
    <div className='About'>

        <div className='left'>

            <h1>Who Am I?</h1>
            <p>Hi, I’m <strong>Ayesha Malik</strong> a React developer focused on responsive and modern web interfaces.</p>

            <Link to="/contact">
            <button className='btn'>CONTACT</button>
            </Link>

        </div>

        <div className='right'>

            <div className='img-container'>

                <div className='img-stack top'>

                    <img className='img' src={Reac1} alt="react project"/>

                </div>


                <div className='img-stack bottom'>

                    <img className='img' src={React2} alt="react project"/>

                </div>



            </div>

        </div>
      
    </div>
  )
}

export default Aboutcontent
