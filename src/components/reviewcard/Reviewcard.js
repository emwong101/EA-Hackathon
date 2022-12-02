import React from "react";
import "./Reviewcard.scss";
import friendOnline from "../../assets/icons/friendonline.svg";
import reviewStars from "../../assets/icons/stars.svg";
import rightChevron from "../../assets/icons/rightchevron.svg";
import leftChevron from "../../assets/icons/leftchevron.svg";

function Reviewcard() {
  return (
    <div className="review">
      <div className="review__header">
        <div className="review__header-left">
          <div className="review__header-left-text">Reviews</div>
          <div className="review__header-left-star">
            <img className="review__header-left-stars" src={reviewStars} />
          </div>

          <div className="review__header-left-viewall">View all</div>
        </div>
        <div className="review__header-right">
          <div className="review__header-right-leftchevron">
            <img className="review__header-left-stars" src={leftChevron} />
          </div>
          <div className="review__header-right-rightchevron">
            <img className="review__header-left-stars" src={rightChevron} />
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="reviewscard-1">
          <div className="reviewcard">
            <div className="reviewcard__header">
              <div className="reviewcard__header-left">
                <div className="reviewcard__user">
                  <img className="reviewcard__user-avatar" src={friendOnline} />
                </div>
                <div className="reviewcard__user-text">
                  <div className="reviewcard__user-name">airparagon06</div>
                  <div className="reviewcard__user-products">
                    58 products in profile
                  </div>
                </div>
              </div>
              <div className="reviewcard__header-right">Nov.25</div>
            </div>
            <div className="reviewcard__comment">
              After so long the game looks better on PC and the gameplay is
              solid too. Defending feels way less sloppy and keepers are more
              closer to their human counterparts.
            </div>
          </div>
        </div>
        <div className="reviewscard-2">
          {" "}
          <div className="reviewcard">
            <div className="reviewcard__header">
              <div className="reviewcard__header-left">
                <div className="reviewcard__user">
                  <img className="reviewcard__user-avatar" src={friendOnline} />
                </div>
                <div className="reviewcard__user-text">
                  <div className="reviewcard__user-name">super_soccer</div>
                  <div className="reviewcard__user-products">
                    120 products in profile
                  </div>
                </div>
              </div>
              <div className="reviewcard__header-right">Nov.24</div>
            </div>
            <div className="reviewcard__comment">
              +The hyper motion 2 makes this game close to the realism+Tackling
              is more easly and effective+The AI is really good doing its job
              for defending.+Love The Graphics
            </div>
          </div>
        </div>
        <div className="reviewscard-3">
          {" "}
          <div className="reviewcard">
            <div className="reviewcard__header">
              <div className="reviewcard__header-left">
                <div className="reviewcard__user">
                  <img className="reviewcard__user-avatar" src={friendOnline} />
                </div>
                <div className="reviewcard__user-text">
                  <div className="reviewcard__user-name">dyze19</div>
                  <div className="reviewcard__user-products">
                    17 products in profile
                  </div>
                </div>
              </div>
              <div className="reviewcard__header-right">Nov.20</div>
            </div>
            <div className="reviewcard__comment">
              a lot of improvement the animations, new corner kick & penalty and
              have a better career mode. The Fifa World Cup 2022 Qatar features
              also cool makes me more hype to play
            </div>
          </div>
        </div>
        <div className="reviewscard-4">
          {" "}
          <div className="reviewcard">
            <div className="reviewcard__header">
              <div className="reviewcard__header-left">
                <div className="reviewcard__user">
                  <img className="reviewcard__user-avatar" src={friendOnline} />
                </div>
                <div className="reviewcard__user-text">
                  <div className="reviewcard__user-name">Yellowstarz</div>
                  <div className="reviewcard__user-products">
                    78 products in profile
                  </div>
                </div>
              </div>
              <div className="reviewcard__header-right">Nov.20</div>
            </div>
            <div className="reviewcard__comment">
              This is all that fifa on PC really needed to be, you have next
              gen, you have hypermotion 2, you have crossplay (almost
              everywhere) and most of all you don't need to lock
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviewcard;
