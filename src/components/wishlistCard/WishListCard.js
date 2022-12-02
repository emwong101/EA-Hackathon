import "./WishListCard.scss";
import React from "react";
import noTick from "../../assets/icons/emptytick.svg";
import eaPlay from "../../assets/icons/eaplay.svg";
import wildHearts from "../../assets/wishlist/wildhearts.svg";
import blueTick from "../../assets/wishlist/bluetick.svg";
import rank from "../../assets/wishlist/rank.svg";
import selectButton from "../../assets/wishlist/select.svg";
import heart from "../../assets/wishlist/heart.svg";
import fifa2023 from "../../assets/wishlist/fifa2023.svg";

function WishListCard() {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <img className="card__img-image" src={fifa2023} />
        </div>
        <div className="card__details">
          <div className="card__details-top">
            <div className="card__details-top-left">
              <div className="card__details-top-left1">
                <div className="card__details-top-left1-title">FIFA 2023</div>
                <div className="card__details-top-left1-stars">
                  <img
                    className="card__details-top-left1-stars-img"
                    src={rank}
                  />
                </div>
              </div>
              <div className="card__details-top-left-text">
                Added on *Insert date that the game was added to the wish list
              </div>
              <div className="card__details-top-left-buy">
                <div className="card__details-top-left-buy-tick">
                  <img
                    className="card__details-top-left-buy-tick-img"
                    src={blueTick}
                  />
                </div>
                <div className="card__details-top-left-buy-game">Buy Game</div>
              </div>
            </div>
            <div className="card__details-top-right">
              <div className="card__details-top-right-text">
                <div className="card__details-top-right-top">Starting at</div>
                <div className="card__details-top-right-middle">
                  <div className="card__details-top-right-middle-stricked">
                    89.99
                  </div>
                  <div className="card__details-top-right-middle-price">
                    $53.99
                  </div>
                </div>
                <div className="card__details-top-right-bottom">Save 40%</div>
              </div>
              <div className="card__details-top-right-buttons">
                <div className="card__details-top-right-buttons1">
                  <button className="card__details-top-right-buttons12">
                    <img
                      className="card__details-top-right-buttons12-img"
                      src={heart}
                    />

                    <p className="card__details-top-right-buttons12-text">
                      REMOVED FROM WISHLIST
                    </p>
                  </button>
                </div>
                <div className="card__details-top-right-buttons2">
                  <img
                    className="card__details-top-right-buttons2-img"
                    src={selectButton}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card__details-bottom">
            <div className="card__details-bottom-left">
              <div className="card__details-bottom-left-empty">
                <img
                  className="card__details-bottom-left-empty-img"
                  src={noTick}
                />
              </div>
              <div className="card__details-bottom-left-eaplay">
                <img
                  className="card__details-bottom-left-eaplay-img"
                  src={eaPlay}
                />
                {/* <img
                  className="card__details-bottom-left-eaplay-img"
                  src={wildHearts}
                /> */}
              </div>
            </div>
            <div className="card__details-bottom-right">
              <div className="card__details-bottom-right-at">Starting at</div>
              <div className="card__details-bottom-right-price">$4.99/mo</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishListCard;
