import React from "react";
import "./WhatComp.css"
import { Feature } from "../../components";
import { WhatfeatureData } from "../../data/FeaturesData";

const WhatComp = () => {
  return (
    <div className="signlang__whatsignlang section__margin" id="whatsignlang">
      <div className="signlang__whatsignlang-feature">
        <Feature
          title="What is Sign Language"
          text="Sign Language is a visual language using hand gestures, facial expressions, and body movements to communicate. It is recognized as an official language in many countries and is primarily used by people who are deaf or hard of hearing."
        />
      </div>

      <div className="signlang__whatsignlang-container">
        {
          WhatfeatureData.map((data,i)=>(
            <Feature title={data.title} text={data.text} key={i*201}/>
          ))
        }
        
      </div>
    </div>
  );
};

export default WhatComp;
