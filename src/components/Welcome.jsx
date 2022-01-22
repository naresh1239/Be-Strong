import React from 'react'
import welcomeimg from "..//images/9-min.jpg";
function Welcome() {
    return (
        <>
      
<section className="main">
  <div className="container">
  <div className=" row min-vh-80 justify-content-center align-items-start">
  <div className="col-lg-6 col-12 my-5 py-5   right-side pe-5">

<div className="d-flex align-items-end">
<h6 className='welcome pe-3'>Welcome To The Club  </h6>
<div className='span'></div>
</div>
     <h1  className="text-capitalize fw-bold fs-1">Get A Perfect <span>Body</span> figure</h1>
     <p className="text-muted">Let's face it: Getting yourself motivated to hit the gym isn't always easy. As much as you know you need to prioritize your health and fitness goals, sometimes you need a little extra push to get started on (or finish up) your latest home workout — which, of course, is where these motivational workout quotes come in.</p>
   <h1 className='be-healthy'>BE HEALTHY</h1>
  
    </div>
    <div className="col-lg-6 col-12 text-center left-side">
    <h1 className='be-stong'>BE STRONG</h1>
      <img src={welcomeimg} className="img-fluid shadow-lg bg-img min-vh-100" alt="gg" />
</div>
    </div>
  </div>
</section>
        </>
    )
}

export default Welcome
