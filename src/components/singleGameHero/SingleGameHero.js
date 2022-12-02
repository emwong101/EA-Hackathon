import "./SingleGameHero.scss";
import React from "react";
import Stars from "../../assets/review_stars.png";
import Cover from "../../assets/fifa-game-cover.png";
import EA from "../../assets/EA-Play-Logo.png";
import like from "../../assets/like.png";

function SingleGameHero() {
  return (
    <>
      <div className="hero__div">
        <div className="hero__top">
          <h2 className="hero__title">
            FIFA 23
            <span className="stars">
              <img src={Stars}></img>
            </span>
          </h2>
          <a className="hero__overview">Overview</a>
          <a className="hero__add-on">Add-ons</a>
        </div>
        <div className="hero__bottom">
          <div className="purchase">
            <img className="purchase__game-cover" src={Cover} />
            <div className="purchase__right">
              <div className="purchase__top">
                <div className="purchase__radio-top">
                  <input
                    type="radio"
                    id="buyGame"
                    className="purchase__radio"
                    name="radio"
                  ></input>
                  <label className="radio__label" htmlFor="buyGame">
                    Buy the game
                  </label>
                </div>
                <div className="purchase__price">
                  <p className="price__label">Starting at</p>
                  <h5 className="price__amount">$53.99</h5>
                </div>
              </div>
              <div className="purchase__middle">
                <button className="purchase__wishlist">
                  <img src={like} className="wishlist__icon"></img>
                  ADD TO WISHLIST
                </button>

                <input
                  type="button"
                  className="purchase__select"
                  value="SELECT EDITION"
                ></input>
              </div>
              <div className="purchase__bottom">
                <div className="purchase__radio-bottom">
                  <input
                    type="radio"
                    id="play"
                    className="purchase__radio"
                    name="radio"
                  ></input>
                  <label htmlFor="play" className="radio__label">
                    <img src={EA} className="radio__logo" />
                  </label>
                </div>
                <div className="purchase__price">
                  <p className="price__label">Starting at</p>
                  <h5 className="price__amount">
                    $4.99<span className="month">/mo</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__release">
            <p className="hero__release-label">Release date</p>
            <p className="hero__release-date">2022-09-30</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleGameHero;
