import React from 'react'
import Navbar from './Navbar'
import "../App.css"
import serviceimg from "../images/Group 8 (1).png"
import dineus from "../images/Image (5).png"
import "../Service.css"
import { IoPlayCircleOutline } from 'react-icons/io5'
import party from '../images/party.png'
import vectorqr from "../images/Vector.png"
import image6 from '../images/Image (6).png'
import catering from '../images/Chef.png'
import Footer from './Footer'

function Service() {
  return (
    <div>
        <div>
          <Navbar/>
        </div>
      <div className="service-header">
        <div className="ser-vice">
          <h1 className='color3'>Our Services</h1>
        </div>
        <div className='novatext'>
          <p className='color2'>KNOWING OUR CUSTOMERS NEEDS</p>
          <h2><span className='color'>We're more than just momos.</span><br />
              We're a full-service dining experience.</h2>       
        </div>  
      </div>
      <div>
        <img src={serviceimg} alt="" className="serviceimg" />
      </div>
      <div>
        <img src={dineus} alt="" className='dineus' />
      </div>
      <div className='dineheader'>
      <div>
        <h2>Dine With Us</h2>
        <p>Enjoy our momos in the comfort of your own home with our delivery services</p>
      </div><br />
      <div>
        <button className='watchbtn' ><IoPlayCircleOutline/> Watch the video</button>
      </div>
      </div>
      <div className='privateparty'>
         <div className='privparty'>
          <img src={party} alt="" />
          <h2>Private Party</h2>
          <p className='color2'>Lorem ipsum dolor sit amet consectetur. Lectus faucibus <br /> lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus <br /> viverra tincidunt.</p>
          </div>
        <div className='qrscanner'>
           <div>
            <h2 className='color3'>Scan the QR code</h2>
            <p className='color2'>You can also check about the service</p>
           </div>
          <div>
           <img src={vectorqr} alt="" />
          </div>
        </div>
      </div>
      <div className='image6'>
        <img src={image6} alt="" className='img6' />
      </div>
      <div className='cater'>
      <div className='image7'>
        <img src={image6} alt="" className='img6' />
      </div>
      <div className='categring'>
         <div className='categ'>
          <img src={catering} alt="" />
          <h2>Categring</h2>
          <p className='color2'>Lorem ipsum dolor sit amet consectetur. Lectus faucibus <br /> lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus <br /> viverra tincidunt.</p>
          </div>
        <div className='qrscanner'>
           <div>
            <h2 className='color3'>Scan the QR code</h2>
            <p className='color2'>You can also check about the service</p>
           </div>
          <div>
           <img src={vectorqr} alt="" />
          </div>
        </div>
      </div>
      </div>
      <div className='query'>
        <h2>Got Any Queries?</h2>
        <p className='color2'>If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
        <button className='watchbtn'>Get in Touch</button>
      </div><br />
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Service