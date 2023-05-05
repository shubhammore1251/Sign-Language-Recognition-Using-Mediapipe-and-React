import React from 'react'
import "./Header.css"
import SignHand from "../../assests/SignHand.png";

const Header = () => {
  return (
    <div className="signlang__header section__padding gradient__bg" id="home">

    <div className="signlang__header-content">
      <h1 className="gradient__text">Increase your Cognitive Brain Power with SLR.</h1>
      <p>
      It has been proven in studies that learning sign language keeps you on your feet as you age and also increase your thinking power.Also learning sign language will help you communicate with 72  Million Speakers worldwide. So Test out our tool, Learn and Practice Sign Language and Have Fun
      </p>

    </div>
    <div className="signlang__header-image">
      <img src={SignHand} alt='SIGN-HAND'/>
    </div>
  </div>
  )
}

export default Header