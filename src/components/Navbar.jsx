import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
const [show, setshow] = useState()


window.addEventListener("scroll", ()=>{
  if(window.scrollY > 50){
    setshow("sticky")
  }else{
    setshow("")
  }
})
    return (
        <>
    <nav className={`navbar fixed-top navbar-expand-lg navbar-light ${show} `} >
  <div className="container">
    <NavLink className="navbar-brand" to="/">Be Strong</NavLink>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto me-5">
        <li className="nav-item px-3">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item px-3">
        <NavLink className="nav-link " to="/Challenge">Challenge</NavLink>
        </li>
        <li className="nav-item px-3">
        <NavLink className="nav-link " to="/Contact">Contact us</NavLink>
        </li>
        <li className="nav-item px-3">
        <NavLink className="nav-link " to="/About">About us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
       
      {/* side icons navbar  */}
      <div className="side-nav" id='side-nav' >
  
          <a className='youtube' href='https://www.youtube.com/' target="_blank" rel="noreferrer"><ion-icon name="logo-youtube"></ion-icon></a>
          <a href='https://www.instagram.com/p/CXsmx_Fr0tN/?utm_source=ig_web_copy_link' target="_blank" rel="noreferrer"><ion-icon name="people-outline"></ion-icon></a>
          <a href='https://www.instagram.com/' target="_blank" rel="noreferrer"><ion-icon name="logo-instagram" ></ion-icon></a>
          <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><ion-icon name="logo-facebook" ></ion-icon></a>
          <a href=""><ion-icon name="mail-outline"></ion-icon></a>
       
      </div>
      {/* for mobile only navbar */}
      <div className="buttom-nav">
      <NavLink className="nav-link" to="/"><i className="bi bi-house"></i></NavLink>
      <NavLink className="nav-link" to="/Challenge"><i className="bi bi-pen"></i></NavLink>
      <NavLink className="nav-link" to="/Contact"><i className="bi bi-file-earmark-person"></i></NavLink>
      <NavLink className="nav-link" to="/About"><i className="bi bi-person-lines-fill"></i></NavLink>
    
      </div>
        </>
    )
}

export default Navbar
