import React from 'react'

const Obesity = () => {
    return (
        <>
            <section className="obesity-section mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center pb-5 mb-5 ">
                            <h1>How to Prevent Obesity</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h2 className='welcome'>What’s the difference between being overweight and being obese?</h2>
                        <p>Both terms mean that you have excess body fat, but they are two different levels of a similar thing. Being overweight means that you have some extra fat. Although you are higher than your goal weight, you don’t have as much body fat as the next level — obesity. When you have high levels of body fat, it’s considered obesity.This is typically determined by your primary care physician during an appointment. Talk to your physician about the differences between being overweight and obese and what that means for your body type.</p>
                        <h3 className='welcome'>Why does obesity happen?</h3>
                        <p >Obesity happens when your calorie intake is higher than the amount of energy you burn off each day. Think of the food you eat as fuel. This fuel is meant to power you and as you move throughout your day, you burn off this fuel. However, if you take in too much fuel, it isn’t burned off. This just sits in your body, not serving its purpose.</p>
                        </div>
                        <div className="col-lg-6 o col-12 position-relative">
                          <div className="img-section o-img text-center">
                               <img src="./images/o2-min.jpg" className='img-fluid' alt="h" /> 
                             
                           </div> 
                         </div>
                    </div>
                    <div className="row text-center py-2">
                        <div className="col-12">
<h1 className='welcome'>Eat a healthy diet</h1>
<p>People become obese usually because they eat more calories than they burn. The excess energy is stored as fat. The recommended calorie intake for men is 2,500 and for women is 2,000 each day. High calorie foods include those high in sugar and fats. If you are able to eat a healthy, nutritionally balanced diet, it is easier to keep your calorie intake within a range that keeps you at a healthy weight and obesity free. By eating healthy meals at regular intervals, you are also less likely to succumb to food cravings that can lead to snacking.

</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Obesity
