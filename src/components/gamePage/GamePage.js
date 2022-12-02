import React from "react";
import "./GamePage.scss";
import SingleGame from "../../assets/rest-of-single-game.png";

function GamePage() {
  return (
    <div>
      <img src={SingleGame} className="game-pic" />
    </div>
  );
}

export default GamePage;
