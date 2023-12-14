import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import logo from "../images/Logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Navbar() {
  return (
    <div>
        <nav>
            <ol style={{listStyle:'none',display:'flex',justifyContent:'space-evenly' }} >
            <img src={logo} alt="logo" className="logo" />
            <li>
               <Link className="navlink-style" to="/about">About Us</Link>
            </li>
            <li>
                <Link className="navlink-style" to="/menu">Our Menu</Link>
            </li>
            <li>
                <Link className="navlink-style" to="/service">Our Services</Link>
            </li>
            <li>
                <Link className="navlink-style" to="/advice">Allergy Advice</Link>
            </li>
            <FaFacebook className="navlink-btn"  />
            <FaTiktok  className="navlink-btn"/>
            <FaInstagramSquare className="navlink-btn"/>
            <button className="contactbtn">Contact Us</button>
            </ol>
        </nav>
    </div>
  )
}

export default Navbar