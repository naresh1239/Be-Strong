import React from "react";
import { Routes, Route,r, Navigate } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home"

  import About from "./pages/About";
  import Contact from "./pages/Contact";
  import Challenge from "./pages/Challenge";


function App() {
  return (
    
    <>
 
        <Routes>
        {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Challenge" element={<Challenge />}></Route>
         </Routes>
    </>
  );
}

export default App;
