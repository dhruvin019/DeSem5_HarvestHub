import React from 'react'
import {Link} from "react-router-dom";
import Navbar from './Navbar';
import logo from './logo.jpg'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';

 
const Home = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    
    <div className='homepage'>
      <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>

       <div className='homeimg'/>

      <div className='butttonbox1'>
      <Link  to="/farmer">
                <button className='homebtn1'>Go to Farm</button>
      </Link>
      <Link  to="/trader">
                <button className='homebtn1'>Go to Market</button>
      </Link>
       </div>
      
      <div>
      <h2 className='homepagetitle1'>Why Us?</h2>     
      <p className='homepagedescription'>We offer a unique platform that bridges the gap between farmers and traders, fostering a self-sustainable farming ecosystem.</p> 
      </div>

      <div className='homepagebody1'>
        <h2 className='homepagetitle1'>Our Services</h2>
          <div className='homepagetitle2'>1. Buy Seeds & Inputs:</div>
          
          <p className='homepagedescription'>"Purchase seeds, pesticides, fertilizers, and more directly from local markets through our platform."</p>
          
          <div className='homepagetitle2'>2. Sell Crops:</div>
          
          <p className='homepagedescription'>"Sell your harvested crops to traders without any brokerage fees."</p>          
          
          <div className='homepagetitle2'>3. Crop and Seasonal Guides:</div>
          
          <p className='homepagedescription'>"Explore our comprehensive guides on what to plant and when. Maximize your yield with expert insights."</p>         
          
          <div className='homepagetitle2'>4. Farming Technology:</div> 
          
          <p className='homepagedescription'>"Stay updated with the latest farming techniques and technology to boost your productivity."</p>
          
          <div className='homepagetitle2'>5. Fertilizer Information:</div>
          
          <p className='homepagedescription'>"Find information on the right fertilizers for your crops to ensure healthy growth."</p>
      </div>

      <div className='footer'>
        
        <div className='footerlogo'> 
        <img className='logo' src={logo}/>
        <p className='logoname'>Harvest Hub</p>
        </div>
      
        <div className='f0'>
          <div className='f1'>
              <div className='f3'>
                <BsFillTelephoneFill/>
                <p>+91 8958234539</p>
              </div>
              <div className='f3'>
                <MdEmail/>
                <p>harvesthub@gmail.com</p>
              </div>
          </div>
          <div className='f2'>
          <div className='f3'>
                <FaInstagram/>
                <p>Harvest_Hub</p>
          </div>
          <div className='f3'>
                <AiOutlineFacebook/>
                <p>Harvest_Hub</p>
          </div>
          <div className='f3'>
                <FaTwitter/>
                <p>Harvest_Hub</p>
          </div>
          
          
          </div>
      </div>
        

          <div className='f4'>Copyright © 2023 HarvestHub.All rights reserved.
          </div>
      </div>
    </div>
  )
}

export default Home
