import React from 'react';
import Section from './Section';
import "./home.css";

const Model3 = require('../assets/model-3.jpg');
const Modely = require('../assets/model-y.jpg');
const Models = require('../assets/model-s.jpg');
const Modelx = require('../assets/model-x.jpg');
const Solar_Panel = require('../assets/solar-panel.jpg');
const Solar_Roof = require('../assets/solar-roof.jpg');
const Accessories = require('../assets/accessories.jpg');


function Home() {
  return (
    <div className='home_container' id='homeid'>

        <Section 
            title="Model 3"
            descripition="Order Online for Touchless Delivery"
            backgroundImg={Model3}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model Y"
            descripition="Order Online for Touchless Delivery"
            backgroundImg={Modely}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model S"
            descripition="Order Online for Touchless Delivery"
            backgroundImg={Models}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model x"
            descripition="Order Online for Touchless Delivery"
            backgroundImg={Modelx}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Lowest Cost Solar Panels in America"
            descripition="Money-back guarantee"
            backgroundImg={Solar_Panel}
            leftBtnText="Order Now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Solar For New Roofs"
            descripition="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg={Solar_Roof}
            leftBtnText="Order Now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Accessories"
            descripition=""
            backgroundImg={Accessories}
            leftBtnText="Shop Now"
            // rightBtnText="Learn more"
        />
    </div>
  )
}

export default Home