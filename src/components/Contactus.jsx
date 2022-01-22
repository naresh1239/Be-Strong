import React, { useState } from 'react'
import "./components-css/Contactus.css"
import "../App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contactus = () => {

    const[userdata, setuserdata] = useState({
     name : "",
     email : "",
     mobile : "",
     address : "",
     massage : "",
    })
    let name, value;
    const postdata=(event)=>{
        name =  event.target.name;
        value =  event.target.value;
        setuserdata({...userdata, [name]: value});
       };
   
       const postbtn = async()=>{
        const{name,email,mobile,address,massage} = userdata;
           if(name && email && address && massage){

        //    if(name && email && address && massage){
    const repons = await fetch('https://gym-database-38c9c-default-rtdb.firebaseio.com/savedata.json',
    {
    method : "POST",
    Headers :{
        "Content-Type" : "application/json",
    },
    body: JSON.stringify({
        name,
        email,
        mobile,
        address,
        massage,
    }
    )
}
    )
    if(repons){
        toast.success('🦄 message send', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
         setuserdata({
            name : "",
            email : "",
            mobile : "",
            address : "",
            massage : "",
         })
       }
           }else{
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
         
 
}
    return (
        <>
               <main>
                   
                       <h1 className='contanct-us-title'>Contact Us</h1>
                  <div className="squer"></div> 
                  <div className="squer2"></div> 
        <div className="center">
         <div className="all">
         <h1>Contact Us</h1>
        <form >
            <div className="input">
               <p>name</p>
                <input type="text" autoComplete="off"  placeholder="Enter your name" name='name' value={userdata.name} onChange={postdata} />
               <div className="line"></div>
            </div>
            <div className="input">
                <p>email</p>
                <input type="email" autoComplete="off" placeholder="Enter your email" name='email' value={userdata.email} onChange={postdata} />
                <div className="line"></div>
            </div>
            <div className="input">
               <p>moblie number</p>
                <input type="number" autoComplete="off"  placeholder="Enter your moblie number"  name='mobile' value={userdata.mobile} onChange={postdata}/>
                <div className="line"></div>
            </div>
            <div className="input">
               <p>address</p>
                <input type="text" autoComplete="off"  placeholder="Enter your address" name='address' value={userdata.address} onChange={postdata} />
                <div className="line"></div>
            </div>
            <div className="input larg">

             <span>massage</span>
                <textarea type="text" autoComplete="off"  placeholder="  massage" name='massage' value={userdata.massage} onChange={postdata}></textarea>
                <div className="line"></div>
            </div>
           
        </form> 
        <button className='formbtn' onClick={postbtn}>Sumbit</button>  
            <p>for any question contact our 24/7 call center +91 123 6678</p> 
         </div>
         
        </div>
    </main>  
    <ToastContainer />


        </>
    
    )
}

export default Contactus;
