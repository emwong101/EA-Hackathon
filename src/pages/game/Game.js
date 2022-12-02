import React from "react";
import Card from "../../components/card/Card";
import GameOverview from "../../components/gameOverview/GameOverview";
import Header from "../../components/header/Header";
import SingleGameHero from "../../components/singleGameHero/SingleGameHero";
import Fifa from "../../assets/fifa-game-cover.png";
import Play from "../../assets/EA-play.png";
import "./Game.scss";
import GameInfo from "../../components/gameInfo/GameInfo";
import Reviewcard from "../../components/reviewcard/Reviewcard";
import GamePage from "../../components/gamePage/GamePage";

function Game() {
  return (
    <div className="game-page">
      <Header />
      <SingleGameHero />
      <GameOverview />
      <div className="cards">
        <Card
          cardTitle="Compete in FIFA World Cup 2022"
          cardText="Experience the drama and excitement of global competition as the men's FIFA World Cup comes to FIFA 23 in November 2022 at no additional cost"
          cardImage={Fifa}
        />
        <Card
          cardTitle="Get 10 hours of World cup action"
          cardText="Join the excitement of the FIFA World Cup for 10 hours, and save 10% when you buy FIFA 23"
          cardImage={Play}
        />
      </div>
      <GameInfo />
      <Reviewcard />
      <GamePage />
    </div>
  );
}

export default Game;
