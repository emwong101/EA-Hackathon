import "./App.scss";
import Header from "./components/header/Header";
import SingleGameHero from "./components/singleGameHero/SingleGameHero";
import Main from "./pages/home/main";
import GameOverview from "./components/gameOverview/GameOverview";
import Rightbar from "./components/rightbar/Rightbar";
import { Nav } from "./components/nav/Nav";
import Game from "./pages/game/Game";

function App() {
  return (
    <div className="App">
      <div className="left">
        <Nav />
      </div>
      <div className="middle">
        <Main />
        <Game />
      </div>
      <div className="right">
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
