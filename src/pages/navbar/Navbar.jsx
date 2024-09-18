// import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'

function Navbar() {
  return (

    <>
    <nav class="navbar pt-5 navbar-expand-lg ">
        <div class="container  ">


          <a class=" text-white navbar-brand logo" href="#"><img src={logo} alt="" className='' style={{width:80}} /></a>
          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-dark" id="navbarSupportedContent">
            <ul class="navbar-nav ml-5 fw-bold ms-auto mb-2 mb-lg-0">
              <li class="nav-item my-2 mx-5">
                <a class=" text-dark nav-link " aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item my-2 mx-5">
                <a class=" text-dark nav-link" href="#">Shop</a>
              </li>
              <li class="nav-item my-2 mx-5">
                <a class=" text-dark nav-link" href="#">Cart</a>
              </li>
              <a href="#">
              <button class="button-86" role="button">Login</button>
              </a>
              
            </ul>

        
          </div>
        </div>
      </nav>
  </>
  )
    
  
}

export default Navbar