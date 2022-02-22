import React, { useState } from 'react'
import logo from '../images/logo.png'
import tiketlogo from '../images/icon/ticket.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
  // const [showSingIn, setShowSingIn] = useState(true)
  // const authorised = window.localStorage.getItem('Authorised')
  // if (authorised) {
  //   setShowSingIn(false)
  // }
    return (
        <>
<nav className="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
  <div className="container-fluid p-0">
    {/* logo */}
    <a className="navbar-brand" href="index.html">
      <img src={logo} alt="logo" width="120px" height="50px"/>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
  
      <ul className="navbar-nav mx-auto">
     
      <li className="nav-item">< NavLink to="/" className="nav-link"> Home<span>/</span></NavLink></li>

        <li className="nav-item"><NavLink to="/about" className="nav-link" >About<span>/</span></NavLink></li>
       
        
        <li className="nav-item dropdown dropdown-slide">
          <a className="nav-link" href="#" data-toggle="dropdown">Pages<span>/</span></a>
          {/* Dropdown list */}
          <div className="dropdown-menu">
            <a className="dropdown-item" href="about-us.html">About Us</a>
            <a className="dropdown-item" href="single-speaker.html">Single Speaker</a>
            <a className="dropdown-item" href="gallery.html">Gallery</a>
            <a className="dropdown-item" href="gallery-two.html">Gallery-02</a>
            <a className="dropdown-item" href="testimonial.html">Testimonial</a>
            <a className="dropdown-item" href="pricing.html">Pricing</a>
            <a className="dropdown-item" href="FAQ.html">FAQ</a>
            <a className="dropdown-item" href="404.html">404</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="schedule.html">Schedule<span>/</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="sponsors.html">Sponsors<span>/</span></a>
        </li>
        <li className="nav-item dropdown dropdown-slide">
          <a className="nav-link" href="#" data-toggle="dropdown">News
            <span>/</span>
          </a>
          {/* Dropdown list */}
          <div className="dropdown-menu">
            <a className="dropdown-item" href="news.html">News without sidebar</a>
            <a className="dropdown-item" href="news-right-sidebar.html">News with right sidebar</a>
            <a className="dropdown-item" href="news-left-sidebar.html">News with left sidebar</a>
            <a className="dropdown-item" href="news-single.html">News Single</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>
     
      {true ?<div className="subscribe-button">
  <NavLink className="btn btn-main-md" to="/login">Sign In</NavLink>
</div>: <div className="subscribe-button">
  <NavLink className="btn btn-main-md" to="/login">Sign Out</NavLink>
</div>}

    </div>
  </div>
</nav>

        </>
    )
}
