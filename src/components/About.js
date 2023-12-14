import React from 'react'
import Navbar from './Navbar'
import "../About.css"
import "../App.css"
import about from "../images/Group 8.png"
import processimg from "../images/Image (1).png"
import { IoPlayCircleOutline } from 'react-icons/io5'

function About() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
    <div className='headerabout' >
      <div className='about' >
        <h1 className='color3'>About Us</h1>
      </div>
      <div>
        <p className='color2'>WE PRIDE OURSELF ON</p>
        <h2><span className='color'>Our authentic momo recipes</span><br /> passed down through <br /> generations</h2>
      </div>
      <div className='aboutimg'>
       <img src={about} alt="aboutimg" className='abtimg' />
      </div>
      </div>
      <div>
        <img src={processimg} alt="" className='processimg' />
      </div>
      <div className='procdes'>
      <h1>Process behind the making</h1>
      <p>See how we make momos that you like from only the best ingredients</p>
      <button className='watchbtn'><IoPlayCircleOutline/>Watch the Video</button>
      </div>
    </div>
  )
}

export default About