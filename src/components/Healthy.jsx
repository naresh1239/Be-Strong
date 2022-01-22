import React from 'react'
import { Link } from 'react-router-dom';
 import "./components-css/Healthy.css"
 import hel from "../images/n1-min.jpg"
const Healthy = () => {
    return (
        <>
            <section className="healthy-section">
                <div className="container">
                    <div className="row">
                        <div className=" col-12 text-center  ">
                            <h1>How do I start being healthier?</h1>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-lg-6 col-12 body pb-md-0 pb-5">
                        <div className="cards">
        <div className="ditalis">
            <h1>Iron Man</h1>
            <p className=' fs-4 '>Make your Week chaleage here just click on this button </p>
            <Link className="nav-link" to="/Contact"><button className="btn">click</button></Link>
            <h3 >thanks for using our link <br/>
            may you have a good day</h3>
        </div>

        <div className="div-img">
        <img className='img-fluid' src={hel} alt='d'/>
        </div>

    </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <p><i className="bi bi-arrow-right-circle-fill pe-2 welcome" />1. Drink more water. Most of us don’t drink enough water every day, but it is essential for our bodies to work properly. Water is absolutely necessary for carrying out our bodily functions, removing waste, and transporting nutrients and oxygen throughout our bodies</p>
                            <p><i className="bi bi-arrow-right-circle-fill pe-2 welcome" />2. Get enough sleep. When you don’t sleep, You tend to eat more. Usually only junk food.</p>
                            <p><i className="bi bi-arrow-right-circle-fill pe-2 welcome" />3. Exercise. Not just a few times a week, but every day. By moving your body in some way for 30 minutes a day, you will lower your risk of disease, create higher bone density and potentially increase your life span.</p>
                            <p><i className="bi bi-arrow-right-circle-fill pe-2 welcome" />4. Eat more fruits and vegetables. All fruits and vegetables carry vitamins and minerals, components essential to your health. It’s suggested that we consume 5 servings of fruits and vegetables per day to maintain health.</p>
                            <p><i className="bi bi-arrow-right-circle-fill pe-2 welcome" />5. Avoid negative people in your life. A positive mentality is key for a healthy life. You don’t need negativity in your life. If you feel that a person or friend is negative, just let him or her go.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Healthy
