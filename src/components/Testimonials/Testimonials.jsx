import React from 'react'
import "./Testimonials.css"
import { userFeedback } from '../../data/FeedbackData'
import Card from './Card/Card'

const Testimonials = () => {
    return (
        <div className='signlang_testimonials-container section__padding'>
            <div className="signlang_testimonial-header">
                <h2 className='gradient__text'>Here are the Feedback given by the users and domain experts
                </h2>
            </div>

            <div className="signlang_card-container">
               {userFeedback.map((data,i)=>(
                  <Card title={data.title} text={data.text} tag={data.tag} key={i*991}/>
               ))}
            </div>
        </div>
    )
}

export default Testimonials