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
                <Link to="/">
            <img src={logo} alt="logo" className="logo"  />
            </Link>
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
            <Link to="https://www.facebook.com/nelson.adhikari.7">
            <FaFacebook className="navlink-btn"/>
            </Link>
            <FaTiktok  className="navlink-btn"/>
            <Link to="https://www.instagram.com/nelsonadhikari/">
            <FaInstagramSquare className="navlink-btn"/>
            </Link>
            <Link to="/contact">
            <button className="contactbtn">Contact Us</button>
            </Link>
            </ol>
        </nav>
    </div>
  )
}

export default Navbar