import React from 'react'
import Welcome from "../components/Welcome";
import Navbar from "../components/Navbar";
import Bmi from "../components/Bmi"
import Weight from "../components/Weight";
import Gainweight from "../components/Gainweight";
import Obesity from "../components/Obesity";
import Footer from "../components/Footer";
 import Healthy from '../components/Healthy';
const Home = () => {
    return (
        <div className='home'>
<Navbar/>
<Welcome/>
<Bmi/>
<Weight/>
<Gainweight/>
<Obesity/>
<Healthy/>
<Footer/>

        </div>
    )
}

export default Home
