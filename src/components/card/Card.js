import React from "react";
import "./Card.scss";

function Card({ cardTitle, cardImage, cardText }) {
  return (
    <div className="card">
      <div className="card__right">
        <h3 className="card__title">{cardTitle}</h3>
        <h6 className="card__text">{cardText}</h6>
      </div>
      <div className="card__left">
        <img className="card__photo" src={cardImage}></img>
      </div>
    </div>
  );
}

export default Card;
