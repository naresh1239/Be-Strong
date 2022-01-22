import React from 'react'
import "./components-css/Errorpage.css"
import { NavLink } from 'react-router-dom'
const Errorpage = () => {
    return (
        <>
          <div className="section-error">
              <div className="container">
                <div className='row'>
                    <div className="col-12 ">
                        <h1>404</h1>
                        
                    </div>
                    <div className="row">
                        <div className="col-12 error">
                        <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
                       <p>THE PAGE YOUR ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
                    <NavLink to="/"><button>GO BACK TO HOMEPAGE</button></NavLink>
                        </div>
                    </div>
                </div>
                
              </div>        
          </div>  
        </>
    )
}

export default Errorpage
