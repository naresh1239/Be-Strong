import React from 'react'
import "./components-css/Footer.css"
const Footer = () => {
    return (
        <>
         <footer>
             <div className="container">
                 <div className="row d-flex align-items-start py-5 footer text-white">
                     <div className="col-lg-4 col-md-4 col-6">
                     <h1 className='be-healthy fs-3 footer'>BE HEALTHY</h1>
                     <p>Your Health care service</p>
                     </div>
                     <div className="col-lg-2 col-md-4 col-6">
                         <p>PRE SALE FADS</p>
                        <p>SUBMIT A TIKET</p>
                        <p>BODY CARE</p>
                     </div>
                     <div className="col-lg-2 col-md-4 col-6">
                         <p>SERVICES</p>
                         <p>BRANDING</p>
                         <p>WEBSITE BUILD</p>
                     </div>
                     <div className="col-lg-2 col-md-6 col-6">
                         <p>SUPPORT REQUEST</p>
                         <p>CONTACT</p>
                         
                     </div>
                     <div className="col-lg-2 col-md-6 col-6">
                         <p>ABOUT US</p>
                         <p>WEB APP</p>
                            <p>FACEBOOK</p>
                     </div>
                 </div>
                 <div className="row">
                     <hr  className='text-white'  />
                 </div>
                 <div className="row text-center">
                     <ul className='d-flex text-center ul py-5'>
                         <li className='li'><i className="bi bi-facebook"></i></li>
                         <li className='li'><i className="bi bi-meta"></i></li>
                         <li className='li'><i className="bi bi-twitter"></i></li>
                         <li className='li'><i className="bi bi-instagram"></i></li>
                         <li className='li'><i className="bi bi-wifi"></i></li>
                     </ul>
                 </div>
                 <div className="row text-center">
                     <p  className="text-muted">@Copyright. All rights reserved</p>
                 </div>
             </div>
             </footer>   
        </>
    )
}

export default Footer
