import "./GameOverview.scss";
import Overview from "../../assets/overview.png";
import React from "react";

function GameOverview() {
  return (
    <div className="gameOverview">
      <img className="overview" src={Overview} />
    </div>
  );
}

export default GameOverview;
