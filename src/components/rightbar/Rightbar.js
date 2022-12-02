import React from "react";
import "./Rightbar.scss";
import friendOnline from "../../assets/icons/friendonline.svg";
import downChevron from "../../assets/icons/downchevron.svg";
import addFriend from "../../assets/icons/addfriend.svg";
import newChip from "../../assets/icons/newchip.svg";
import friendOffline from "../../assets/icons/friendoffline.svg";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar__header">
        <div className="rightbar__header-right">
          <div className="rightbar__user">
            <img className="rightbar__user-avatar" src={friendOnline} />
          </div>
          <div className="rightbar__user-name">
            <p className="rightbar__user-name-first">Filmmaster2003</p>
          </div>
        </div>
        <div>
          <img className="rightbar__user-downChevron" src={downChevron} />
        </div>
      </div>

      <div className="rightbar__friendsbar">
        <div className="rightbar__friendsbar-title">
          <div className="rightbar__friendsbar-text">
            <p>Friends</p>
          </div>
          <div className="rightbar__friendsbar-number">
            <p className="rightbar__number">1/3</p>
          </div>
        </div>
        <div>
          <img className="rightbar__user-downChevron" src={addFriend} />
        </div>
      </div>

      <div className="rightbar__friends">
        <div className="rightbar__friends-right">
          <div className="rightbar__frienduser">
            <img className="rightbar__frienduser-avatar" src={friendOnline} />
          </div>
          <div className="rightbar__frienduser-name">
            <p className="rightbar__user-name">CountChocula</p>
          </div>
        </div>
        <div>
          <img className="rightbar__user-downChevron" src={newChip} />
        </div>
      </div>

      <div className="rightbar__friends">
        <div className="rightbar__friends-right">
          <div className="rightbar__frienduser">
            <img className="rightbar__frienduser-avatar" src={friendOffline} />
          </div>
          <div className="rightbar__frienduser-name">
            <p className="rightbar__user-name">ronaldo_fan</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="rightbar__friends">
        <div className="rightbar__friends-right">
          <div className="rightbar__frienduser">
            <img className="rightbar__frienduser-avatar" src={friendOffline} />
          </div>
          <div className="rightbar__frienduser-name">
            <p className="rightbar__user-name">guch_world</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Rightbar;
