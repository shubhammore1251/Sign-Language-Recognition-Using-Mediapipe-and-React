import React from 'react'
import "./CTA.css"
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <div className='signlang_cta'>
            <div className="signlang_cta-content">
                <h3>
                    Get Started and Try the Model
                </h3>
            </div>

            <div className="signlang_cta-button">
                <button>
                    <Link to="/detect">
                      Try Now !
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default CTA
