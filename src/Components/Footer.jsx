import React from 'react';
import './Footer.css';
import {FaGit, FaGithub, FaHome} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';
import { FaLinkedin, FaUpwork } from 'react-icons/fa6';






const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-container'>

            <div className='left'>

                <div className='location'>
                    <FaHome size={20} style={{color:"#fff","marginRight":"2rem"}}/>

                    <div>
                        <p>Wapda Colony,Opposite Trade Center</p>
                        <p>Bahawalpur</p>
                    </div>



                </div>



                <div className='phone'>
<h4>
    <FaPhone size={20} style={{color:"#fff","marginRight":"2rem"}}/>

0305-1171755
</h4>

                </div>



                <div className='email'>
<h4>
    <FaMailBulk size={20} style={{color:"#fff","marginRight":"2rem"}}/>

ayeshamak8585@gmail.com
</h4>

                </div>






            </div>



            <div className='right'>

                <h4>About the company</h4>
                <p>I worked in Qutham Technologies as a Frontend Raact developer and develope responsive web applocation
                    using React.js,Next.js,Typescript.Integrated REST APIs and OpenAI API for AI-powered features
                </p>

<div className='social'>


    
                

    <a href='https://www.linkedin.com/in/ayeshamalik123/'><FaLinkedin className='icon linkedin' size={30}/></a>
    <a href='https://www.upwork.com/freelancers/~0181edf40f5eeccd48'><FaUpwork className='icon upwork' size={30}/></a>
    <a href='https://github.com/Ayeshaa005'><FaGithub className='icon github' size={30}/></a>




                




</div>


            </div>

        </div>
      
    </div>
  )
}

export default Footer
