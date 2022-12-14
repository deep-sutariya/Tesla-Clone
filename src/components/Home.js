import React from 'react';
import Section from './Section';
import "./home.css";


function Home() {
  return (
    <div className='home_container' id='homeid'>

        <Section 
            title="Model 3"
            descripition="Order Online for Touchless Delivery"
            backgroundImg={`${process.env.PUBLIC_URL}/images/model-3.jpg`}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model Y"
            descripition="Order Online for Touchless Delivery"
            backgroundImg={`${process.env.PUBLIC_URL}/images/model-y.jpg`}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model S"
            descripition="Order Online for Touchless Delivery"
            backgroundImg={`${process.env.PUBLIC_URL}/images/model-s.jpg`}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model x"
            descripition="Order Online for Touchless Delivery"
            backgroundImg={`${process.env.PUBLIC_URL}/images/model-x.jpg`}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Lowest Cost Solar Panels in America"
            descripition="Money-back guarantee"
            backgroundImg={`${process.env.PUBLIC_URL}/images/solar-panel.jpg`}
            leftBtnText="Order Now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Solar For New Roofs"
            descripition="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg={`${process.env.PUBLIC_URL}/images/solar-roof.jpg`}
            leftBtnText="Order Now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Accessories"
            descripition=""
            backgroundImg={`${process.env.PUBLIC_URL}/images/accessories.jpg`}
            leftBtnText="Shop Now"
            // rightBtnText="Learn more"
        />
    </div>
  )
}

export default Home