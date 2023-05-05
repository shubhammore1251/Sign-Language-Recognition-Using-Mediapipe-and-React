import React from 'react'
import "./NotFound.css"
import NotFoundImg from "../../assests/404.svg"

const NotFound = () => {
  return (
    <div className='signlang_notfound-container'>
        <div className="signlang_notfound-img">
            <img src={NotFoundImg} alt="not-found"/>
        </div>

        <div className="signlang_notfound-data">
            <p className='gradient__text'>This Page Doesn't exists. Please Click on below button to go back to SLR</p>
            
            <button>
                <a href="/">
                    Go Back
                </a>
            </button>
        </div>
    </div>
  )
}

export default NotFound