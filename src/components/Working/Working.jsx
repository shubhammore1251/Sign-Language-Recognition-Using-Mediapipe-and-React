import React from 'react'
import "./Working.css"
import WorkingImg from "../../assests/Working.png";

const Working = () => {
  return (
    <div className='signlang_working section__padding'>
        <div className="signlang_working-img">
          <img src={WorkingImg} alt="working" />
        </div>

        <div className="signlang_working-content">
          <h1 className="gradient__text">Get to know, How it Works !</h1>
          <p>
            To use the sign language recognition system, you simply need to get your hand detected and make a sign. Once you make a sign, refer to the guide for the corresponding words. The system will then scan your hand and use its built-in model to predict the sign you have made. Finally, the predicted class will be displayed, allowing you to communicate effectively through sign language. With this system, you can bridge the communication gap between sign language users and non-sign language users, making it easier for everyone to connect and interact.
          </p>
        </div>
    </div>
  )
}

export default Working