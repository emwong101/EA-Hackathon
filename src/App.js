import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SingleGameHero from "./components/singleGameHero/SingleGameHero";
import Rightbar from "./components/rightbar/Rightbar";
import { GameList } from "./components/gameList/GameList";
import { Nav } from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <div className="left">
        <Nav />
      </div>
      <div className="middle">
        <Header />
        <SingleGameHero />
        <GameList />
      </div>
      <div className="right">
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
