import React from 'react'
import "./components-css/Gainweight.css"
const Gainweight = () => {
    return (
        <>
           <section className="Gainweight min-vh-100">
               <div className="container">
               <div className="row text-center mb-5">
                   <div className="col-12 py-md-5">
                  <h1>How To Gain Weight Faster In Healthy Way</h1>
                  <p className='welcome'>Most people fail, not because of lack of desire, but, because of lack of commitment</p>
                   </div>
               </div>
               <div className="row py-5 mb-lg-3 mb-lg-0">
                   <div className="col-lg-6 col-12">
                  <p><i className="bi bi-arrow-right-circle-fill pe-2 welcome"></i>Have an Extra Slice of Whole Grain Toast With Peanut Butter at Breakfast</p>
                  <p><i className="bi bi-arrow-right-circle-fill pe-2 welcome"></i>Drink Whole Milk, 100% Fruit Juice, or Vegetable Juice</p>
                  <p><i className="bi bi-arrow-right-circle-fill pe-2 welcome"></i>Add Extra Cheese to an Omelet and Use an Extra Egg</p>
                  <p><i className="bi bi-arrow-right-circle-fill pe-2 welcome"></i>Slice an Apple and Serve With Nut Butter</p>
                  <p><i className="bi bi-arrow-right-circle-fill pe-2 welcome"></i>Add Chopped Nuts, Oats, Fruit and Honey to Yogurt</p>
                  <h1 className='be-healthy my-5'>BE STRONG</h1>
                   </div>
                   <div className="col-lg-6 col-12 mx-auto px-5 gain-flex text-center">
                   <div className="gain-card">
        <div className="top">
   <img src="./images/lose12-min.jpg" alt="g"/>
        </div>
        <div className="buttom">
          <h1 className='welcome'>Ralph Waldo Emerson</h1>
    <p>"The only person you are destined to become is the person you decide to be." </p>

        </div>
    </div>
    {/* //secoud */}
    <div className="gain-card">
        <div className="top">
   <img src="./images/lose13-min.jpg" alt="g"/>
        </div>
        <div className="buttom">
          <h1>Arnold Schwarzenegger</h1>
    <p className='welcome'>“The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.”</p>

        </div>
    </div>
                   </div>
               </div>
               </div>
               </section> 
        </>
    )
}

export default Gainweight
