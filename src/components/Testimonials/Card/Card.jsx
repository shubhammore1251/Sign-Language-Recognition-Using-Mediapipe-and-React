import React from "react";
import "./Card.css";
import LeftQuote from "../../../assests/left_quote.png";
import UserIcon from "../../../assests/user-icon.png";

const Card = ({ title, text, tag }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-img">
          <img src={UserIcon} alt="user-img" />
        </div>

        <div className="card-data">
          <h2>{title}</h2>
          <p>{tag}</p>
        </div>

        <div className="card-icon">
          <img src={LeftQuote} alt="left_quote" />
        </div>
      </div>

      <div className="card-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
