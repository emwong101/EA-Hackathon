import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SingleGameHero from "./components/singleGameHero/SingleGameHero";
import Main from "./pages/home/main";
import Rightbar from "./components/rightbar/Rightbar";
import { Home } from "./pages/home/Home";
import { Nav } from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <div className="left">
        <Nav />
      </div>
      <div className="middle">
        <Main />
      </div>
      <div className="right">
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
