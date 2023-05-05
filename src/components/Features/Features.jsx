import React from 'react'
import "./Features.css"
import { featuresData } from '../../data/FeaturesData'
import Feature from './feature/Feature'

const Features = () => {
    return (
        <div className='signlang_features section__padding'>
            <div className="signlang_feature-heading">
                <h1 className="gradient__text">Revolutionizing Sign Language Communication with Cutting-Edge Technology</h1>
                <p>Explore the Features</p>
            </div>

             <div className="singlang_features-container">
                {featuresData.map((data,i)=> (
                    <Feature title={data.title} text={data.text} key={i*124569}/>
                ))}
             </div>

        </div>
    )
}

export default Features
