import React from 'react'
import "./components-css/Aboutus.css"
const Aboutus = () => {
    return (
        <>
            <section className='aboutus'>
               <div className="container">
                   <div className="row mt-5 py-5 text-center">
                       <h1 className='about'>About Us</h1>
                       <h4>Who we are</h4>
                   </div>
                   {/* //first  */}
                   <div className="row">
                       <div className="col-lg-6 col-12 box-div">
                   <h1>Why this website is here ?</h1>
                   <p>So i have made this website for them who want to be fit or they trying to find best web that give them a perfect knowledge about fitness 
                       if you want to cheak you BMI you can cheak here also find the stuff about fitness and how to gainweight or be fit by simple steps at home 
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odio ipsum illo voluptas consectetur magni. Qui fugiat sint asperiores ullam rerum eius in atque nostrum quibusdam inventore, praesentium quia aliquid.
                   </p>
                       </div>
                       <div className="col-lg-6 col-12 box-div2">
                           
                           </div>
                   </div>
                   {/* //secon */}
                   <div className="row">
                       <div className="col-lg-6 col-12 box-div2">

                       </div>
                       <div className="col-lg-6 col-12 box-div ">
                           <iframe width="100%" height="315" src="https://www.youtube.com/embed/1c9f69mWjLk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                           </div>
                   </div>
                 
              </div> 
            </section>
        </>
    )
}

export default Aboutus
