import React from 'react'
import logo from "../images/Logo.png"
import "../App.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <>
   <div className='footerheader'>
   <div>
    <img src={logo} alt="momo" /><br />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Nulla, recusandae sed. Incidunt corporis, voluptas officiis <br/> assumenda reiciendis autem nulla similique.</p>
   </div>

   <div className='footermomo'>
    <h3><b className='color3'>momos</b></h3>
    <p>About Us</p>
    <p>Our Menu</p>
    <p>Our Services</p>
    <p>Contact Us</p>
   </div>
   <div>
   <h3><b className='color3'>Legals</b></h3>
    <p>Terms & Conditions</p>
    <p>Privacy Policy</p>
    <p>Support</p>
   </div>
   <div className='footermedia'>
   <h3><b className='color3'>Follow Us</b></h3><br />
   <FaFacebook/>
   <FaLinkedin/>
   <FaTwitter/>
   <br />
   <FaYoutube/>
   <FaInstagram/>
   <FaTiktok/>
   </div>
   </div>
  <div className='copyright'>
    <p>Copyright ©️2023 Everest Momo Pvt Ltd. All Rights Reserved.</p>
  </div>
   </>
   
  )
}

export default Footer