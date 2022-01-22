import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./components-css/Bmi.css"
function Bmi() {
 const [height, setheight] = useState();
 const [weight, setweight] = useState("");
 const [value, setvaluee] = useState();
 const [tips, settips] = useState();

 const getbmi = () =>{
     if(weight == ""){
        toast.error('🦄 Plz enter something!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });  
     }
     else{
  let heights =  height * 12;
  let newheights = heights * 0.025;
     
    let bmi = weight / (Math.pow(newheights,2));
    let newbmi = Math.round(bmi);

    setvaluee(newbmi)
    setheight("")
    setweight("")
    console.log()
    if(newbmi <= 18.5){
        settips("your are underweight")
        toast.success('🦄 you are underweight plz read 2th section', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }else if(newbmi >= 18.5 && newbmi <=24.9){
        toast.success('🦄 you have perfect body plz read 4th section', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        settips("wow you are perfect ")
    }else if(newbmi >=25 && newbmi <=29.9){
        toast.success('🦄 you are overweight plz read next section', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        settips("You are overweight please read our next article")
    }else{
        toast.warning('🦄 plz read 3th section' , {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        settips("indicates obesity.")
    }
}
 }
 
    return (
        <>
     <div className="porpur-section pb-5">
         <div className="container">
             <div className="row">
                 <div className=" col-12 text-center py-5 ">
                     <h1>Calculate Your BMI Here </h1>
                     <p>What is BMI - BMI "BODY INDEX MASS"</p>
                 </div>
             </div>
             <div className="row">
                 <div className="col-lg-6 col-12 py-5 py-md-0">
              <div className="inputbox mx-auto">
                  <div className="input d-flex flex-column py-2">
                      <label>Enter Height In Feets </label>
                      <input type="number" placeholder='Enter Your Height' value={height} onChange={e => setheight(e.target.value)}  name='height' required className='my-2' id='height' />
                  </div>
                  <div className="input d-flex flex-column py-2">
                      <label>Enter Weight In kg </label>
                      <input type="number" placeholder='Enter Your Weight' value={weight} onChange={e => setweight(e.target.value)} name='weight' required id='weight' className='my-2'/>
                  </div>
                    <div><h5 className='text-white ms-2'>Here is your BMI its :  {value}</h5></div>
                  <button className='my-2 py-2' onClick={getbmi}>GET IT</button>
                  <div><h5 className='text-white'>{tips}</h5></div>
              </div>
   
               </div>
               <div className="col-lg-6 col-12">
               <h5 className='hadding fs-3'>What exactly is BMI?</h5>
                     <p>Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters. A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.</p>
                    <div className="d-flex align-items-center"><span className='dot '></span><h6 className='ps-3'>A BMI of less than 18.5 means a person is underweight.</h6></div>
                    <div className="d-flex align-items-center"><span className='dot '></span><h6 className='ps-3'> A BMI of between 18.5 and 24.9 is ideal.</h6></div>
                    <div className="d-flex align-items-center"><span className='dot '></span><h6 className='ps-3'> A BMI of between 25 and 29.9 is overweight.</h6></div>
                    <div className="d-flex align-items-center"><span className='dot '></span><h6 className='ps-3'> A BMI over 30 indicates obesity.</h6></div>
                    <div className="d-flex align-items-center"><h6 className='welcome'>( Note please add dot  between the numbers of <br/>your height like "5.5" )</h6></div>
               </div>
             </div>
         </div>
     </div>
     <ToastContainer />
        </>
    )
}

export default Bmi
