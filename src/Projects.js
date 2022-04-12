import React from 'react';
import HerosectionBanner from './Herosectionimage.png'
import "./Projects.css";
import Frame from "./Frame2.png"
import { ImWhatsapp } from 'react-icons/im';
import { GrLinkedin } from 'react-icons/gr';
import { SiMedium } from 'react-icons/si';
import {ImBehance} from 'react-icons/im';
import Cashiet from "./Cashiet-Banner.png"
import {Link} from "react-router-dom"

function Projects() {
  return (

    
    <div className='projects ' id='projects'>


            <div className='hero ' id='hero'>

                <div className='content'>
                  <h1>Hello! I am <span>Chisom,</span></h1> 
                  <p>I help teams create simple and 
                    accessible digital experiences and product that translate business <br></br> objectives into solutions.
                  </p>
                </div>

            </div>
  
            <div className='project-contact'>

        <div className='project-container'>
            
            <div className='content'>
                <h3>Selected Projects</h3>
                <p>Case Studies</p>
            </div>
           

            
              <div className='project-row'>

                <div className='case'>
                    <p className='progressive'>PROGRESSIVE WEB APP</p>
                    <h3>Cashiet Website Redesign</h3>
                    <p className='cashiet'>Cashiet is a marketplace that let Nigerians buy products and pay in installments at a zero interest.</p>
                    <Link to='/cashietcasestudy'className='readmore'> Read Case Study</Link>   
                 </div>

                 <div className='case-image'>
                  <img className='frame' src={Frame} alt="cashietbanner"/>
                </div>

             </div>

             <div className='project-row project-rows'>

             <div className='casee-image'>
                  <img src={Cashiet} className='cashiet' alt="cashietbanner"/>
              </div>

                <div className='case'>
                    <p className='progressive'>PROGRESSIVE WEB APP</p>
                    <h3>Glocally Web App Design</h3>
                    <p className='cashiet'>Glocally is a Web App that enables retail shops to achieve same-day delivery.</p>
                    <a href='' className='readmore'> Read Case Study</a>   
                </div>
              </div>
          
        </div>


        <div className='contact' id='contact'>

        <div className='contact-container'>
                <p className='h3'>This doesn't have to end here</p>
                <p className='work'>If you'd like to work together or make any further enquiries  </p>
                <p>or just looking to connect. Get in Touch</p>

                <div className='contact-details'>

                    <button><a href="mailto:ifeanyichisomjane@gmail.com">ifeanyichisomjane@gmail.com</a></button>

                 </div>
          </div>

         </div>

         </div>
    </div>
  )
}

export default Projects