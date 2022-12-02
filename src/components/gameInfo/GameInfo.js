import React from "react";
import "./GameInfo.scss";
import Info from "../../assets/info.png";
import Fifa from "../../assets/fifa-trophy.png";

function GameInfo() {
  return (
    <div className="info">
      <div className="info__right">
        <img src={Info} className="info__right--image" />
      </div>
      <div className="info__left">
        <div className="info__nav">
          <a className="info__nav-item">FIFA World Cup: Live</a>
          <a className="info__nav-item">Tournament Mode</a>
          <a className="info__nav-item">Kick Off</a>
          <a className="info__nav-item">FIFA Ultimate Team</a>
        </div>
        <div className="info__text-container">
          <div className="info__text--left">
            <h4 className="info__title">
              Follow and play the tournament as it progresses
            </h4>
            <h6 className="info__text">
              Follow the tournament with authentic fictures and squads for each
              game. Play the upcoming fixtures each day or any past match with
              authentic lineups, group standings, and results; or rewrite the
              outcome of any match to change the destination of the iconic
              trophy.
            </h6>
          </div>
          <img className="info__photo" src={Fifa}></img>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
