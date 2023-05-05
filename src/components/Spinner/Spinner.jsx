import React from "react";
import "./Spinner.css";
import Loader from "../../assests/Spinner.svg"

const Spinner = () => {

  return (
    <div className="signlang__loader">
       <img src={Loader} alt="loader"/>
    </div>
  );
};

export default Spinner;
