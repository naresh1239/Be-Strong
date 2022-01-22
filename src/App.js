import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home"

  import About from "./pages/About";
  import Contact from "./pages/Contact";
  import Challenge from "./pages/Challenge";
  import Error from "./pages/Error"

function App() {
  return (
    
    <>
 
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Challenge" element={<Challenge />}></Route>
        <Route path="*" element={<Error />}></Route>
         </Routes>
    </>
  );
}

export default App;
